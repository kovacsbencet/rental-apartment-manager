import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   GET A PROPERTY BY ID
// ROUTE:         GET /api/properties/:id
// ACCESS:        PRIVATE
// INFORMATION:   INLCUDE ISSUES MODEL AS WELL
 
export async function GET(request: NextRequest, { params } : { params: { id: string }}) {
  const property = await prisma.property.findUnique({ 
    where: { id: parseInt(params.id) }, 
    include: { issues: { include: { comments: true }}}
  })
  return NextResponse.json({ success: true, property });
}


// DESCRIPTION:   UPDATE A NEW PROPERTY
// ROUTE:         PATCH /api/properties
// ACCESS:        PRIVATE

export async function PATCH(request: NextRequest, { params } : { params: { id: string }}) {
  const body = await request.json();

  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!property)
  return NextResponse.json({error: 'Invalid property'}, { status: 404 })

  const updatedProperty = await prisma.property.update({
    where: { id: property.id},
    data: {
      city: body.city,
      districtID: body.districtID,
      streetName: body.streetName,
      houseNumber: body.houseNumber,
      stairwell: body.stairwell,
      floor: body.floor,
      apartment: body.apartment,
      status: body.status,
      rentPrice: body.rentPrice,
      rentStart: body.rentStart,
      rentEnd: body.rentEnd,
    }
  })
  return NextResponse.json({success: true, updatedProperty});
}


// DESCRIPTION:   DELETE A PROPERTY
// ROUTE:         DELETE /api/properties/:id
// ACCESS:        PRIVATE

export async function DELETE(request: NextRequest, { params } : { params: { id: string }}) {
  const property = await prisma.property.delete({
    where: { id: parseInt(params.id)}
  });
  return NextResponse.json({ success: true });
}

