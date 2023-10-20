export class UpdateDoctorDto {

    private constructor(
      public readonly id: number,
      public readonly nombre: string,
      public readonly apellido: string,
      public readonly especialidad: string,
      public readonly correo: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.name = this.id;
      if ( this.nombre ) returnObj.genre = this.nombre;
      if ( this.apellido ) returnObj.genre = this.apellido;
      if ( this.especialidad ) returnObj.genre = this.especialidad;
      if ( this.correo ) returnObj.genre = this.correo;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateDoctorDto?]  {
  
      const { id, nombre, apellido, especialidad, correo } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !nombre && !apellido && !especialidad && !correo) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateDoctorDto(id, nombre, apellido, especialidad, correo)];
    }
  
  
  }