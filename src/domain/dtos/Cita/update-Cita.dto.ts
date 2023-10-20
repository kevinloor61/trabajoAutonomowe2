export class UpdateCitaDto {

    private constructor(
        public readonly id: number,
        public readonly fechaCreacion:Date,
        public readonly pacienteID:number,
        public readonly Paciente:string,
        public readonly doctorId: string,
        public readonly consultorioId: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.name = this.id;
      if ( this.fechaCreacion ) returnObj.genre = this.fechaCreacion;
      if ( this.pacienteID ) returnObj.genre = this.pacienteID;
      if ( this.Paciente ) returnObj.genre = this.Paciente;
      if ( this.doctorId ) returnObj.genre = this.doctorId;
      if ( this.consultorioId ) returnObj.genre = this.consultorioId;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateCitaDto?]  {
  
      const { id, fechaCreacion, pacienteID, Paciente, doctorId, consultorioId } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !fechaCreacion && !pacienteID && !Paciente && !doctorId && !consultorioId ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateCitaDto(id, fechaCreacion, pacienteID, Paciente, doctorId, consultorioId)];
    }
  
  
  }