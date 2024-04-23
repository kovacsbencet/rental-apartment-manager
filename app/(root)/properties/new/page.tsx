'use client';
import React, { useState } from "react";
import { Button, Box, Grid, Heading } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import districts from '@/app/data/districts.js'
import AddNewTenant from "@/components/tenants/AddNewTenantDialog";
import { number } from "zod";

interface PropertyForm {
  city: string;
  district: string;
  street: string;
  number: number;
  stairwell: number;
  floor: number;
  apartment: number;
  status: string;
  rent: number;
  rentStart: Date;
  rentEnd: Date;
}

interface District {
  value: string,
  label: string
}

const NewPropertyPage = () => {
  const { register, handleSubmit } = useForm<PropertyForm>();
  console.log(JSON.stringify(districts))
  const [propertyId, setPropertyId] = useState(0)

  return (
    <div className='w-full p-4'>
      <Form.Root className="flex flex-col gap-2" onSubmit={handleSubmit(async (data) => {
        const response = await fetch('http://localhost:3000/api/properties', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          }
        })
        const newProperty = await response.json();
        setPropertyId(newProperty.id)

      })}>
          <Grid columns='3' gap='3' className='w-full'>
            <Box className='w-full'>
              <Heading size={'4'}>Cím:</Heading>
                <Form.Field name="city" className="flex flex-col">
              <Form.Label htmlFor="city">Város:</Form.Label>
              <Form.Control
                className="rounded border border-gray-500 p-1 focus:outline-none"
                type="text"
                value="Wien"
                {...register('city')}
              />
            </Form.Field>
            <Form.Field name="district">
              <Form.Label>Kerület:</Form.Label>
              <Form.Control asChild {...register('district')}>
                <select className='bg-transparent w-full rounded border border-gray-500 p-2 focus:outline-none'>
                {districts?.map((district: District) =>(
                  <option value={district.value}>{district.label}</option>
                ))}
                </select>
              </Form.Control>
            </Form.Field>
            <Form.Field name="street" className="flex flex-col">
              <Form.Label htmlFor="street">Utca:</Form.Label>
              <Form.Control
                type="text"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('street')}
              />
            </Form.Field>
            <Form.Field name="number" className="flex flex-col">
              <Form.Label htmlFor="number">Number:</Form.Label>
              <Form.Control
                type="number"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('number', { valueAsNumber: true })}
              />
            </Form.Field>
            <Form.Field name="stairwell" className="flex flex-col">
              <Form.Label htmlFor="stairwell">Stairwell:</Form.Label>
              <Form.Control
                type="number"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('stairwell', { valueAsNumber: true })}
              />
            </Form.Field>
            <Form.Field name="floor" className="flex flex-col">
              <Form.Label htmlFor="floor">Floor:</Form.Label>
              <Form.Control
                type="number"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('floor', { valueAsNumber: true })}
              />
            </Form.Field>
            <Form.Field name="apartment" className="flex flex-col">
              <Form.Label htmlFor="apartment">Apartment:</Form.Label>
              <Form.Control
                type="number"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('apartment', { valueAsNumber: true })}
              />
            </Form.Field>
            </Box>
            <Box>
              <Heading size={'4'}>Bérlő adatai:</Heading>
              <Form.Field name="status">
                <Form.Label>Státusz:</Form.Label>
                <Form.Control asChild {...register('status')}>
                <select className='bg-transparent w-full rounded border border-gray-500 p-2 focus:outline-none'>
                <option value='RENTED'>Bérlés alatt</option>
                <option value='NOT_RENTED'>Üresen áll</option>
                <option value='ONGOING'>Meghirdetve</option>
                </select>
                </Form.Control>
              </Form.Field>
              <Form.Field name="rent" className="flex flex-col">
                <Form.Label htmlFor="rent">Rent:</Form.Label>
                <Form.Control
                type="number"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('rent', { valueAsNumber: true })}
                />
              </Form.Field>
              <Form.Field name="rentStart" className="flex flex-col">
                <Form.Label htmlFor="rentStart">Bérlés kezdete:</Form.Label>
                <Form.Control
                type="date"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('rentStart', { valueAsDate: true })}
                />
              </Form.Field>
              <Form.Field name="rentStart" className="flex flex-col">
                <Form.Label htmlFor="rentStart">Bérlés vége:</Form.Label>
                <Form.Control
                type="date"
                className="rounded border border-gray-500 p-1 focus:outline-none"
                {...register('rentEnd', { valueAsDate: true })}
                />
              </Form.Field>
            </Box>
          </Grid>
        <Button>Új ingatlan hozzáadása</Button>
      </Form.Root>
    </div>
  );
};

export default NewPropertyPage;
