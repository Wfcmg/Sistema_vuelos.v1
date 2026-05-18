import { createRequire } from 'module';

const _require = createRequire(import.meta.url);
const { PrismaClient } = _require('../../../prisma-client-payments/index.js');

const prismaPayments = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
});

export default prismaPayments;
