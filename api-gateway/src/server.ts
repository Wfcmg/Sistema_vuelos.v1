import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createYoga, createSchema } from 'graphql-yoga';
import { correlationId } from './middleware/correlationId.js';
import { requestLogger } from './middleware/logger.js';
import { globalRateLimiter, authRateLimiter, searchRateLimiter } from './middleware/rateLimiter.js';
import { createProxyRouter, getCircuitBreakerStatus } from './proxy/router.js';
import { registry } from './config/registry.js';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';
import { buildContext, type ServiceUrls } from './graphql/context.js';

const app  = express();
const PORT = Number(process.env.PORT) || 3000;

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4200',
  process.env.FRONTEND_URL,
  'https://integracion-sistemas2026.onrender.com',
  'https://mango-meadow-0d3fdd810.7.azurestaticapps.net',
].filter(Boolean) as string[];

const services: ServiceUrls = {
  catalog:  process.env.CATALOG_SERVICE_URL  ?? 'http://localhost:3002',
  flights:  process.env.FLIGHTS_SERVICE_URL  ?? 'http://localhost:3003',
  booking:  process.env.BOOKING_SERVICE_URL  ?? 'http://localhost:3004',
  payments: process.env.PAYMENTS_SERVICE_URL ?? 'http://localhost:3005',
  admin:    process.env.ADMIN_SERVICE_URL    ?? 'http://localhost:3006',
};

// ── Seguridad ────────────────────────────────────────────────
app.disable('x-powered-by');
app.set('trust proxy', 1);

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  referrerPolicy: { policy: 'no-referrer' },
}));

app.use(cors({
  origin(origin, cb) {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    console.warn('[gateway] CORS bloqueado:', origin);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-correlation-id'],
  exposedHeaders: ['X-Correlation-Id'],
  maxAge: 600,
}));

// ── Middleware pipeline ──────────────────────────────────────
app.use(correlationId);
app.use(globalRateLimiter);
app.use(requestLogger);

// Rate limits específicos
app.use(
  ['/api/v1/auth/login', '/api/v1/auth/register', '/api/auth/login', '/api/auth/register'],
  authRateLimiter,
);
app.use(['/api/v1/flights/search', '/api/flights/search'], searchRateLimiter);

// ── Health check del gateway ─────────────────────────────────
app.get(['/', '/health'], async (_req, res) => {
  const serviceChecks = await Promise.allSettled(
    registry.map(async (svc) => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 2000);
      try {
        const r = await fetch(`${svc.url}/health`, { signal: controller.signal });
        clearTimeout(timer);
        return { service: svc.name, status: r.ok ? 'up' : 'degraded', url: svc.url };
      } catch {
        clearTimeout(timer);
        return { service: svc.name, status: 'down', url: svc.url };
      }
    }),
  );

  const svcs = serviceChecks.map((c) =>
    c.status === 'fulfilled' ? c.value : { service: 'unknown', status: 'down' },
  );
  const allUp = svcs.every((s) => s.status === 'up');

  res.status(allUp ? 200 : 207).json({
    component: 'api-gateway',
    version: '2.0.0',
    status: allUp ? 'online' : 'degraded',
    services: svcs,
    circuitBreakers: getCircuitBreakerStatus(),
    ts: new Date().toISOString(),
  });
});

// ── GraphQL Aggregator (arquitectura híbrida REST + gRPC + GraphQL) ──
// Yoga sirve el IDE GraphiQL en GET /graphql (solo en desarrollo)
const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/graphql',
  graphiql: process.env.NODE_ENV !== 'production',
  maskedErrors: process.env.NODE_ENV === 'production',
  context: ({ request }: { request: Request }) => buildContext(request, services),
  logging: false, // el gateway ya tiene su propio logger
});

// Yoga implementa la interfaz estándar Node.js HTTP — compatible con Express 5
app.use('/graphql', yoga as unknown as express.RequestHandler);

// ── Proxy REST → microservicios ──────────────────────────────

