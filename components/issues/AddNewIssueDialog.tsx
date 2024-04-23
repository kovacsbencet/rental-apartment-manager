'use client'
import { Button, Dialog, TextArea } from '@radix-ui/themes';
import React from 'react';
import * as Form from "@radix-ui/react-form";
import { useForm } from 'react-hook-form';
import issueStatuses from '@/app/data/issueStatuses'
import issueTypes from '@/app/data/issueTypes'
import { mutate } from 'swr';

interface AddNewIssueForm {
  propertyID: number;
  description: string;
  issueStatus: string;
  issueType: string;
}

interface IssueStatuses {
  id: number,
  value: string,
  label: string
}

interface issueTypes {
  id: number,
  value: string,
  label: string
}

const AddNewIssueDialog = ({ propertyID } : { propertyID: number }) => {
  const { register, handleSubmit } = useForm<AddNewIssueForm>();
  const onSubmit = async (formData: AddNewIssueForm) => {
    const fullFormData = { ...formData, propertyID };
    console.log(fullFormData)
    await fetch('http://localhost:3000/api/issues', {
      method: 'POST',
      body: JSON.stringify(fullFormData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await mutate(`http://localhost:3000/api/properties/${propertyID}`)
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size='3' className='text-lg'>Új teendő hozzáadása</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>
          Új teeendő hozzáadása
        </Dialog.Title>
        <Form.Root className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Form.Field name="issueType">
          <Form.Label>Teendő típusa:</Form.Label>
          <Form.Control asChild {...register('issueType')}>
            <select className='bg-transparent w-full rounded border border-gray-500 p-2 focus:outline-none'>
            {issueTypes?.map((issueType: issueTypes) =>(
              <option key={issueType.id} value={issueType.value}>{issueType.label}</option>
            ))}
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field name="issueStatus">
          <Form.Label>Státusz:</Form.Label>
          <Form.Control asChild {...register('issueStatus')}>
            <select className='bg-transparent w-full rounded border border-gray-500 p-2 focus:outline-none'>
            {issueStatuses?.map((issueStatus: IssueStatuses) =>(
              <option key={issueStatus.id} value={issueStatus.value}>{issueStatus.label}</option>
            ))}
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field name="rent" className="flex flex-col">
          <Form.Label htmlFor="rent">Description:</Form.Label>
          <Form.Control asChild {...register('description')}>
            <TextArea 
              placeholder="Reply to comment…"
              className="rounded border border-gray-500 p-1 focus:outline-none"
              {...register('description')} 
              />
          </Form.Control>
        </Form.Field>
        <Button>Új teendő hozzáadása</Button>
      </Form.Root>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default AddNewIssueDialog;