import type { PrismaClient } from '@prisma/client';

export class ReservationPassengerQueryRepository {
  constructor(private readonly db: PrismaClient) {}

  async getStats() {
    const [total, withSeat] = await Promise.all([
      (this.db as any).reservationPassenger.count(),
      (this.db as any).reservationPassenger.count({ where: { seatNumber: { not: null } } }),
    ]);
    return { total, withSeat, withoutSeat: total - withSeat };
  }

  async findByReservation(reservationId: string) {
    return (this.db as any).reservationPassenger.findMany({
      where: { reservationId },
      include: {
        reservation: { select: { id: true, reservationCode: true, userId: true } },
        extraServices: true,
        boardingPasses: true,
      },
    });
  }

  async findAll() {
    return (this.db as any).reservationPassenger.findMany({
      include: {
        reservation: { select: { id: true, reservationCode: true, userId: true } },
      },
      orderBy: { lastName: 'asc' },
    });
  }
}
