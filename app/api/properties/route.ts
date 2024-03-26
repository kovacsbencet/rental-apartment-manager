import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
/* import { propertySchema } from '../validationSchemas/propertySchema';
 */
// DESCRIPTION:   GET ALL PROPERTIES
// ROUTE:         GET /api/properties
// ACCESS:        PRIVATE
 
export async function GET() {
  const properties = await prisma.property.findMany();
  return NextResponse.json({success: true, data: properties});
}

// DESCRIPTION:   CREATE A NEW PROPERTY
// ROUTE:         POST /api/properties
// ACCESS:        PRIVATE

export async function POST(request: NextRequest) {
  const body = await request.json();
/*   const validation = propertySchema.safeParse(body)
  if(!validation.success){
    return NextResponse.json(validation.error.errors, { status: 400 })
  } */
  const newProperty = await prisma.property.create({
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
  });
  return NextResponse.json(newProperty,{ status: 201 })
}
