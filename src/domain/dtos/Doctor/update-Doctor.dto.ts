
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
  
      if ( this.id ) returnObj.id = this.id;
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.apellido ) returnObj.apellido = this.apellido;
      if ( this.especialidad ) returnObj.especialidad = this.especialidad;
      if ( this.correo ) returnObj.correo = this.correo;
      
      
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
      return [undefined, new UpdateDoctorDto(id, nombre, apellido, especialidad, correo )];
    }
  
  
  }