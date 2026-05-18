import type { PrismaClient } from '@prisma/client';

export class PassengerServiceQueryRepository {
  constructor(private readonly db: PrismaClient) {}

  async getStats() {
    const [total, totalRevenue] = await Promise.all([
      (this.db as any).passengerService.count(),
      (this.db as any).passengerService.aggregate({ _sum: { unitPriceAtBooking: true } }),
    ]);
    return { total, totalRevenue: Number(totalRevenue._sum.unitPriceAtBooking ?? 0) };
  }

  async findByPassenger(passengerId: string) {
    return (this.db as any).passengerService.findMany({
      where: { passengerId },
      include: { passenger: true },
    });
  }

  async findAll() {
    return (this.db as any).passengerService.findMany({
      include: { passenger: true },
    });
  }
}
