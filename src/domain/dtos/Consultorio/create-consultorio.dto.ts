export class CreateConsultorioDto {
    private constructor(
      public readonly numeroPiso: string,
      public readonly numeroPuerta: string,
     
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateConsultorioDto?]  {
  
      const { numeroPiso, numeroPuerta } = props;
  
      if ( !numeroPiso ) return ['la propiedad numero de piso es requerida', undefined];
      if ( !numeroPuerta ) return ['la propiedad numero de puerta es requerida', undefined];
  
  
  
      return [undefined, new CreateConsultorioDto(numeroPiso, numeroPuerta )];
    }
  }