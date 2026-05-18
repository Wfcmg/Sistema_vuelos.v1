import 'dotenv/config';
import { createServiceApp } from '../shared/app-factory.js';
import { errorHandler } from '../shared/middlewares/error.middleware.js';
import { validateJwtConfig } from '../shared/security/jwt.config.js';
import prismaAuth from '../shared/database/prisma.auth.client.js';
import prismaCatalog from '../shared/database/prisma.catalog.client.js';
import prismaBooking from '../shared/database/prisma.booking.client.js';

import { UserRepository }    from '../modules/api_users/repositories/UserRepository.js';
import { AuditLogRepository } from '../modules/api_audit_logs/repositories/AuditLogRepository.js';

import {
  AirportQueryRepository,
  FlightQueryRepository,
  ReservationQueryRepository,
  UserQueryRepository,
  AuditLogQueryRepository,
} from '../shared/queries/index.js';

import { UserService }     from '../modules/api_users/services/UserService.js';
import { AuditLogService } from '../modules/api_audit_logs/services/AuditLogService.js';

import { AdminController }   from '../modules/api_admin/controllers/AdminController.js';
import { AuditLogController } from '../modules/api_audit_logs/controllers/AuditLogController.js';

import { createAdminRouter }    from '../modules/api_admin/routes/admin.routes.js';
import { createAuditLogRouter } from '../modules/api_audit_logs/routes/audit-logs.routes.js';

const PORT = Number(process.env.ADMIN_SERVICE_PORT) || 3006;

validateJwtConfig();

// Repositories
const userRepo     = new UserRepository(prismaAuth);
const auditLogRepo = new AuditLogRepository(prismaAuth);

// Query repos (multi-dominio para estadÃƒÂ­sticas del dashboard admin)
const airportQuery     = new AirportQueryRepository(prismaCatalog);
const flightQuery      = new FlightQueryRepository(prismaCatalog);
const reservationQuery = new ReservationQueryRepository(prismaBooking);
const userQuery        = new UserQueryRepository(prismaAuth);
const auditLogQuery    = new AuditLogQueryRepository(prismaAuth);

// Services
const userService     = new UserService(userRepo);
const auditLogService = new AuditLogService(auditLogRepo);

// Controllers
const adminController   = new AdminController(userService, airportQuery, flightQuery, reservationQuery, userQuery);
const auditLogController = new AuditLogController(auditLogService);

const app = createServiceApp('admin-service');

app.get(['/health', '/'], (_req, res) => {
  res.json({
    service: 'admin-service',
    status: 'online',
    port: PORT,
    version: '2.0.0',
    resources: ['admin', 'audit-logs'],
  });
});

app.use('/api/v1/admin',      createAdminRouter(adminController, prismaAuth));
app.use('/api/v1/audit-logs', createAuditLogRouter(auditLogController));
app.use('/api/admin',         createAdminRouter(adminController, prismaAuth));

app.use((req, res) => {
  res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Ruta ${req.originalUrl} no encontrada` } });
});
app.use(errorHandler);

async function start() {
  await prismaAuth.$connect();
  await prismaCatalog.$connect();
  await prismaBooking.$connect();
  app.listen(PORT, () => console.log(`Ã°Å¸Å¡â‚¬ [admin-service] Ã¢â€ â€™ http://localhost:${PORT}`));
}

process.on('SIGINT',  async () => { await prismaAuth.$disconnect(); await prismaCatalog.$disconnect(); await prismaBooking.$disconnect(); process.exit(0); });
process.on('SIGTERM', async () => { await prismaAuth.$disconnect(); await prismaCatalog.$disconnect(); await prismaBooking.$disconnect(); process.exit(0); });
process.on('uncaughtException',  (err) => { console.error('[admin-service] ExcepciÃƒÂ³n:', err); process.exit(1); });
process.on('unhandledRejection', (r)   => { console.error('[admin-service] Promesa rechazada:', r); process.exit(1); });

start().catch((err) => { console.error('[admin-service] Error al iniciar:', err); process.exit(1); });
