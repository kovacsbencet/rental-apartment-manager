import React from 'react';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';

const links = 
[
  {route: '/properties', label: 'Ingatlanok'},
  {route: '/issues', label: 'Teendők'},
]

const Navigation = () => {
  return (
    <nav className='flex items-center space-x-3'>
      <ul className='flex space-x-3'>
        {links.map(link => 
          <Link 
            key={link.route} 
            href={link.route}
            className='text-base'
          >
            {link.label}
          </Link>
        )}
      </ul>
      <Button size='3' className='text-lg'>Új ingatlan hozzáadása</Button>
    </nav>
  )
}

export default Navigation;