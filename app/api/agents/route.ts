import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   GET ALL AGENTS
// ROUTE:         GET /api/agents
// ACCESS:        PRIVATE
 
export async function GET(request: NextRequest) {
  const agents = await prisma.agent.findMany();
  return NextResponse.json({success: true, data: agents});
}

// DESCRIPTION:   CREATE A NEW AGENT
// ROUTE:         POST /api/agents
// ACCESS:        PRIVATE

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newAgent = await prisma.agent.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone
    }
  });

  return NextResponse.json(newAgent,{ status: 201 })
}