import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAlergiaDto, UpdateAlergiaDto } from '../../domain/dtos';


export class AlergiasController {
  //* DI
  constructor() { }
  public getAlergias = async( req: Request, res: Response ) => {
    const alergias = await prisma.alergias.findMany();
    return res.json( alergias );
  };




  public getAlergiasById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/Alergias/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const alergias = await prisma.alergias.findFirst({
      where: { id }
    });
    
    ( alergias )
      ? res.json( alergias )
      : res.status( 404 ).json( { error: `Alergias with id ${ id } not found` } );
  };




  public createAlergia = async( req: Request, res: Response ) => {
    
    const [error, createAlergiaDto] = CreateAlergiaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const alergias = await prisma.alergias.create({
      data: createAlergiaDto!
    });

    res.json( alergias );

  };



  public updateAlergias = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAlergiasDto] = UpdateAlergiaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const alergias = await prisma.alergias.findFirst({
      where: { id }
    });
    if ( !alergias ) return res.status( 404 ).json( { error: `Alergias with id ${ id } not found` } );
    const updatealergia = await prisma.alergias.update({
      where: { id },
      data: updateAlergiasDto!.values
    });
    res.json( updatealergia );
  }


  public deleteAlergias = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const alergias = await prisma.alergias.findFirst({
      where: { id }
    });

    if ( !alergias ) return res.status(404).json({ error: `Alergias with id ${ id } not found` });
    const deleted = await prisma.alergias.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Alergias with id ${ id } not found` });
  }
}