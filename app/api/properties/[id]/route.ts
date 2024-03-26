import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { propertySchema } from '../../validationSchemas/propertySchema';

// DESCRIPTION:   GET A PROPERTY BY ID
// ROUTE:         GET /api/properties/:id
// ACCESS:        PRIVATE
 
export async function GET(request: NextRequest, { params }:{ params: { id: string }}) {
  const property = await prisma.property.findUnique({ where: {id: parseInt(params.id)}})
  return NextResponse.json({ success: true, property });
}


// DESCRIPTION:   UPDATE A NEW PROPERTY
// ROUTE:         PATCH /api/properties
// ACCESS:        PRIVATE


export async function PATCH(request: NextRequest, { params }:{ params: {id: string}}) {
  const body = await request.json();
/*   const validation = propertySchema.safeParse(body);
  if (!validation.success)
  return NextResponse.json(validation.error.format(), { status: 400 }) */

  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!property)
  return NextResponse.json({error: 'Invalid property'}, { status: 404 })

  const updatedProperty = await prisma.property.update({
    where: { id: property.id},
    data: {
        city: body.city,
        district: body.district,
        street: body.street,
        number: body.number,
        stairwell: body.stairwell,
        floor: body.floor,
        apartment: body.apartment,
        status: body.status,
        rent: body.rent
      }
  })
  return NextResponse.json({success: true, updatedProperty});
}

