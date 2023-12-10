export class CreatePacienteDto {
  private constructor(
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly cedula: string,
    public readonly genero: string,
    public readonly estado: string,
    public readonly alergiaId?: number,

   
  ){}
  static create( props: {[key:string]: any} ): [string?, CreatePacienteDto?]  {

    const { nombre, apellido, cedula, genero,estado,alergiaId } = props;

    if ( !nombre ) return ['la propiedad nombre es requerida', undefined];
    if ( !apellido ) return ['la propiedad apellido es requerida', undefined];
    if ( !cedula ) return ['la propiedad cedula es requerida', undefined];
    if ( !genero ) return ['la propiedad genero es requerida', undefined];
    if ( !estado ) return ['la propiedad estado es requerida', undefined];
    if ( !alergiaId ) return ['la propiedad alergia es requerida', undefined];


    return [undefined, new CreatePacienteDto(nombre, apellido, cedula, genero, estado, alergiaId)];
  }
}