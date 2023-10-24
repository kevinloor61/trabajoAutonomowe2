import { Router } from 'express';
import { PacienteController } from './controller';

export class PacienteRoutes {
  static get routes(): Router {
    const router = Router();
    const pacienteController = new PacienteController();
    router.get('/', pacienteController.getPacientes);
    router.get('/:id', pacienteController.getPacientes );
    
    router.post('/', pacienteController.getPacientes );
    router.put('/:id', pacienteController.updatePacientes );
    router.delete('/:id', pacienteController.getPacientes );
    return router;
  }
}