export class CreateActividadesDiariasDto {
    private constructor(
      public readonly nombreActividad: string,
      public readonly fechaActividad: Date,
      public readonly doctorId: number,
      public readonly detalleActividad?: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateActividadesDiariasDto?]  {
  //
      const { nombreActividad, fechaActividad, doctorId, detalleActividad } = props;
  
      if ( !nombreActividad ) return ['la propiedad nombre es requerida', undefined];
      if ( !detalleActividad ) return ['la propiedad detalle es requerida', undefined];
      if ( !fechaActividad ) return ['la propiedad fecha es requerida', undefined];
      if ( !doctorId ) return ['la propiedad doctor es requerida', undefined];

      return [undefined, new CreateActividadesDiariasDto(nombreActividad, fechaActividad, doctorId, detalleActividad)];
    }
  }