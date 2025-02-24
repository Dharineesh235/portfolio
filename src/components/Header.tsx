"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);

  const path = usePathname();
  if(path==='/' || path==='/home'){
  console.log(path);
  }

  const handleClick = () => setNav(!nav);

  return (
    <nav className="w-full z-10 fixed scroll-dark_background">
      <div className="md:flex bg-dark_transparent container mx-auto px-4 flex justify-between items-center h-16">
        <div className="hidden md:flex justify-evenly items-center  text-white flex-1">
          <div className="/home"><Link href="/" className="text-gray-200 hover:text-blue-600">Home</Link></div>
          <div><Link href="/about" className="text-gray-200 hover:text-blue-600">About</Link></div>
          <div><Link href="/services" className="text-gray-200 hover:text-blue-600">Services</Link></div>
          <div><Link href="/services" className="text-gray-200 hover:text-blue-600">Resume</Link></div>
          <div><Link href="/Projects" className="text-gray-200 hover:text-blue-600">Project</Link></div>
          <div> <Link href="/contact" className="text-gray-200 hover:text-blue-600">Contact</Link></div>
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