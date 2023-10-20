export class CreateCitaDto {
    private constructor(

      public readonly fechaCreacion:Date,
      public readonly fechaProgramada:Date,
      public readonly pacienteId:number,
      public readonly doctorId: number,
      public readonly consultorioId: number,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateCitaDto?]  {
  
      const { fechaCreacion, fechaProgramada, pacienteId, doctorId, consultorioId } = props;
  
      if ( !fechaCreacion ) return ['la propiedad fechaCreacion es requerida', undefined];
      if ( !fechaProgramada) return ['la propiedad fechaProgramada es requerida', undefined];
      if ( !pacienteId) return ['la propiedad pacienteId es requerida', undefined];
      if ( !doctorId ) return ['la propiedad doctorId es requerida', undefined];
      if ( !consultorioId ) return ['la propiedad consultorioId es requerida', undefined];

      return [undefined, new CreateCitaDto( fechaCreacion, fechaProgramada, pacienteId, doctorId, consultorioId )];
    }
  }