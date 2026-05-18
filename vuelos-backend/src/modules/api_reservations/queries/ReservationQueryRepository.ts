import type { PrismaClient } from '@prisma/client';

export class ReservationQueryRepository {
  constructor(private readonly db: PrismaClient) {}

  async getDashboardStats() {
    const [totalReservations, confirmedReservations, cancelledReservations, totalRevenue] =
      await Promise.all([
        (this.db as any).reservation.count(),
        (this.db as any).reservation.count({ where: { status: 'CONFIRMED' } }),
        (this.db as any).reservation.count({ where: { status: 'CANCELLED' } }),
        (this.db as any).reservation.aggregate({
          where: { status: 'CONFIRMED' },
          _sum: { totalAmount: true },
        }),
      ]);

    return {
      totalReservations,
      confirmedReservations,
      cancelledReservations,
      totalRevenue: Number(totalRevenue._sum.totalAmount ?? 0),
    };
  }

  async getReservationsByUser(userId: string) {
    return (this.db as any).reservation.findMany({
      where: { userId },
      include: {
        passengers: true,
        promotion: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
