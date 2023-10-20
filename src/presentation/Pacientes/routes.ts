import { Router } from 'express';
import { PacienteController } from './controller';

export class PacienteRoutes {
  static get routes(): Router {
    const router = Router();
    const pacienteController = new PacienteController();
    router.get('/', PacienteController.getPaciente);
    router.get('/:id', PacienteController.getPaciente );
    
    router.post('/', PacienteController.getPaciente );
    router.put('/:id', PacienteController.updatePaciente );
    router.delete('/:id', PacienteController.getPaciente );
    return router;
  }
}