import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAlergiaDto, UpdateAlergiaDto } from '../../domain/dtos';


export class AlergiasController {
  //* DI
  constructor() { }
  public getAlergias = async( req: Request, res: Response ) => {
    const Alergias = await prisma.Alergias.findMany();
    return res.json( Alergias );
  };




  public getAlergiasById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const Alergias = await prisma.Alergias.findFirst({
      where: { id }
    });
    
    ( Alergias )
      ? res.json( Alergias )
      : res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
  };




  public createAlergia = async( req: Request, res: Response ) => {
    
    const [error, createAlergiaDto] = CreateAlergiaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const doctor = await prisma.doctor.create({
      data: createAlergiaDto!
    });

    res.json( doctor );

  };



  public updateAlergias = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAlergiasDto] = UpdateAlergiaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const Alergias = await prisma.Alergias.findFirst({
      where: { id }
    });
    if ( !Alergias ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatealergia = await prisma.Alergias.update({
      where: { id },
      data: updateAlergiasDto!.values
    });
    res.json( updatealergia );
  }


  public deleteAlergias = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const Alergias = await prisma.Alergias.findFirst({
      where: { id }
    });

    if ( !Alergias ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.doctor.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Movie with id ${ id } not found` });
  }
}