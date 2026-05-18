import 'dotenv/config';
import { createServiceApp } from '../shared/app-factory.js';
import { errorHandler } from '../shared/middlewares/error.middleware.js';
import { validateJwtConfig } from '../shared/security/jwt.config.js';
import prismaAuth from '../shared/database/prisma.auth.client.js';

import { UserRepository }    from '../modules/api_users/repositories/UserRepository.js';
import { AuthService }       from '../modules/api_users/services/AuthService.js';
import { AuthController }    from '../modules/api_users/controllers/AuthController.js';
import { createAuthRouter }  from '../modules/api_users/routes/auth.routes.js';

const PORT = Number(process.env.AUTH_SERVICE_PORT) || 3001;

validateJwtConfig();

const userRepo       = new UserRepository(prismaAuth);
const authService    = new AuthService(userRepo);
const authController = new AuthController(authService);

const app = createServiceApp('auth-service');

app.get(['/health', '/'], (_req, res) => {
  res.json({ service: 'auth-service', status: 'online', port: PORT, version: '2.0.0' });
});

app.use('/api/v1/auth', createAuthRouter(authController));
app.use('/api/auth',    createAuthRouter(authController));

app.use((req, res) => {
  res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Ruta ${req.originalUrl} no encontrada` } });
});
app.use(errorHandler);

async function start() {
  await prismaAuth.$connect();
  app.listen(PORT, () => console.log(`Ã°Å¸Å¡â‚¬ [auth-service] Ã¢â€ â€™ http://localhost:${PORT}`));
}

process.on('SIGINT',  async () => { await prismaAuth.$disconnect(); process.exit(0); });
process.on('SIGTERM', async () => { await prismaAuth.$disconnect(); process.exit(0); });
process.on('uncaughtException',  (err) => { console.error('[auth-service] ExcepciÃƒÂ³n:', err); process.exit(1); });
process.on('unhandledRejection', (r)   => { console.error('[auth-service] Promesa rechazada:', r); process.exit(1); });

start().catch((err) => { console.error('[auth-service] Error al iniciar:', err); process.exit(1); });
