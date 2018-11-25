import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href="/sell">
        <a>go to Sell</a>
      </Link>
      <Link href="/">
        <a>go to Home</a>
      </Link>
    </div>
  )
}

export default Nav;