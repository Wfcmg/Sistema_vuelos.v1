import { createRequire } from 'module';

const _require = createRequire(import.meta.url);
const { PrismaClient } = _require('../../../prisma-client-catalog/index.js');

const prismaCatalog = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
});

export default prismaCatalog;
