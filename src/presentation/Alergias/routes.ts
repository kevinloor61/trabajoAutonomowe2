import { Router } from 'express';
import { AlergiasController } from './controller';

export class AlergiasRoutes {
  static get routes(): Router {
    const router = Router();
    const alergiaController = new AlergiasController();
    router.get('/', alergiaController.getAlergias);
    router.get('/:id', alergiaController.getAlergiasById );
    
    router.post('/', alergiaController.createAlergia );
    router.put('/:id', alergiaController.updateAlergias );
    router.delete('/:id', alergiaController.deleteAlergias );
    return router;
  }
}