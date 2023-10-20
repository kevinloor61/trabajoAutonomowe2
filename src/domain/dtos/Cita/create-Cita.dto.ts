export class CreateCitaDto {
    private constructor(
      public readonly id: number,
      public readonly fechaCreacion:string,
      public readonly doctorId: string,
      public readonly consultorioId: string
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateCitaDto?]  {
  
      const { id, fechaCreacion,doctorId, consultorioId} = props;
  
      if ( !id ) return ['la propiedad id es requerida', undefined];
      if ( !fechaCreacion ) return ['la propiedad fehca es requerida', undefined];
      if ( !doctorId ) return ['la propiedad doctorId es requerida', undefined];
      if ( !consultorioId ) return ['la propiedad consultorioId es requerida', undefined];

      return [undefined, new CreateCitaDto(id, fechaCreacion, doctorId, consultorioId)];
    }
  }