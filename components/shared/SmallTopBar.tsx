import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SmallTopBar() {
  return (
    <nav className='smalltopbar'>
      <Link href='/' className='flex items-center gap-4 pt-1'>
        <Image src='/assets/logo.png' alt='logo' width={28} height={28} />
      </Link>
    </nav>
  );
}
