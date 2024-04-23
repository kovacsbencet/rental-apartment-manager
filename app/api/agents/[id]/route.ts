import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   GET AN AGENT BY ID
// ROUTE:         GET /api/agents/:id
// ACCESS:        PRIVATE
 
export async function GET(request: NextRequest, { params } : { params: { id: string }}) {
  const agent = await prisma.agent.findUnique({ 
    where: { id: parseInt(params.id) }
  })
  return NextResponse.json({ success: true, agent });
}

// DESCRIPTION:   UPDATE AN AGENT
// ROUTE:         PATCH /api/agents/:id
// ACCESS:        PRIVATE

export async function PATCH(request: NextRequest, { params } : { params: { id: string }}) {
  const body = await request.json();
  const agent = await prisma.agent.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!agent)
  return NextResponse.json({error: `There isn't any Agent with the following ID: ${params.id}`}, { status: 404 })

  const updatedAgent = await prisma.agent.update({
    where: { id: agent.id},
    data: {
      name: body.name,
      phone: body.phone,
      email: body.email
    }
  })
  return NextResponse.json({success: true, updatedAgent});
}

// DESCRIPTION:   DELETE AN AGENT
// ROUTE:         DELETE /api/agents/:id
// ACCESS:        PRIVATE

export async function DELETE(request: NextRequest, { params } : { params: { id: string }}) {
  const agent = await prisma.agent.delete({
    where: { id: parseInt(params.id)}
  });
  return NextResponse.json({ success: true });
}