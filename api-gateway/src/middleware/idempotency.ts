import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { randomUUID } from 'crypto';

type CacheEntry =
  | {
      status: 'processing';
      createdAt: number;
    }
  | {
      status: 'completed';
      createdAt: number;
      statusCode: number;
      body: unknown;
      headers: Record<string, string>;
    };

const IDEMPOTENCY_TTL_MS = 10 * 60 * 1000;
const store = new Map<string, CacheEntry>();

function cleanExpiredEntries() {
  const now = Date.now();

  for (const [key, value] of store.entries()) {
    if (now - value.createdAt > IDEMPOTENCY_TTL_MS) {
      store.delete(key);
    }
  }
}

function isUuidLike(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function buildCacheKey(req: Request, idempotencyKey: string): string {
  const routeKey = `${req.method}:${req.originalUrl}`;
  const userId =
    typeof req.body === 'object' &&
    req.body !== null &&
    'userId' in req.body
      ? String((req.body as { userId?: unknown }).userId ?? 'anonymous')
      : 'anonymous';

  return `${routeKey}:${userId}:${idempotencyKey}`;
}

export function idempotencyMiddleware(): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): void => {
    cleanExpiredEntries();

    const rawKey = req.header('X-Idempotency-Key');

    if (!rawKey) {
      res.status(400).json({
        success: false,
        error: {
          code: 'IDEMPOTENCY_KEY_REQUIRED',
          message: 'La cabecera X-Idempotency-Key es obligatoria para esta operacion transaccional.',
        },
      });
      return;
    }

    const idempotencyKey = rawKey.trim();

    if (!isUuidLike(idempotencyKey)) {
      res.status(400).json({
        success: false,
        error: {
          code: 'IDEMPOTENCY_KEY_INVALID',
          message: 'La cabecera X-Idempotency-Key debe tener formato UUID.',
        },
      });
      return;
    }

    const cacheKey = buildCacheKey(req, idempotencyKey);
    const existing = store.get(cacheKey);

    res.setHeader('X-Idempotency-Key', idempotencyKey);

    if (existing?.status === 'processing') {
      res.status(409).json({
        success: false,
        error: {
          code: 'IDEMPOTENCY_REQUEST_PROCESSING',
          message: 'La operacion con esta clave de idempotencia ya esta en procesamiento.',
        },
      });
      return;
    }

    if (existing?.status === 'completed') {
      for (const [header, value] of Object.entries(existing.headers)) {
        res.setHeader(header, value);
      }

      res.setHeader('X-Idempotency-Replayed', 'true');
      res.status(existing.statusCode).json(existing.body);
      return;
    }

    store.set(cacheKey, {
      status: 'processing',
      createdAt: Date.now(),
    });

    const originalJson = res.json.bind(res);

    res.json = function patchedJson(body: unknown): Response {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        store.set(cacheKey, {
          status: 'completed',
          createdAt: Date.now(),
          statusCode: res.statusCode,
          body,
          headers: {
            'X-Idempotency-Key': idempotencyKey,
            'X-Idempotency-Cache-Id': randomUUID(),
          },
        });
      } else {
        store.delete(cacheKey);
      }

      return originalJson(body);
    };

    next();
  };
}
