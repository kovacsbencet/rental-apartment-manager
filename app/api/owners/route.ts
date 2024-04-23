import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   GET ALL OWNERS
// ROUTE:         GET /api/owners
// ACCESS:        PRIVATE
 
export async function GET(request: NextRequest) {
  const owners = await prisma.owner.findMany();
  return NextResponse.json({success: true, data: owners});
}

// DESCRIPTION:   CREATE A NEW OWNER
// ROUTE:         POST /api/owners
// ACCESS:        PRIVATE

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newOwner = await prisma.owner.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone
    }
  });

  return NextResponse.json(newOwner,{ status: 201 })
}