import type { PrismaClient } from '@prisma/client';

export class PaymentQueryRepository {
  constructor(private readonly db: PrismaClient) {}

  async getStats() {
    const [total, byStatus, totalRevenue] = await Promise.all([
      (this.db as any).payment.count(),
      (this.db as any).payment.groupBy({ by: ['status'], _count: { id: true }, _sum: { amount: true } }),
      (this.db as any).payment.aggregate({ _sum: { amount: true } }),
    ]);
    return {
      total,
      byStatus,
      totalRevenue: Number(totalRevenue._sum.amount ?? 0),
    };
  }

  async findByReservation(reservationId: string) {
    return (this.db as any).payment.findMany({
      where: { reservationId },
      include: { invoice: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAll() {
    return (this.db as any).payment.findMany({
      include: { invoice: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
