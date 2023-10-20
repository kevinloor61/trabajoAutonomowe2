export class CreateConsultorioDto {
    private constructor(
      public readonly numeroPiso: string,
      public readonly numeroPuerta: string,
      public readonly Cita: string,
     
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateConsultorioDto?]  {
  
      const { numeroPiso, numeroPuerta, Cita } = props;
  
      if ( !numeroPiso ) return ['la propiedad numero de piso es requerida', undefined];
      if ( !numeroPuerta ) return ['la propiedad numero de puerta es requerida', undefined];
      if ( !Cita ) return ['la propiedad cita es requerida', undefined];
  
  
      return [undefined, new CreateConsultorioDto(numeroPiso, numeroPuerta, Cita)];
    }
  }