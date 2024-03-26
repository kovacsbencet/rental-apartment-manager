import React from 'react';
import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import Toolbar from '@/components/toolbar/toolbar';
import StatusBadge from '@/components/statusBadge/statusBadge';
import Link from 'next/link';
import delay from 'delay';

const Properties = async () => {

  const properties = await prisma.property.findMany();

  await delay(2000)

  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}.${month}.${day}.`;
  }

  return (
    <div className='p-4'>
      <Toolbar/>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Azonosító</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Felelős neve</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Tulajdonos</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Házkezelőség</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Ügyvéd</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Jegyző</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Város</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Cím</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Státusz</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bérlő</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bérleti díj</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bérlés kezdete</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bérlés vége</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {properties.map(property => (
            <Table.Row key={property.id}>
              <Table.Cell><Link href={`/properties/${property.id}`}>{property.id}</Link></Table.Cell>
              <Table.Cell>{property.id}</Table.Cell>
              <Table.Cell>{property.id}</Table.Cell>
              <Table.Cell>{property.id}</Table.Cell>
              <Table.Cell>{property.id}</Table.Cell>
              <Table.Cell>{property.id}</Table.Cell>
              <Table.Cell>{property.city}</Table.Cell>
              <Table.Cell>{property.street}/{property.number}/{property.stairwell}/{property.floor}.OG/Top {property.apartment}</Table.Cell>
              <Table.Cell><StatusBadge status={property.status}/></Table.Cell>
              <Table.Cell>{property.id}</Table.Cell>
              <Table.Cell>€ {property.rent}.00,-</Table.Cell>
              <Table.Cell>{formatDate(property.rentStart)}</Table.Cell>
              <Table.Cell>{formatDate(property.rentEnd)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default Properties;