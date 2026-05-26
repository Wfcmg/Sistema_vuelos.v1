import 'dotenv/config';
import { createServiceApp } from '../shared/app-factory.js';
import { errorHandler } from '../shared/middlewares/error.middleware.js';
import { registerAuditSubscriber } from '../shared/events/audit-subscriber.js';
import { bookingEventPublisher } from '../shared/events/event-publisher.middleware.js';
import { validateJwtConfig } from '../shared/security/jwt.config.js';
import prismaBooking from '../shared/database/prisma.booking.client.js';
import prismaCatalog from '../shared/database/prisma.catalog.client.js';
import prismaPayments from '../shared/database/prisma.payments.client.js';

import { ReservationRepository }         from '../modules/api_reservations/repositories/ReservationRepository.js';
import { ReservationPassengerRepository } from '../modules/api_reservation_passengers/repositories/ReservationPassengerRepository.js';
import { BillingProfileRepository }      from '../modules/api_billing_profiles/repositories/BillingProfileRepository.js';
import { BoardingPassRepository }        from '../modules/api_boarding_passes/repositories/BoardingPassRepository.js';
// Dependencias de dominio cruzado Ã¢â‚¬â€ mismo DB compartido
import { FlightClassRepository }  from '../modules/api_flight_classes/repositories/FlightClassRepository.js';
import { PromotionRepository }    from '../modules/api_promotions/repositories/PromotionRepository.js';

import {
  ReservationQueryRepository,
  BillingProfileQueryRepository,
  BoardingPassQueryRepository,
  ReservationPassengerQueryRepository,
} from '../shared/queries/index.js';

import { ReservationService }         from '../modules/api_reservations/services/ReservationService.js';
import { ReservationPassengerService } from '../modules/api_reservation_passengers/services/ReservationPassengerService.js';
import { BillingProfileService }      from '../modules/api_billing_profiles/services/BillingProfileService.js';
import { BoardingPassService }        from '../modules/api_boarding_passes/services/BoardingPassService.js';

import { ReservationController }         from '../modules/api_reservations/controllers/ReservationController.js';
import { ReservationPassengerController } from '../modules/api_reservation_passengers/controllers/ReservationPassengerController.js';
import { BillingProfileController }      from '../modules/api_billing_profiles/controllers/BillingProfileController.js';
import { BoardingPassController }        from '../modules/api_boarding_passes/controllers/BoardingPassController.js';

import { createReservationRouter }         from '../modules/api_reservations/routes/reservations.routes.js';
import { createReservationPassengerRouter } from '../modules/api_reservation_passengers/routes/reservation-passengers.routes.js';
import { createBillingProfileRouter }      from '../modules/api_billing_profiles/routes/billing-profiles.routes.js';
import { createBoardingPassRouter }        from '../modules/api_boarding_passes/routes/boarding-passes.routes.js';

const PORT = Number(process.env.BOOKING_SERVICE_PORT) || 3004;

validateJwtConfig();

// Repositories
const reservationRepo         = new ReservationRepository(prismaBooking);
const reservationPassengerRepo = new ReservationPassengerRepository(prismaBooking);
const billingProfileRepo      = new BillingProfileRepository(prismaPayments);
const boardingPassRepo        = new BoardingPassRepository(prismaBooking);
const flightClassRepo         = new FlightClassRepository(prismaCatalog);
const promotionRepo           = new PromotionRepository(prismaBooking);

// Query repos
const reservationQuery         = new ReservationQueryRepository(prismaBooking);
const billingProfileQuery      = new BillingProfileQueryRepository(prismaPayments);
const boardingPassQuery        = new BoardingPassQueryRepository(prismaBooking);
const reservationPassengerQuery = new ReservationPassengerQueryRepository(prismaBooking);

// Services
const reservationService         = new ReservationService(reservationRepo, flightClassRepo, promotionRepo);
const reservationPassengerService = new ReservationPassengerService(reservationPassengerRepo);
const billingProfileService      = new BillingProfileService(billingProfileRepo);
const boardingPassService        = new BoardingPassService(boardingPassRepo);

// Controllers
const reservationController         = new ReservationController(reservationService);
const reservationPassengerController = new ReservationPassengerController(reservationPassengerService);
const billingProfileController      = new BillingProfileController(billingProfileService);
const boardingPassController        = new BoardingPassController(boardingPassService);

const app = createServiceApp('booking-service');

registerAuditSubscriber('booking-service');
app.use(bookingEventPublisher);

app.get(['/health', '/'], (_req, res) => {
  res.json({
    service: 'booking-service',
    status: 'online',
    port: PORT,
    version: '2.0.0',
    resources: ['reservations', 'reservation-passengers', 'billing-profiles', 'boarding-passes'],
  });
});

app.use('/api/v1/reservations',          createReservationRouter(reservationController, prismaBooking));
app.use('/api/v1/reservation-passengers', createReservationPassengerRouter(reservationPassengerController, prismaBooking));
app.use('/api/v1/reservas', createReservationRouter(reservationController, prismaBooking));
app.use('/api/v1/billing-profiles',      createBillingProfileRouter(billingProfileController, prismaPayments));
app.use('/api/v1/boarding-passes',       createBoardingPassRouter(boardingPassController, prismaBooking));
app.use('/api/reservations',             createReservationRouter(reservationController, prismaBooking));

app.use((req, res) => {
  res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: `Ruta ${req.originalUrl} no encontrada` } });
});
app.use(errorHandler);

async function start() {
  await prismaBooking.$connect();
  await prismaCatalog.$connect();
  await prismaPayments.$connect();
  app.listen(PORT, () => console.log(`Ã°Å¸Å¡â‚¬ [booking-service] Ã¢â€ â€™ http://localhost:${PORT}`));
}

process.on('SIGINT',  async () => { await prismaBooking.$disconnect(); await prismaCatalog.$disconnect(); await prismaPayments.$disconnect(); process.exit(0); });
process.on('SIGTERM', async () => { await prismaBooking.$disconnect(); await prismaCatalog.$disconnect(); await prismaPayments.$disconnect(); process.exit(0); });
process.on('uncaughtException',  (err) => { console.error('[booking-service] ExcepciÃƒÂ³n:', err); process.exit(1); });
process.on('unhandledRejection', (r)   => { console.error('[booking-service] Promesa rechazada:', r); process.exit(1); });

start().catch((err) => { console.error('[booking-service] Error al iniciar:', err); process.exit(1); });
