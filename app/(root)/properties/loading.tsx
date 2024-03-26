import React from 'react';
import { Table } from '@radix-ui/themes';
import Toolbar from '@/components/toolbar/toolbar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingPropertiesPage = () => {
  const properties = [1, 2, 3, 4, 5]
  return (
    <div className='p-2'>
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
          <Table.Row key={property}>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
            <Table.Cell><Skeleton/></Table.Cell>
          </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default LoadingPropertiesPage;