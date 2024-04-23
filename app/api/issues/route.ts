import prisma from '@/prisma/client';
import { NextResponse, NextRequest } from 'next/server';

// DESCRIPTION:   GET ALL ISSUES
// ROUTE:         GET /api/issues
// ACCESS:        PRIVATE
 
export async function GET() {
  const issues = await prisma.issue.findMany({ include: { comments: true}});
  return NextResponse.json({success: true, data: issues});
}

// DESCRIPTION:   CREATE A NEW ISSUES
// ROUTE:         POST /api/issues
// ACCESS:        PRIVATE

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newProperty = await prisma.issue.create({
    data: { 
      propertyID: body.propertyID,
      description: body.description,
      type: body.issueType,
      status: body.issueStatus
    }
  });
  return NextResponse.json(newProperty,{ status: 201 })
}