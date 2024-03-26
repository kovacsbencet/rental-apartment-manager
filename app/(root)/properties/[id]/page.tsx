import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

const PropertyDetailPage = async ({ params } : { params: { id: string }}) => {
  
  const property = await prisma.property.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!property) notFound();

  return (
    <div>
      <h2>{property.street}/{property.number}/{property.stairwell}/{property.floor}.OG/Top {property.apartment}</h2>
    </div>
  )
}

export default PropertyDetailPage;