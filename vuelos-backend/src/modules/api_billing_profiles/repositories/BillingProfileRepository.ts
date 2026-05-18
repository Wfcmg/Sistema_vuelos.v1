import type { PrismaClient } from '@prisma/client';
import { IBillingProfileRepository } from '../interfaces/IBillingProfileRepository.js';
import { BillingProfile } from '../entities/BillingProfile.js';
import { PagedResult } from '../../../shared/interfaces/IBaseRepository.js';

export class BillingProfileRepository implements IBillingProfileRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(page = 1, limit = 100): Promise<PagedResult<BillingProfile>> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      (this.db as any).billingProfile.findMany({ skip, take: limit }),
      (this.db as any).billingProfile.count(),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) } as any;
  }

  async findById(id: string): Promise<BillingProfile | null> {
    return (this.db as any).billingProfile.findUnique({ where: { id } }) as any;
  }

  async findByUser(userId: string): Promise<any[]> {
    return (this.db as any).billingProfile.findMany({ where: { userId } });
  }

  async findDefaultByUser(userId: string): Promise<BillingProfile | null> {
    return (this.db as any).billingProfile.findFirst({ where: { userId, isDefault: true } }) as any;
  }

  async findAllWithRelations(): Promise<any[]> {
    return (this.db as any).billingProfile.findMany();
  }

  async create(data: any): Promise<BillingProfile> {
    return (this.db as any).billingProfile.create({ data }) as any;
  }

  async update(id: string, data: any): Promise<BillingProfile> {
    return (this.db as any).billingProfile.update({ where: { id }, data }) as any;
  }

  async delete(id: string): Promise<void> {
    await (this.db as any).billingProfile.delete({ where: { id } });
  }
}
