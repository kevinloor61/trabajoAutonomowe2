import { Router } from 'express';

import { DoctorRoutes,  } from './Doctor/routes';



export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/Doctor', DoctorRoutes.routes );
  
    
    return router;
  }


}