"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="text-white shadow-md w-full header" style={{ backgroundColor: '#1F242D' }}>
      <div className="flex justify-between items-center h-16">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" >Home</Link>
          <Link href="/about" >About</Link>
          <Link href="/services" >Services</Link>
          <Link href="/contact" >Contact</Link>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div className={`md:hidden ${nav ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
          <li><Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;