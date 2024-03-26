import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const Toolbar = () => {
  return (
    <div className='mb-4'>
        <Button size='2'>
            <Link href='/properties/new'>Új ingatlan hozzáadása</Link>
        </Button>
    </div>
  )
}

export default Toolbar;