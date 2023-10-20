import { Router } from 'express';
import { ConsultorioController } from './controller';

export class ConsultorioRoutes {
  static get routes(): Router {
    const router = Router();
    const consultoriosController = new ConsultorioController();
    router.get('/', consultoriosController.getConsultorio);
    router.get('/:id', consultoriosController.getConsultorioById );
    
    router.post('/', consultoriosController.createConsultorio );
    router.put('/:id', consultoriosController.updateConsultorio );
    router.delete('/:id', consultoriosController.deleteConsultorio );
    return router;
  }
}