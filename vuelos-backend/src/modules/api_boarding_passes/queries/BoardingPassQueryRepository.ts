import type { PrismaClient } from '@prisma/client';

export class BoardingPassQueryRepository {
  constructor(private readonly db: PrismaClient) {}

  async getStats() {
    const [total, byStatus] = await Promise.all([
      (this.db as any).boardingPass.count(),
      (this.db as any).boardingPass.groupBy({ by: ['status'], _count: { id: true } }),
    ]);
    return { total, byStatus };
  }

  async findByPassenger(passengerId: string) {
    return (this.db as any).boardingPass.findMany({
      where: { passengerId },
      include: { passenger: true },
    });
  }

  async findAll() {
    return (this.db as any).boardingPass.findMany({
      include: { passenger: true },
      orderBy: { status: 'asc' },
    });
  }
}
