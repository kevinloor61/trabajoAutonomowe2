export class UpdateConsultorioDto {

    private constructor(
      public readonly id: number,
      public readonly numeroPiso: string,
      public readonly numeroPuerta: string,
      public readonly Cita: string,
    
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.name = this.id;
      if ( this.numeroPiso ) returnObj.genre = this.numeroPiso;
      if ( this.numeroPuerta ) returnObj.genre = this.numeroPuerta;
      if ( this.Cita ) returnObj.genre = this.Cita;
      
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateConsultorioDto?]  {
  
      const { id, numeroPiso, numeroPuerta, Cita } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !numeroPiso && !numeroPuerta && !Cita ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateConsultorioDto(id, numeroPiso, numeroPuerta, Cita)];
    }
  
  
  }