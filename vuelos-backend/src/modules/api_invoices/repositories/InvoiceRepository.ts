import type { PrismaClient } from '@prisma/client';
import { IInvoiceRepository } from '../interfaces/IInvoiceRepository.js';
import { Invoice } from '../entities/Invoice.js';
import { PagedResult } from '../../../shared/interfaces/IBaseRepository.js';

const include = {
  payment: true,
  billingProfile: true,
  items: true,
};

export class InvoiceRepository implements IInvoiceRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(page = 1, limit = 100): Promise<PagedResult<Invoice>> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      (this.db as any).invoice.findMany({ skip, take: limit, include, orderBy: { createdAt: 'desc' } }),
      (this.db as any).invoice.count(),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) } as any;
  }

  async findById(id: string): Promise<Invoice | null> {
    return (this.db as any).invoice.findUnique({ where: { id }, include }) as any;
  }

  async findByPayment(paymentId: string): Promise<Invoice | null> {
    return (this.db as any).invoice.findFirst({ where: { paymentId }, include }) as any;
  }

  async findByBillingProfile(billingProfileId: string): Promise<any[]> {
    return (this.db as any).invoice.findMany({ where: { billingProfileId }, include, orderBy: { createdAt: 'desc' } });
  }

  async findByNumber(invoiceNumber: string): Promise<Invoice | null> {
    return (this.db as any).invoice.findFirst({ where: { invoiceNumber }, include }) as any;
  }

  async findAllWithRelations(): Promise<any[]> {
    return (this.db as any).invoice.findMany({ include, orderBy: { createdAt: 'desc' } });
  }

  async create(data: any): Promise<Invoice> {
    return (this.db as any).invoice.create({ data, include }) as any;
  }

  async update(id: string, data: any): Promise<Invoice> {
    return (this.db as any).invoice.update({ where: { id }, data, include }) as any;
  }

  async delete(id: string): Promise<void> {
    await (this.db as any).invoice.delete({ where: { id } });
  }
}
