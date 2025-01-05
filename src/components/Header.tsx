"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="text-white shadow-md w-full header" style={{ backgroundColor: '#1F242D' }}>
      <div className="flex justify-between items-center h-16 gap-6">
        <div className="text-2xl font-bold">Lakshmi Narasimman</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" >Home</Link>
          <Link href="/" >About</Link>
          <Link href="/" >Skills</Link>
          <Link href="/" >Services</Link>
          <Link href="/" >Projects</Link>
          <Link href="/" >Contact</Link>
        </div>
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div className={`md:hidden ${nav ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-3 text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;