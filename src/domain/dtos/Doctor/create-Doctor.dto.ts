

export class CreateDoctorDto {
    private constructor(
      public readonly nombre: string,
      public readonly apellido: string,
      public readonly especialidad: string,
      public readonly correo: string,
  
     
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateDoctorDto?]  {
  
      const { nombre, apellido, especialidad, correo  } = props;
  
      if ( !nombre ) return ['la propiedad nombre es requerida', undefined];
      if ( !apellido ) return ['la propiedad apellido es requerida', undefined];
      if ( !especialidad ) return ['la propiedad especialidad es requerida', undefined];
      if ( !correo ) return ['la propiedad correo es requerida', undefined];
  
  
      return [undefined, new CreateDoctorDto(nombre, apellido, especialidad, correo )];
    }
  }