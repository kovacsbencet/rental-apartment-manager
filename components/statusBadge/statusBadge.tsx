import React from 'react';
import { Badge } from '@radix-ui/themes';
import { Status } from '@prisma/client';

const statusMap: Record<Status, { label: string, color: 'red' | 'green'}> = {
  RENTED: { label: 'Bérlés alatt', color: 'green'},
  NOT_RENTED: { label: 'Üresen áll', color: 'red'}
}

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  )
}

export default StatusBadge;