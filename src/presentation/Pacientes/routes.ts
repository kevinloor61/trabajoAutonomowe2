import { Router } from 'express';
import { PacienteController } from './controller';

export class DoctorRoutes {
  static get routes(): Router {
    const router = Router();
    const doctorController = new PacienteController();
    router.get('/', doctorController.getDoctor);
    router.get('/:id', doctorController.getDoctorById );
    
    router.post('/', doctorController.createDoctor );
    router.put('/:id', doctorController.updateDoctor );
    router.delete('/:id', doctorController.deleteDoctor );
    return router;
  }
}