// ============================================================
// RUTA_PUBLICA_WILLIAM_CARRION_BOOKING
// Endpoint publico solicitado para Booking.
// Se coloca ANTES del proxy para no romper microservicios,
// Prisma, bases de datos ni rutas existentes.
// ============================================================
app.get([
  '/api/v1/William-Carrion-Booking',
  '/api/v1/William-Carrión-Booking',
  '/api/v1/William-Carrion-Booking'
], (_req, res) => {
  res.status(200).json({
    success: true,
    owner: 'William Carrion',
    project: 'booking',
    route: '/api/v1/William-Carrion-Booking',
    aliases: [
      '/api/v1/William-Carrión-Booking',
      '/api/v1/William-Carrion-Booking'
    ],
    visibility: 'public',
    message: 'Ruta publica exclusiva de Booking activa desde el API Gateway',
    gateway: 'api-gateway',
    status: 'online',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});

// ============================================================
// API_PUBLICA_BOOKING_ENDPOINTS_GET
// Endpoints publicos exclusivos para Booking.
// No usan JWT. Solo exponen datos necesarios para consultar vuelos.
// ============================================================

async function bookingFetchJson(url: string) {
  const response = await fetch(url);

  const text = await response.text();
  let body: any = null;

  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = { raw: text };
  }

  if (!response.ok) {
    throw {
      status: response.status,
      body
    };
  }

  return body;
}

app.get([
  '/api/v1/William-Carrion-Booking/airports',
  '/api/v1/William-Carrión-Booking/airports',
  '/api/v1/william-carrion-booking/airports'
], async (_req, res) => {
  try {
    const result = await bookingFetchJson(`${services.catalog}/api/v1/airports`);

    const data = (result.data ?? []).map((airport: any) => ({
      id: airport.id,
      iataCode: airport.iataCode,
      name: airport.name,
      city: airport.city?.name ?? airport.city ?? null,
      country: airport.city?.country?.name ?? airport.country ?? null,
      timezone: airport.timezone
    }));

    res.status(200).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public',
      auth: 'none',
      data
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_AIRPORTS_ERROR',
        message: 'No se pudieron obtener los aeropuertos para Booking',
        details: err.body ?? null
      }
    });
  }
});
app.get([
  '/api/v1/William-Carrion-Booking/flights',
  '/api/v1/William-Carrión-Booking/flights',
  '/api/v1/william-carrion-booking/flights'
], async (_req, res) => {
  try {
    const result = await bookingFetchJson(`${services.flights}/api/v1/flights`);

    const data = (result.data ?? []).map((flight: any) => ({
      flightId: flight.id,
      flightNumber: flight.flightNumber,
      origin: flight.originAirportIata,
      destination: flight.destinationAirportIata,
      departureDate: flight.departureDate,
      departureDateTime: flight.departureDateTime,
      arrivalDateTime: flight.arrivalDateTime,
      status: flight.status,
      duration: flight.duration,
      stops: flight.stops,
      lowestPrice: flight.lowestPrice,
      airline: flight.airline?.name ?? null,
      aircraft: flight.aircraft ?? null,
      route: flight.route ?? null,
      classes: (flight.flightClasses ?? []).map((fc: any) => ({
        flightClassId: fc.id,
        cabinClass: fc.classType ?? fc.cabinClass,
        availableSeats: fc.availableSeats,
        basePrice: fc.basePrice
      }))
    }));

    res.status(200).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public',
      auth: 'none',
      data
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_FLIGHTS_LIST_ERROR',
        message: 'No se pudieron obtener todos los vuelos para Booking',
        details: err.body ?? null
      }
    });
  }
});
app.get([
  '/api/v1/William-Carrion-Booking/flights/search',
  '/api/v1/William-Carrión-Booking/flights/search',
  '/api/v1/william-carrion-booking/flights/search'
], async (req, res) => {
  try {
    const query = new URLSearchParams(req.query as Record<string, string>).toString();
    const result = await bookingFetchJson(`${services.flights}/api/v1/flights/search?${query}`);

    const data = (result.data ?? []).map((flight: any) => ({
      flightId: flight.id,
      flightNumber: flight.flightNumber,
      origin: flight.originAirportIata,
      destination: flight.destinationAirportIata,
      departureDate: flight.departureDate,
      departureDateTime: flight.departureDateTime,
      arrivalDateTime: flight.arrivalDateTime,
      status: flight.status,
      duration: flight.duration,
      stops: flight.stops,
      lowestPrice: flight.lowestPrice,
      airline: flight.airline?.name ?? null,
      aircraft: flight.aircraft ?? null,
      route: flight.route ?? null,
      classes: (flight.flightClasses ?? []).map((fc: any) => ({
        flightClassId: fc.id,
        cabinClass: fc.classType ?? fc.cabinClass,
        availableSeats: fc.availableSeats,
        basePrice: fc.basePrice
      }))
    }));

    res.status(200).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public',
      auth: 'none',
      data
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_FLIGHTS_SEARCH_ERROR',
        message: 'No se pudieron buscar vuelos para Booking',
        details: err.body ?? null
      }
    });
  }
});

app.get([
  '/api/v1/William-Carrion-Booking/flights/:id',
  '/api/v1/William-Carrión-Booking/flights/:id',
  '/api/v1/william-carrion-booking/flights/:id'
], async (req, res) => {
  try {
    const id = encodeURIComponent(String(req.params.id));
    const result = await bookingFetchJson(`${services.flights}/api/v1/flights/${id}`);

    res.status(200).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public',
      auth: 'none',
      data: result.data
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_FLIGHT_DETAIL_ERROR',
        message: 'No se pudo obtener el detalle del vuelo para Booking',
        details: err.body ?? null
      }
    });
  }
});

// ============================================================
// API_PUBLICA_BOOKING_RESERVAS_ASIENTOS
// Endpoints publicos de contrato Booking para reservas.
// Se colocan ANTES del proxy general para no romper rutas existentes.
// IMPORTANTE:
// - Consulta de asientos ocupados: no requiere token.
// - Crear/cancelar/asignar asiento: reenvia Authorization si el integrador lo manda.
// ============================================================

