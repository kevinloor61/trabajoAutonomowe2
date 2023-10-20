import { Router } from 'express';
import { ConsultorioController } from './controller';

export class ConsultorioRoutes {
  static get routes(): Router {
    const router = Router();
    const ConsultoriosController = new ConsultorioController();
    router.get('/', ConsultoriosController.getConsultorio);
    router.get('/:id', ConsultoriosController.getConsultorioById );
    
    router.post('/', ConsultorioController.createConsultorio );
    router.put('/:id', ConsultoriosController.updateConsultorio );
    router.delete('/:id', ConsultoriosController.deleteConsultorio );
    return router;
  }
}