import { Router } from 'express';
import { CitasController } from './controller';

export class CitaRoutes {
  static get routes(): Router {
    const router = Router();
    const CitaController = new CitasController();
    router.get('/', CitaController.getCitas);
    router.get('/:id', CitaController.getCitas );
    router.post('/', CitaController.createCita );
    router.put('/:id', CitaController.updateCitas );
    router.delete('/:id', CitaController.deleteCitas );
    return router;
  }
}