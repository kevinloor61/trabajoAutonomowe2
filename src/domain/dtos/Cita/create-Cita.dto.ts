export class CreateCitaDto {
    private constructor(

      public readonly fechaCreacion:Date,
      public readonly pacienteID:number,
      public readonly Paciente:string,
      public readonly doctorId: string,
      public readonly consultorioId: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateCitaDto?]  {
  
      const { fechaCreacion, pacienteID, Paciente, doctorId, consultorioId} = props;
  
      if ( !fechaCreacion ) return ['la propiedad fecha es requerida', undefined];
      if ( !doctorId ) return ['la propiedad doctorId es requerida', undefined];
      if ( !consultorioId ) return ['la propiedad consultorioId es requerida', undefined];

      return [undefined, new CreateCitaDto( fechaCreacion, pacienteID, Paciente, doctorId, consultorioId)];
    }
  }