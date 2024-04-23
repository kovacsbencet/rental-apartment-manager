import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   GET ALL PROPERTIES
// ROUTE:         GET /api/properties
// ACCESS:        PRIVATE
 
export async function GET(request: NextRequest) {

  const url = new URL(request.nextUrl.href);
  const searchParams = new URLSearchParams(url.searchParams);
  const {q: query} = Object.fromEntries(searchParams.entries());

  if(!query) {
    const properties = await prisma.property.findMany({
      include: {owner: true, agent: true, tenant: true, issues: true}
    });
    return NextResponse.json({success: true, data: properties});
  }

  if (typeof query !== 'string') {
    throw new Error('Invalid request')
  }

  const properties = await prisma.property.findMany({
    include: { owner: true, agent: true, tenant: true, issues: true },
    where: {
      OR: 
      [
        { owner: { name: { contains: query }}},
        { agent: { name: { contains: query }}},
        { tenant: { name: { contains: query }}},
        { streetName: { contains: query }},
      ]
    }
  });

  return NextResponse.json({success: true, data: properties});
}

// DESCRIPTION:   CREATE A NEW PROPERTY
// ROUTE:         POST /api/properties
// ACCESS:        PRIVATE

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newProperty = await prisma.property.create({
    data: { 
      city: body.city,
      districtID: body.districtID,
      streetName: body.streetName,
      houseNumber: body.houseNumber,
      stairwell: body.stairwell,
      floor: body.floor,
      apartment: body.apartment,
      status: body.status,
      rentPrice: body.rent,
      rentStart: body.rentStart,
      rentEnd: body.rentEnd,
    }
  });
  return NextResponse.json(newProperty, { status: 201 })
}
