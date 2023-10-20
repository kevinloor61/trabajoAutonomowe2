import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCitaDto, UpdateCitaDto } from '../../domain/dtos';


export class CitasController {
  //* DI
  constructor() { }
  public getCitas = async( req: Request, res: Response ) => {
    const Citas = await prisma.Citas.findMany();
    return res.json( Citas );
  };




  public getCitasById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const Citas = await prisma.Citas.findFirst({
      where: { id }
    });
    
    ( Citas )
      ? res.json( Citas )
      : res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
  };




  public createCita = async( req: Request, res: Response ) => {
    
    const [error, createCitaDto] = CreateCitaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const doctor = await prisma.doctor.create({
      data: createCitaDto!
    });

    res.json( doctor );

  };



  public updateCitas = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateCitasDto] = UpdateCitaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const Citas = await prisma.Citas.findFirst({
      where: { id }
    });
    if ( !Citas ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatecita = await prisma.Citas.update({
      where: { id },
      data: updateCitasDto!.values
    });
    res.json( updatecita );
  }


  public deleteCitas = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const Citas = await prisma.Citas.findFirst({
      where: { id }
    });

    if ( !Citas ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.doctor.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Movie with id ${ id } not found` });
  }
}