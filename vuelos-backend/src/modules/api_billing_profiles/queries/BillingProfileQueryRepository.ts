import type { PrismaClient } from '@prisma/client';

export class BillingProfileQueryRepository {
  constructor(private readonly db: PrismaClient) {}

  async getStats() {
    const [total, defaults] = await Promise.all([
      (this.db as any).billingProfile.count(),
      (this.db as any).billingProfile.count({ where: { isDefault: true } }),
    ]);
    return { total, defaults };
  }

  async findByUser(userId: string) {
    return (this.db as any).billingProfile.findMany({ where: { userId } });
  }

  async findAll() {
    return (this.db as any).billingProfile.findMany({
      orderBy: { businessName: 'asc' },
    });
  }
}
