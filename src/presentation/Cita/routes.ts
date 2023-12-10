import { Router } from 'express';
import { CitaController } from './controller';

export class CitaRoutes {
  static get routes(): Router {
    const router = Router();
    const citaController = new CitaController();
    router.get('/',citaController.getCita);
    router.get('/:id', citaController.getCitaById );

    router.post('/', citaController.createCita );
    router.put('/:id', citaController.updateCita );
    router.delete('/:id', citaController.deleteCita );
    return router;
  }
}