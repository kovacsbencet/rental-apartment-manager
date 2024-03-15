import React from 'react';
import Link from 'next/link';

const links = 
[
  {route: '/properties', value: 'Properties'}
]

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link href='/properties'>Properties</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;