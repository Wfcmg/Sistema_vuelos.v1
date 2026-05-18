import type { PrismaClient } from '@prisma/client';

export class InvoiceQueryRepository {
  constructor(private readonly db: PrismaClient) {}

  async getStats() {
    const [total, totalRevenue] = await Promise.all([
      (this.db as any).invoice.count(),
      (this.db as any).invoice.aggregate({ _sum: { total: true } }),
    ]);
    return { total, totalRevenue: Number(totalRevenue._sum.total ?? 0) };
  }

  async findByBillingProfile(billingProfileId: string) {
    return (this.db as any).invoice.findMany({
      where: { billingProfileId },
      include: { payment: true, billingProfile: true, items: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAll() {
    return (this.db as any).invoice.findMany({
      include: { payment: true, billingProfile: true, items: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
