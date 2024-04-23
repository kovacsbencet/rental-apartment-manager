'use client'
import * as Form from '@radix-ui/react-form';
import { useForm } from 'react-hook-form';
import { Dialog, Button } from '@radix-ui/themes';

interface AddNewTenantForm {
  propertyId: number;
  name: string;
  email: string;
  phone: number;
}

interface Props {
  propertyId: number
}

const AddNewTenantDialog = ({propertyId} : Props) => {

  const { register, handleSubmit } = useForm<AddNewTenantForm>();
  console.log('Hello', propertyId)
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size='3' className='text-lg'>Bérlő hozzáadása</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>

        </Dialog.Title>
        <Dialog.Description>

        </Dialog.Description>
          <Form.Root onSubmit={handleSubmit(async (data) => {
            await fetch('http://localhost:3000/api/tenants', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'content-type': 'application/json'
              }
            })
            })}>
            <Form.Field name='propertyId'>
              <Form.Label htmlFor='propertyId'>Ingatlan azonosító:</Form.Label>
              <Form.Control
                className='rounded border border-gray-500 p-1 focus:outline-none'
                type='number'
                defaultValue={propertyId}
                {...register('propertyId', { valueAsNumber: true })}
              />
            </Form.Field>
            <Form.Field name='name'>
              <Form.Label htmlFor='name'>Bérlő neve:</Form.Label>
              <Form.Control
                className='rounded border border-gray-500 p-1 focus:outline-none'
                type='text'
                {...register('name')}
              />
            </Form.Field>
            <Form.Field name='email'>
              <Form.Label htmlFor='email'>E-mail cím:</Form.Label>
              <Form.Control
                className='rounded border border-gray-500 p-1 focus:outline-none'
                type='email'
                {...register('email')}
              />
            </Form.Field>
            <Form.Field name='email'>
              <Form.Label htmlFor='email'>Telefonszám:</Form.Label>
              <Form.Control
                className='rounded border border-gray-500 p-1 focus:outline-none'
                type='number'
                {...register('phone', { valueAsNumber: true })}
              />
            </Form.Field>
            <Button>Új bérlő hozzáadása</Button>
          </Form.Root>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default AddNewTenantDialog;