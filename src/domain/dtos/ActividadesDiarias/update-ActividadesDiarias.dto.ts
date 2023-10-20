export class UpdateActividadesDiariasDto {
//
    private constructor(
        public readonly id: number,
        public readonly nombreActividad: string,
        public readonly fechaActividad: Date,
        public readonly doctorId: string,
        public readonly detalleActividad?: string,

    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
      if ( this.nombreActividad ) returnObj.genre = this.nombreActividad;
      if ( this.fechaActividad ) returnObj.genre = this.fechaActividad;
      if ( this.doctorId ) returnObj.genre = this.doctorId;
      if ( this.detalleActividad ) returnObj.genre = this.detalleActividad;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateActividadesDiariasDto?]  {
  
      const {id, nombreActividad, fechaActividad, doctorId, detalleActividad} = props;
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
   
      if ( !nombreActividad && !fechaActividad && !doctorId && !detalleActividad) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateActividadesDiariasDto(id, nombreActividad, fechaActividad, doctorId, detalleActividad)];
    }
  
  
  }