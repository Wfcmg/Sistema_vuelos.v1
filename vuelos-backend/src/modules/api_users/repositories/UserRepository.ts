import { IUserRepository } from '../interfaces/IUserRepository.js';
import { User } from '../entities/User.js';
import { PagedResult } from '../../../shared/interfaces/IBaseRepository.js';

export class UserRepository implements IUserRepository {
  constructor(private readonly db: any) {}

  async findAll(page = 1, limit = 100): Promise<PagedResult<User>> {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.db.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.db.user.count(),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    } as any;
  }

  async findById(id: string): Promise<User | null> {
    return this.db.user.findUnique({
      where: { id },
    }) as any;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({
      where: { email },
    }) as any;
  }

  async findAllWithRelations(): Promise<any[]> {
    return this.db.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: any): Promise<User> {
    return this.db.user.create({ data }) as any;
  }

  async update(id: string, data: any): Promise<User> {
    const { birthDate, ...rest } = data;

    return this.db.user.update({
      where: { id },
      data: {
        ...rest,
        ...(birthDate !== undefined && {
          birthDate: birthDate ? new Date(birthDate) : null,
        }),
      },
    }) as any;
  }

  async delete(id: string): Promise<void> {
    await this.db.user.delete({ where: { id } });
  }

  async findFirstCity(): Promise<{ id: string } | null> {
    // En la arquitectura separada, las ciudades viven en db-flights-catalog,
    // no en db-auth-identity. Por eso Auth no debe consultar this.db.city.
    return null;
  }
}
