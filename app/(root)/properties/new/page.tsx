'use client';
import React from "react";
import { Button } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";

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
}

const NewPropertyPage = () => {
  const { register, handleSubmit } = useForm<PropertyForm>();

  return (
    <div className="flex max-w-xl flex-col gap-2 p-4">
      <Form.Root className="flex flex-col gap-2" onSubmit={handleSubmit(async (data) => {
        console.log(data)
        await fetch('http://localhost:3000/api/properties', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          }
        })
      })}>
        <Form.Field name="city" className="flex flex-col">
          <Form.Label htmlFor="city">City:</Form.Label>
          <Form.Control
            className="rounded border border-gray-500 p-1 focus:outline-none"
            type="text"
            value="Wien"
            {...register('city')}
          />
        </Form.Field>
        <Form.Field name="district" className="flex flex-col">
          <Form.Label htmlFor="district">District:</Form.Label>
          <Form.Control
            type="text"
            className="rounded border border-gray-500 p-1 focus:outline-none"
            {...register('district')}
          />
        </Form.Field>
        <Form.Field name="street" className="flex flex-col">
          <Form.Label htmlFor="street">Street:</Form.Label>
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
        <Form.Field name="status" className="flex flex-col">
          <Form.Label htmlFor="status">Status:</Form.Label>
          <Form.Control
            type="text"
            className="rounded border border-gray-500 p-1 focus:outline-none"
            value="RENTED"
            {...register('status')}
          />
        </Form.Field>
        <Form.Field name="rent" className="flex flex-col">
          <Form.Label htmlFor="rent">Rent:</Form.Label>
          <Form.Control
            type="number"
            className="rounded border border-gray-500 p-1 focus:outline-none"
            {...register('rent', { valueAsNumber: true })}
          />
        </Form.Field>
        <Button>Új ingatlan hozzáadása</Button>
      </Form.Root>
    </div>
  );
};

export default NewPropertyPage;
