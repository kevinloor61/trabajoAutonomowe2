import { Router } from 'express';

import { DoctorRoutes,  } from './Doctor/routes';
import { AlergiasRoutes,  } from './Alergias/routes';
import { CitaRoutes,  } from './Cita/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/Doctor', DoctorRoutes.routes );
    router.use('/api/Alergias', AlergiasRoutes.routes );
    router.use('/api/Cita', CitaRoutes.routes );
    return router;
  }


}