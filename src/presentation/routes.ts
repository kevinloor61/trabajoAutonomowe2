import { Router } from 'express';

import { DoctorRoutes,  } from './Doctor/routes';
import { AlergiasRoutes,  } from './Alergias/routes';
import { CitaRoutes,  } from './Cita/routes';
import { PacienteRoutes,  } from './Pacientes/routes';
import { ActividadesDiariasRoutes,  } from './ActividadesDiarias/routes';
import { ConsultorioRoutes, } from './Consultorio/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    //localhost:3000/api/Doctor
    router.use('/api/Doctor', DoctorRoutes.routes );
    router.use('/api/Alergias', AlergiasRoutes.routes );
    router.use('/api/Cita', CitaRoutes.routes );
    router.use('/api/Pacientes', PacienteRoutes.routes);
    router.use('/api/ActividadesDiarias', ActividadesDiariasRoutes.routes );
    router.use('/api/Consultorio', ConsultorioRoutes.routes );
    return router;
  }


}