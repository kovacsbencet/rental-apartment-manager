import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// DESCRIPTION:   GET AN ISSUE BY ID
// ROUTE:         GET /api/issues/:id
// ACCESS:        PRIVATE
 
export async function GET(request: NextRequest, { params } : { params: { id: string }}) {
  const issue = await prisma.issue.findUnique({ 
    where: { id: parseInt(params.id) }
  })
  return NextResponse.json({ success: true, issue });
}

// DESCRIPTION:   UPDATE AN ISSUE
// ROUTE:         PATCH /api/issues/:id
// ACCESS:        PRIVATE

export async function PATCH(request: NextRequest, { params }:{ params: { id: string }}) {
  const body = await request.json();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id)}
  });

  if (!issue)
  return NextResponse.json({error: `Nincs teendő ezzel az ID-val: ${params.id}`}, { status: 404 })

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id},
    data: {
      type: body.type,
      status: body.status,
      description: body.description
    }
  })
  return NextResponse.json({success: true, updatedIssue});
}

// DESCRIPTION:   DELETE AN ISSUE
// ROUTE:         PATCH /api/issues/:id
// ACCESS:        PRIVATE

export async function DELETE(request: NextRequest, { params }:{ params: { id: string }}) {
  const issue = await prisma.issue.delete({
    where: { id: parseInt(params.id)}
  });
  return NextResponse.json({ success: true });
}