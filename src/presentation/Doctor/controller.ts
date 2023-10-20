import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateDoctorDto, UpdateDoctorDto } from '../../domain/dtos';


export class DoctorController {
  //* DI
  constructor() { }
  public getDoctor = async( req: Request, res: Response ) => {
    const doctor = await prisma.doctor.findMany();
    return res.json( doctor );
  };




  public getDoctorById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/Doctor/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const doctor = await prisma.doctor.findFirst({
      where: { id }
    });
    
    ( doctor )
      ? res.json( doctor )
      : res.status( 404 ).json( { error: `Doctor with id ${ id } not found` } );
  };




  public createDoctor = async( req: Request, res: Response ) => {
    
    const [error, createDoctorDto] = CreateDoctorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const doctor = await prisma.doctor.create({
      data: createDoctorDto!
    });

    res.json( doctor );

  };



  public updateDoctor = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateDoctorDto] = UpdateDoctorDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const doctor = await prisma.doctor.findFirst({
      where: { id }
    });
    if ( !doctor ) return res.status( 404 ).json( { error: `Doctor with id ${ id } not found` } );
    const updatedoctor = await prisma.doctor.update({
      where: { id },
      data: updateDoctorDto!.values
    });
    res.json( updatedoctor );
  }


  public deleteDoctor = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const doctor = await prisma.doctor.findFirst({
      where: { id }
    });

    if ( !doctor ) return res.status(404).json({ error: `Doctor with id ${ id } not found` });
    const deleted = await prisma.doctor.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Doctor with id ${ id } not found` });
  }
}