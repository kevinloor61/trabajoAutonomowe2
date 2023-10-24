export class UpdateConsultorioDto {

    private constructor(
      public readonly id: number,
      public readonly numeroPiso: string,
      public readonly numeroPuerta: string,
     
    
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.name = this.id;
      if ( this.numeroPiso ) returnObj.genre = this.numeroPiso;
      if ( this.numeroPuerta ) returnObj.genre = this.numeroPuerta;
      
      
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateConsultorioDto?]  {
  
      const { id, numeroPiso, numeroPuerta } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !numeroPiso && !numeroPuerta ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateConsultorioDto(id, numeroPiso, numeroPuerta )];
    }
  
  
  }