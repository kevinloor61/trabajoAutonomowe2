import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateConsultorioDto, UpdateConsultorioDto } from '../../domain/dtos';


export class ConsultorioController {
  //* DI
  constructor() { }
  public getConsultorio = async( req: Request, res: Response ) => {
    const consultorio = await prisma.consultorio.findMany();
    return res.json( consultorio );
  };




  public getConsultorioById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const consultorio = await prisma.consultorio.findFirst({
      where: { id }
    });
    
    ( consultorio )
      ? res.json( consultorio )
      : res.status( 404 ).json( { error: `Consultorio with id ${ id } not found` } );
  };




  public createConsultorio = async( req: Request, res: Response ) => {
    
    const [error, createConsultorioDto] = CreateConsultorioDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const consultorio = await prisma.consultorio.create({
      data: createConsultorioDto!
    });

    res.json( consultorio );

  };



  public updateConsultorio = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateConsultorioDto] = UpdateConsultorioDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const consultorio = await prisma.consultorio.findFirst({
      where: { id }
    });
    if ( !consultorio ) return res.status( 404 ).json( { error: `Consultorio with id ${ id } not found` } );
    const updateconsultorio = await prisma.consultorio.update({
      where: { id },
      data: updateConsultorioDto!.values
    });
    res.json( updateconsultorio );
  }


  public deleteConsultorio = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const consultorio = await prisma.consultorio.findFirst({
      where: { id }
    });

    if ( !consultorio ) return res.status(404).json({ error: `Consultorio with id ${ id } not found` });
    const deleted = await prisma.consultorio.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Consultorio with id ${ id } not found` });
  }
}