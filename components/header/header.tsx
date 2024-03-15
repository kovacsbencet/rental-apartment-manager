import React from 'react';
import Navigation from './navigation/navigation';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
        <h2><Link href='/'>LINZER</Link></h2>
        <Navigation/>
    </div>
  )
}

export default Header;