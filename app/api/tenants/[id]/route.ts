import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   UPDATE A TENANT
// ROUTE:         PATCH /api/tenants/:id
// ACCESS:        PRIVATE

export async function PATCH(request: NextRequest, { params } : { params: { id: string }}) {
  const body = await request.json();
  const tenant = await prisma.tenant.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!tenant)
  return NextResponse.json({error: `There isn't any Tenant with the following ID: ${params.id}`}, { status: 404 })

  const updatedTenant = await prisma.tenant.update({
    where: { id: tenant.id},
    data: {
      name: body.name,
      phone: body.phone,
      email: body.email
    }
  })
  return NextResponse.json({success: true, updatedTenant});
}

// DESCRIPTION:   DELETE A TENANT
// ROUTE:         DELETE /api/tenants/:id
// ACCESS:        PRIVATE

export async function DELETE(request: NextRequest, { params } : { params: { id: string }}) {
  const tenant = await prisma.tenant.delete({
    where: { id: parseInt(params.id)}
  });
  return NextResponse.json({ success: true });
}