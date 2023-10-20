import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateActividadesDiariasDto, UpdateActividadesDiariasDto } from '../../domain/dtos';


export class ActividadesDiariasController {
  //* DI
  constructor() { }
  public getActividadesDiarias = async( req: Request, res: Response ) => {
    const actividadesDiarias = await prisma.actividadesDiarias.findMany();
    return res.json( actividadesDiarias );
  };

//


  public getActividadesDiariasById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const actividadesDiarias = await prisma.actividadesDiarias.findFirst({
      where: { id }
    });
    
    ( actividadesDiarias )
      ? res.json( actividadesDiarias )
      : res.status( 404 ).json( { error: `Actividades diarias with id ${ id } not found` } );
  };




  public createAlergia = async( req: Request, res: Response ) => {
    
    const [error, createactividadesdiariasDto] = CreateActividadesDiariasDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const actividadesDiarias = await prisma.actividadesDiarias.create({
      data: createactividadesdiariasDto!
    });

    res.json( actividadesDiarias );

  };



  public updateActividadesDiarias = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateActividadesDiariasDto] = UpdateActividadesDiariasDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const actividadesDiarias = await prisma.actividadesDiarias.findFirst({
      where: { id }
    });
    if ( !actividadesDiarias ) return res.status( 404 ).json( { error: `Actividades diarias with id ${ id } not found` } );
    const updateActividadesDiarias = await prisma.actividadesDiarias.update({
      where: { id },
      data: updateActividadesDiariasDto!.values
    });
    res.json( updateActividadesDiarias );
  }


  public deleteActividadesDiarias = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const actividadesDiarias = await prisma.actividadesDiarias.findFirst({
      where: { id }
    });

    if ( !actividadesDiarias ) return res.status(404).json({ error: `Actividades diarias with id ${ id } not found` });
    const deleted = await prisma.actividadesDiarias.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Actividades diarias with id ${ id } not found` });
  }
}