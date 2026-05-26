// presentation/controllers/ReservationController.ts
import { Request, Response, NextFunction } from 'express';
import { IReservationService } from '../interfaces/IReservationService.js';

export class ReservationController {
  constructor(private readonly reservationService: IReservationService) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const headerUserId = Array.isArray(req.headers['x-user-id'])
        ? req.headers['x-user-id'][0]
        : req.headers['x-user-id'];

      const publicUserId =
        (req as any).user?.id ??
        (req.body as any)?.userId ??
        headerUserId ??
        null;

      const data = await this.reservationService.create(publicUserId, req.body);
      res.status(201).json({ success: true, data });
    } catch (err: any) {
      if (err.message === 'NO_AVAILABILITY') {
        res.status(422).json({ success: false, error: { code: 'NO_AVAILABILITY', message: 'Sin disponibilidad al confirmar' } });
        return;
      }
      next(err);
    }
  };

  myReservations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.reservationService.getMyReservations(req.user!.id);
      res.json({ success: true, data });
    } catch (err) { next(err); }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.reservationService.getById(
        String(req.params.id), req.user!.id, req.user!.role === 'ADMIN',
      );
      res.json({ success: true, data });
    } catch (err) { next(err); }
  };

  cancel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.reservationService.cancel(
        String(req.params.id), req.user!.id, req.user!.role === 'ADMIN',
      );
      res.json({ success: true, data });
    } catch (err) { next(err); }
  };

  listAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.reservationService.listAll();
      res.json({ success: true, data });
    } catch (err) { next(err); }
  };
}
