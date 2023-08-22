import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Bottombar() {
  return (
    <nav className='flex justify-end flex-row bottombar'>
      <div className='items-end px-5'>
        <Link
          href='https://www.linkedin.com/in/harshsahu1/'
          className='flex items-center gap-4 pt-1 text-base-semibold text-white'
        >
          <Image src='/assets/linkedin.png' alt='logo' width={28} height={28} />
        </Link>
      </div>
      <div>
        <Link
          href='https://github.com/harshsahu1'
          className='flex px-4 items-center gap-4 pt-1 text-base-semibold text-white'
        >
          <Image src='/assets/github.png' alt='logo' width={28} height={28} />
        </Link>
      </div>
    </nav>
  );
}
