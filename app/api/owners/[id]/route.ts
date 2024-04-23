import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   UPDATE AN OWNER
// ROUTE:         PATCH /api/owners/:id
// ACCESS:        PRIVATE

export async function PATCH(request: NextRequest, { params } : { params: { id: string }}) {
  const body = await request.json();
  const owner = await prisma.owner.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!owner)
  return NextResponse.json({error: `There isn't any Owner with the following ID: ${params.id}`}, { status: 404 })

  const updatedOwner = await prisma.owner.update({
    where: { id: owner.id},
    data: {
      name: body.name,
      phone: body.phone,
      email: body.email
    }
  })
  return NextResponse.json({success: true, updatedOwner});
}

// DESCRIPTION:   DELETE AN OWNER
// ROUTE:         DELETE /api/owners/:id
// ACCESS:        PRIVATE

export async function DELETE(request: NextRequest, { params } : { params: { id: string }}) {
  const owner = await prisma.owner.delete({
    where: { id: parseInt(params.id)}
  });
  return NextResponse.json({ success: true });
}