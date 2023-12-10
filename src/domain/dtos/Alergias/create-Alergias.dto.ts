export class CreateAlergiaDto {
    private constructor(
      public readonly nombreAlergia: string,
      public readonly detalleTratamiento?: string, 
     
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateAlergiaDto?]  {
  
      const { nombreAlergia, detalleTratamiento } = props;
  
      if ( !nombreAlergia ) return ['la propiedad nombre es requerida', undefined];
      if ( !detalleTratamiento ) return ['la propiedad detalle es requerida', undefined];

      return [undefined, new CreateAlergiaDto(nombreAlergia, detalleTratamiento )];
    }
  }