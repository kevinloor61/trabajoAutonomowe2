import { Router } from 'express';
import { PacienteController } from './controller';

export class PacienteRoutes {
  static get routes(): Router {
    const router = Router();
    const pacienteController = new PacienteController();
    router.get('/', pacienteController.getPaciente);
    router.get('/:id', pacienteController.getPaciente );
    
    router.post('/', pacienteController.getPaciente );
    router.put('/:id', pacienteController.updatePaciente );
    router.delete('/:id', pacienteController.getPaciente );
    return router;
  }
}