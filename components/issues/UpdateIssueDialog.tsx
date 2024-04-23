'use client'
import { Button, Dialog, Heading } from '@radix-ui/themes';
import React from 'react';
import * as Form from "@radix-ui/react-form";
import { useForm } from 'react-hook-form';
import { IssueStatus, IssueType } from '@prisma/client';
import issueStatuses from '@/app/data/issueStatuses';
import issueTypes from '@/app/data/issueTypes';
import CommentList from './CommentList';

interface UpdateIssueForm {
  title: string;
  type: string;
  status: string;
  description: string;
}

interface Issue {
  id: number;
  type: string;
  status: string;
  description: string;
  comments: []
}

interface IssueStatuses {
  id: number,
  value: string,
  label: string
}

interface IssueTypes {
  id: number,
  value: string,
  label: string
}

const UpdateIssueDialog = ({ issue: { id, description, type, status, comments }} : { issue: Issue }) => {
  const { register, handleSubmit } = useForm<UpdateIssueForm>();
  const onSubmit = async (formData: UpdateIssueForm) => {
    const fullFormData = { ...formData, id}; 
    await fetch(`http://localhost:3000/api/issues/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(fullFormData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(fullFormData)
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Szerkesztés</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth={'1200px'}>
        <Dialog.Title>
          Title
        </Dialog.Title>
        <Dialog.Description>
          This is the description of this dialog.
        </Dialog.Description>
        <Form.Root className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Form.Field name="issueType">
          <Form.Label>Státusz:</Form.Label>
          <Form.Control asChild {...register('type')}>
            <select className='bg-transparent w-full rounded border border-gray-500 p-2 focus:outline-none' defaultValue={type}>
            {issueTypes?.map((issueStatus: IssueTypes) =>(
              <option key={issueStatus.id} value={issueStatus.value}>{issueStatus.label}</option>
            ))}
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field name="issueStatus">
          <Form.Label>Státusz:</Form.Label>
          <Form.Control asChild {...register('status')}>
            <select className='bg-transparent w-full rounded border border-gray-500 p-2 focus:outline-none' defaultValue={status}>
            {issueStatuses?.map((issueStatus: IssueStatuses) =>(
              <option key={issueStatus.id} value={issueStatus.value}>{issueStatus.label}</option>
            ))}
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field name="rent" className="flex flex-col">
          <Form.Label htmlFor="rent">Description:</Form.Label>
          <Form.Control
            type="text"
            className="rounded border border-gray-500 p-1 focus:outline-none"
            defaultValue={description}
            {...register('description')}
          />
        </Form.Field>
        <Button>Teendő módosítása</Button>
      </Form.Root>
      <Heading size={'3'} className='mt-4'>Előzmények</Heading>
      <CommentList comments={comments}/>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default UpdateIssueDialog;