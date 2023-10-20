import { Router } from 'express';
import { ActividadesDiariasController } from './controller';
//
export class ActividadesDiariasRoutes {
  static get routes(): Router {
    const router = Router();
    const actividadesDiariasController = new ActividadesDiariasController();
    router.get('/', actividadesDiariasController.getActividadesDiarias);
    router.get('/:id', actividadesDiariasController.getActividadesDiariasById );
    
    router.post('/', actividadesDiariasController.createAlergia );
    router.put('/:id', actividadesDiariasController.updateActividadesDiarias );
    router.delete('/:id', actividadesDiariasController.deleteActividadesDiarias );
    return router;
  }
}