import type { PrismaClient } from '@prisma/client';
import { IBoardingPassRepository } from '../interfaces/IBoardingPassRepository.js';
import { BoardingPass } from '../entities/BoardingPass.js';
import { PagedResult } from '../../../shared/interfaces/IBaseRepository.js';

const include = {
  passenger: {
    include: {
      reservation: { select: { id: true, userId: true, flightId: true, reservationCode: true } },
    },
  },
};

export class BoardingPassRepository implements IBoardingPassRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(page = 1, limit = 100): Promise<PagedResult<BoardingPass>> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      (this.db as any).boardingPass.findMany({ skip, take: limit, include }),
      (this.db as any).boardingPass.count(),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) } as any;
  }

  async findById(id: string): Promise<BoardingPass | null> {
    return (this.db as any).boardingPass.findUnique({ where: { id }, include }) as any;
  }

  async findByPassenger(passengerId: string): Promise<any[]> {
    return (this.db as any).boardingPass.findMany({ where: { passengerId }, include });
  }

  async findBySegment(segmentId: string): Promise<any[]> {
    return (this.db as any).boardingPass.findMany({ where: { segmentId }, include });
  }

  async findByCode(boardingCode: string): Promise<BoardingPass | null> {
    return (this.db as any).boardingPass.findFirst({ where: { boardingCode }, include }) as any;
  }

  async findAllWithRelations(): Promise<any[]> {
    return (this.db as any).boardingPass.findMany({ include });
  }

  async create(data: any): Promise<BoardingPass> {
    return (this.db as any).boardingPass.create({ data, include }) as any;
  }

  async update(id: string, data: any): Promise<BoardingPass> {
    return (this.db as any).boardingPass.update({ where: { id }, data, include }) as any;
  }

  async delete(id: string): Promise<void> {
    await (this.db as any).boardingPass.delete({ where: { id } });
  }
}
