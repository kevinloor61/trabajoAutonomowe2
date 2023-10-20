import { Router } from 'express';
import { DoctorController } from './controller';

export class DoctorRoutes {
  static get routes(): Router {
    const router = Router();
    const doctorController = new DoctorController();
    router.get('/', doctorController.getDoctor);
    router.get('/:id', doctorController.getDoctorById );
    
    router.post('/', doctorController.createDoctor );
    router.put('/:id', doctorController.updateDoctor );
    router.delete('/:id', doctorController.deleteDoctor );
    return router;
  }
}