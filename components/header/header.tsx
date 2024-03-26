import React from 'react';
import { Heading } from '@radix-ui/themes';
import Navigation from './navigation/navigation';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-3 p-4'>
      <Heading size='6'>
        <Link href='/'>LINZER</Link>
      </Heading>
      <Navigation/>
    </header>
  )
}

export default Header;