import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import SearchField from './items/SearchField';

const Toolbar = () => {
  return (
    <div className='mb-4 flex flex-row'>
        <Button size='2'>
            <Link href='/properties/new'>Új ingatlan hozzáadása</Link>
        </Button>
        <SearchField/>
    </div>
  )
}

export default Toolbar;