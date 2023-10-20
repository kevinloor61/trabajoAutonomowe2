import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePacienteDto, UpdatePacienteDto } from '../../domain/dtos';


export class PacienteController {
  //* DI
  constructor() { }
  public getPaciente = async( req: Request, res: Response ) => {
    const paciente = await prisma.paciente.findMany();
    return res.json( paciente );
  };




  public getPacienteById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/Doctor/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const paciente = await prisma.paciente.findFirst({
      where: { id }
    });
    
    ( paciente )
      ? res.json( paciente )
      : res.status( 404 ).json( { error: `pacientes with id ${ id } not found` } );
  };




  public createPaciente = async( req: Request, res: Response ) => {
    
    const [error, createPacienteDto] = CreatePacienteDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const paciente = await prisma.doctor.create({
      data: createPacienteDto!
    });

    res.json( paciente );

  };



  public updatePaciente = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updatePacienteDto] = UpdatePacienteDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const paciente = await prisma.doctor.findFirst({
      where: { id }
    });
    if ( !paciente ) return res.status( 404 ).json( { error: `Paciente with id ${ id } not found` } );
    const updatePaciente = await prisma.doctor.update({
      where: { id },
      data: updatePacienteDto!.values
    });
    res.json( updatePaciente );
  }


  public deletePaciente = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const Paciente = await prisma.paciente.findFirst({
      where: { id }
    });

    if ( !Paciente ) return res.status(404).json({ error: `Paciente with id ${ id } not found` });
    const deleted = await prisma.doctor.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Paciente with id ${ id } not found` });
  }
}