import type { PrismaClient } from '@prisma/client';
import { IReservationRepository } from '../interfaces/IReservationRepository.js';
import { Reservation } from '../entities/Reservation.js';
import { PagedResult } from '../../../shared/interfaces/IBaseRepository.js';
import prismaCatalog from '../../../shared/database/prisma.catalog.client.js';

const include = {
  passengers: true,
  promotion: true,
};

export class ReservationRepository implements IReservationRepository {
  constructor(private readonly db: PrismaClient) {}

  async findAll(page = 1, limit = 100): Promise<PagedResult<Reservation>> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      (this.db as any).reservation.findMany({ skip, take: limit, orderBy: { createdAt: 'desc' } }),
      (this.db as any).reservation.count(),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) } as any;
  }

  async findById(id: string): Promise<Reservation | null> {
    return (this.db as any).reservation.findUnique({ where: { id } }) as any;
  }

  async findByUserId(userId: string): Promise<any[]> {
    return (this.db as any).reservation.findMany({
      where: { userId },
      include,
      orderBy: { createdAt: 'desc' },
    }, { maxWait: 20000, timeout: 60000 });
  }

  async findByIdWithRelations(id: string): Promise<any | null> {
    return (this.db as any).reservation.findUnique({ where: { id }, include });
  }

  async findAllWithRelations(): Promise<any[]> {
    return (this.db as any).reservation.findMany({ include, orderBy: { createdAt: 'desc' } });
  }

  async updateStatus(id: string, status: string): Promise<void> {
    await (this.db as any).reservation.update({ where: { id }, data: { status: status as any } });
  }

  async create(data: any): Promise<Reservation> {
    const seatsReserved = await (prismaCatalog as any).flightClass.updateMany({
      where: {
        id: data.flightClassId,
        availableSeats: { gte: data.passengerCount },
      },
      data: { availableSeats: { decrement: data.passengerCount } },
    });

    if (seatsReserved.count !== 1) {
      throw new Error('NO_AVAILABILITY');
    }

    try {
      return await (this.db as any).$transaction(async (tx: any) => {
        const reservation = await tx.reservation.create({
          data: {
            reservationCode: data.reservationCode,
            userId: data.userId,
            flightId: data.flightId,
            promotionId: data.promotionId,
            totalAmount: data.totalAmount,
            status: data.status,
            passengers: {
              create: data.passengers.map((p: any) => ({
                flightClassId: data.flightClassId,
                firstName: p.firstName,
                lastName: p.lastName,
                documentNumber: p.documentNumber,
                seatNumber: p.seatNumber ?? null,
              })),
            },
          },
          include,
        });

        if (data.promotionId_forUsageIncrement) {
          await tx.promotion.update({
            where: { id: data.promotionId_forUsageIncrement },
            data: { currentUsages: { increment: 1 } },
          });
        }

        return reservation;
      }, { maxWait: 20000, timeout: 60000 }) as any;
    } catch (err) {
      await (prismaCatalog as any).flightClass.update({
        where: { id: data.flightClassId },
        data: { availableSeats: { increment: data.passengerCount } },
      }).catch(() => {});
      throw err;
    }
  }
  async cancelAndRestoreSeats(id: string, flightClassId: string, passengerCount: number): Promise<void> {
    await (this.db as any).$transaction(async (tx: any) => { // FIX P53
      await tx.reservation.update({ where: { id }, data: { status: 'CANCELLED' } });
      await tx.reservationPassenger.updateMany({
        where: { reservationId: id },
        data: { seatNumber: null },
      }, { maxWait: 20000, timeout: 60000 });
    }, { maxWait: 20000, timeout: 60000 });

    if (flightClassId && passengerCount > 0) {
      await (prismaCatalog as any).flightClass.update({
        where: { id: flightClassId },
        data: { availableSeats: { increment: passengerCount } },
      }, { maxWait: 20000, timeout: 60000 });
    }
  }

  async update(id: string, data: any): Promise<Reservation> {
    return (this.db as any).reservation.update({ where: { id }, data, include }) as any;
  }

  async delete(id: string): Promise<void> {
    await (this.db as any).reservation.delete({ where: { id } });
  }
}




