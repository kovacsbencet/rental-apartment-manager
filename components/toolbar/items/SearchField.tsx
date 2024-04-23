'use client'
import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { useRouter } from 'next/navigation';

const SearchField = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSeachQuery = encodeURI(searchQuery);

    router.push(`/properties?q=${encodedSeachQuery}`);

    console.log(encodedSeachQuery)
  }

  return (
    <Form.Root className="flex flex-col gap-2" onSubmit={onSearch}>
      <Form.Field name="floor" className="flex flex-col w-60">
        <Form.Control
          type="text"
          className="rounded border border-gray-500 p-1 focus:outline-none"
          placeholder={'Ingatlan keresése'}
          defaultValue={searchQuery}
          onChange={({target}) => setSearchQuery(target.value)}
        />
      </Form.Field>
    </Form.Root>
  )
}

export default SearchField;