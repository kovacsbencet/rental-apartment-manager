import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   GET ALL TENANTS
// ROUTE:         GET /api/tenants
// ACCESS:        PRIVATE
 
export async function GET(request: NextRequest) {
  const tenants = await prisma.tenant.findMany();
  return NextResponse.json({success: true, data: tenants});
}

// DESCRIPTION:   CREATE A NEW TENANT
// ROUTE:         POST /api/tenants
// ACCESS:        PRIVATE

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newTenant= await prisma.tenant.create({
    data: {
      property: { connect: { id: body.propertyID } },
      name: body.name,
      email: body.email,
      phone: body.phone
    }
  });

  return NextResponse.json(newTenant,{ status: 201 })
}
