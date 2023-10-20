import { Router } from 'express';

import { DoctorRoutes,  } from './Doctor/routes';
import { AlergiasRoutes,  } from './Alergias/routes';
import { CitaRoutes,  } from './Cita/routes';
import { PacienteRoutes,  } from './Pacientes/routes';
import { ActividadesDiariasRoutes,  } from './ActividadesDiarias/routes';



export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/Doctor', DoctorRoutes.routes );
    router.use('/api/Alergias', AlergiasRoutes.routes );
    router.use('/api/Cita', CitaRoutes.routes );
    router.use('/api/Paciente', PacienteRoutes.routes);
    router.use('/api/ActividadesDiarias', ActividadesDiariasRoutes.routes );
    return router;
  }


}