export class UpdatePacienteDto {

  private constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly apellido: string,
    public readonly cedula: string,
    public readonly genero: string,
    public readonly estado: string,
    public readonly alergiaId?: number,

  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id ) returnObj.id = this.id;
    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.apellido ) returnObj.apellido = this.apellido;
    if ( this.cedula ) returnObj.cedula = this.cedula;
    if ( this.genero ) returnObj.genero = this.genero;
    if ( this.estado ) returnObj.estado = this.estado;
   

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdatePacienteDto?]  {

    const { id, nombre, apellido, cedula, correo, genero, estado, alergiaId} = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !nombre && !apellido && !cedula && !correo && !genero && !estado && !alergiaId) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdatePacienteDto(id, nombre, apellido, cedula, genero, estado, alergiaId )];
  }


}