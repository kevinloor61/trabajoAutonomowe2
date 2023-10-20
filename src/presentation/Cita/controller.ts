import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCitaDto, UpdateCitaDto } from '../../domain/dtos';


export class CitaController {
  //* DI
  constructor() { }
  public getCita = async( req: Request, res: Response ) => {
    const cita = await prisma.cita.findMany();
    return res.json( cita );
  };




  public getCitaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/Cita/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const cita = await prisma.cita.findFirst({
      where: { id }
    });
    
    ( cita )
      ? res.json( cita )
      : res.status( 404 ).json( { error: `Cita with id ${ id } not found` } );
  };




  public createCita = async( req: Request, res: Response ) => {
    
    const [error, createCitaDto] = CreateCitaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const cita = await prisma.cita.create({
      data: createCitaDto!
    });

    res.json( cita );

  };



  public updateCita = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateCitaDto] = UpdateCitaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const cita = await prisma.cita.findFirst({
      where: { id }
    });
    if ( !cita ) return res.status( 404 ).json( { error: `Cita with id ${ id } not found` } );
    const updatecita = await prisma.cita.update({
      where: { id },
      data: updateCitaDto!.values
    });
    res.json( updatecita );
  }


  public deleteCita = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const cita = await prisma.cita.findFirst({
      where: { id }
    });

    if ( !cita ) return res.status(404).json({ error: `Cita with id ${ id } not found` });
    const deleted = await prisma.cita.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Cita with id ${ id } not found` });
  }
}