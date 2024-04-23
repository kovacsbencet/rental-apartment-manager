import prisma from '@/prisma/client';
import { NextResponse, NextRequest } from 'next/server';

// DESCRIPTION:   GET ALL COMMENTS
// ROUTE:         GET /api/comments
// ACCESS:        PRIVATE
 
export async function GET() {
  const comments = await prisma.comment.findMany();
  return NextResponse.json({success: true, data: comments});
}

// DESCRIPTION:   CREATE A NEW COMMENT
// ROUTE:         POST /api/comments
// ACCESS:        PRIVATE

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newComment = await prisma.comment.create({
    data: { 
      issueID: body.issueID,
      agentID: body.agentID,
      content: body.content
    }
  });
  return NextResponse.json(newComment,{ status: 201 })
}