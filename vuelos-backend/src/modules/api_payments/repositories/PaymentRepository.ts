import type { PrismaClient } from '@prisma/client';
import { IPaymentRepository } from '../interfaces/IPaymentRepository.js';
import { Payment } from '../entities/Payment.js';
import { PagedResult } from '../../../shared/interfaces/IBaseRepository.js';

const include = {
  invoice: true,
};

export class PaymentRepository implements IPaymentRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(page = 1, limit = 100): Promise<PagedResult<Payment>> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      (this.db as any).payment.findMany({ skip, take: limit, include, orderBy: { createdAt: 'desc' } }),
      (this.db as any).payment.count(),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) } as any;
  }

  async findById(id: string): Promise<Payment | null> {
    return (this.db as any).payment.findUnique({ where: { id }, include }) as any;
  }

  async findByReservation(reservationId: string): Promise<any[]> {
    return (this.db as any).payment.findMany({ where: { reservationId }, include, orderBy: { createdAt: 'desc' } });
  }

  async findByTransaction(transactionId: string): Promise<Payment | null> {
    return (this.db as any).payment.findFirst({ where: { transactionId }, include }) as any;
  }

  async findAllWithRelations(): Promise<any[]> {
    return (this.db as any).payment.findMany({ include, orderBy: { createdAt: 'desc' } });
  }

  async create(data: any): Promise<Payment> {
    return (this.db as any).payment.create({ data, include }) as any;
  }

  async update(id: string, data: any): Promise<Payment> {
    return (this.db as any).payment.update({ where: { id }, data, include }) as any;
  }

  async delete(id: string): Promise<void> {
    await (this.db as any).payment.delete({ where: { id } });
  }
}