async function bookingForwardJson(
  url: string,
  method: 'POST' | 'PATCH',
  body: unknown,
  authorization?: string
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };

  if (authorization) {
    headers.Authorization = authorization;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body ?? {})
  });

  const text = await response.text();
  let responseBody: any = null;

  try {
    responseBody = text ? JSON.parse(text) : null;
  } catch {
    responseBody = { raw: text };
  }

  if (!response.ok) {
    throw {
      status: response.status,
      body: responseBody
    };
  }

  return responseBody;
}

app.get([
  '/api/v1/William-Carrion-Booking/flight-classes/:flightClassId/occupied-seats',
  '/api/v1/William-Carrión-Booking/flight-classes/:flightClassId/occupied-seats',
  '/api/v1/william-carrion-booking/flight-classes/:flightClassId/occupied-seats'
], async (req, res) => {
  try {
    const flightClassId = encodeURIComponent(String(req.params.flightClassId));

    const result = await bookingFetchJson(
      `${services.booking}/api/v1/reservations/flight-classes/${flightClassId}/occupied-seats`
    );

    res.status(200).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public',
      auth: 'none',
      feature: 'occupied-seats',
      data: result.data ?? result
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_OCCUPIED_SEATS_ERROR',
        message: 'No se pudieron obtener los asientos ocupados para Booking',
        details: err.body ?? null
      }
    });
  }
});

app.post([
  '/api/v1/William-Carrion-Booking/reservations',
  '/api/v1/William-Carrión-Booking/reservations',
  '/api/v1/william-carrion-booking/reservations'
], express.json({ limit: '1mb' }), async (req, res) => {
  try {
    const result = await bookingForwardJson(
      `${services.booking}/api/v1/reservations`,
      'POST',
      req.body,
      req.headers.authorization
    );

    res.status(201).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public-contract',
      auth: req.headers.authorization ? 'bearer-forwarded' : 'required-by-booking-service',
      feature: 'create-reservation',
      data: result.data ?? result
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_CREATE_RESERVATION_ERROR',
        message: 'No se pudo crear la reserva para Booking',
        details: err.body ?? null
      }
    });
  }
});

app.patch([
  '/api/v1/William-Carrion-Booking/reservations/:id/cancel',
  '/api/v1/William-Carrión-Booking/reservations/:id/cancel',
  '/api/v1/william-carrion-booking/reservations/:id/cancel'
], express.json({ limit: '1mb' }), async (req, res) => {
  try {
    const id = encodeURIComponent(String(req.params.id));

    const result = await bookingForwardJson(
      `${services.booking}/api/v1/reservations/${id}/cancel`,
      'PATCH',
      req.body ?? {},
      req.headers.authorization
    );

    res.status(200).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public-contract',
      auth: req.headers.authorization ? 'bearer-forwarded' : 'required-by-booking-service',
      feature: 'cancel-reservation',
      data: result.data ?? result
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_CANCEL_RESERVATION_ERROR',
        message: 'No se pudo cancelar la reserva para Booking',
        details: err.body ?? null
      }
    });
  }
});

app.patch([
  '/api/v1/William-Carrion-Booking/reservations/:reservationId/passengers/:passengerId/seat',
  '/api/v1/William-Carrión-Booking/reservations/:reservationId/passengers/:passengerId/seat',
  '/api/v1/william-carrion-booking/reservations/:reservationId/passengers/:passengerId/seat'
], express.json({ limit: '1mb' }), async (req, res) => {
  try {
    const reservationId = encodeURIComponent(String(req.params.reservationId));
    const passengerId = encodeURIComponent(String(req.params.passengerId));

    const result = await bookingForwardJson(
      `${services.booking}/api/v1/reservations/${reservationId}/passengers/${passengerId}/seat`,
      'PATCH',
      req.body,
      req.headers.authorization
    );

    res.status(200).json({
      success: true,
      owner: 'William Carrion',
      api: 'William Carrion Booking API',
      version: 'v1',
      module: 'booking',
      visibility: 'public-contract',
      auth: req.headers.authorization ? 'bearer-forwarded' : 'required-by-booking-service',
      feature: 'set-seat',
      data: result.data ?? result
    });
  } catch (err: any) {
    res.status(err.status ?? 502).json({
      success: false,
      error: {
        code: 'BOOKING_SET_SEAT_ERROR',
        message: 'No se pudo asignar el asiento para Booking',
        details: err.body ?? null
      }
    });
  }
});

app.use(createProxyRouter());

// ── 404 ─────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: `Ruta ${req.originalUrl} no encontrada en el gateway` },
  });
});

app.listen(PORT, () => {
  console.log(`\n🌐 API Gateway — http://localhost:${PORT}`);
  console.log(`   GraphQL IDE  → http://localhost:${PORT}/graphql`);
  console.log(`   Enrutando a ${registry.length} microservicios:\n`);
  for (const svc of registry) {
    console.log(`   [${svc.name.padEnd(20)}] → ${svc.url}`);
    for (const p of svc.pathPrefixes) {
      console.log(`      ${p}`);
    }
  }
  console.log('');
});




