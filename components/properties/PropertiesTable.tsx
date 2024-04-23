import prisma from '@/prisma/client';
import { useEffect, useState } from 'react';
import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';
import useSWR from 'swr';

interface Props {
  encodedSearchQuery: string;
}
interface Property {
  id: number;
  city: string;
  districtID: number;
  streetName: string;
  houseNumber: number;
  stairwell: number;
  floor: number;
  apartment: number;
  status: string;
  rentPrice: number;
  rentStart: Date;
  rentEnd: Date;
  createdAt: Date;
  updatedAt: Date;
  tenant: Tenant | null;
  agent: Agent | null;
  owner: Owner | null;
}
interface Owner {
  name: string;
}

interface Tenant {
  id: number;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Agent {
  id: number;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ApiResponse {
  success: boolean;
  data: Property[]; 
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  if (!data.success) {
    throw new Error('Failed to fetch properties');
  }
  return data.data;
};

const PropertiesTable = ({ encodedSearchQuery} : Props) => {

  const [properties, setProperties] = useState<Property[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/properties?q=${encodedSearchQuery}`)
      const fetchedData = await response.json() as ApiResponse;

      if (fetchedData.success && Array.isArray(fetchedData.data)) {
        const fetchedProperties = fetchedData.data;
        setProperties(fetchedProperties);
      }

    }
    fetchData()
  }, [encodedSearchQuery])


  return (
    <Table.Root variant='surface'>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Azonosító</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Ügynök neve</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Tulajdonos</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Város</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Kerület</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Utca neve</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Házszám</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Státusz</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Bérlő</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Bérleti díj</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Bérlés kezdete</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Bérlés vége</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Műveletek</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {properties?.map(property => (
        <Table.Row key={property.id} align={'center'}>
          <Table.Cell>{property.id}</Table.Cell>
          <Table.Cell>{property.agent?.name}</Table.Cell>
          <Table.Cell>{property.owner?.name}</Table.Cell>
          <Table.Cell>{property.city}</Table.Cell>
          <Table.Cell>{property.districtID}</Table.Cell>
          <Table.Cell>{property.streetName}</Table.Cell>
          <Table.Cell>{property.houseNumber}.</Table.Cell>
          <Table.Cell>{property.status}</Table.Cell>
          <Table.Cell>{property.tenant?.name}</Table.Cell>
          <Table.Cell>€ {property.rentPrice},-</Table.Cell>
          <Table.Cell>{property.id}</Table.Cell>
          <Table.Cell>{property.id}</Table.Cell>
          <Table.Cell><Link href={`/properties/${property.id}`}><Button>Megnyitás</Button></Link></Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Root>
  )
}

export default PropertiesTable;