import React from 'react';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';

const links = 
[
  {route: '/properties', label: 'Properties'},
  {route: '/issues', label: 'Issues'},
]

const Navigation = () => {
  return (
    <nav className='flex items-center space-x-3'>
      <ul className='flex space-x-3'>
        {links.map(link => 
          <Link 
            key={link.route} 
            href={link.route}
          >
            {link.label}
          </Link>
        )}
      </ul>
      <Button size='2'>Új ingatlan hozzáadása</Button>
    </nav>
  )
}

export default Navigation;