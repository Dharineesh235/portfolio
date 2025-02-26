"use client"

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

type HeaderProps={
  profileRef:React.RefObject<HTMLDivElement | null>;
  aboutRef:React.RefObject<HTMLDivElement | null>;
  resumeRef:React.RefObject<HTMLDivElement | null>;
  servicesRef:React.RefObject<HTMLDivElement | null>;
  skillsRef:React.RefObject<HTMLDivElement | null>;
  projectsRef:React.RefObject<HTMLDivElement | null>;
  contactRef:React.RefObject<HTMLDivElement | null>;
  scrolltoView: (ref:React.RefObject<HTMLDivElement | null>) => void;
}

const Header:React.FC<HeaderProps> = ({profileRef, aboutRef, resumeRef, servicesRef, projectsRef, contactRef, scrolltoView}) => {
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
          <div className="cursor-pointer text-gray-200 hover:text-primary" onClick={()=>scrolltoView(profileRef)}>Home</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(aboutRef)}>About</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(servicesRef)}>Services</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(resumeRef)}>Resume</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(projectsRef)}>Projects</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(contactRef)}> Contact</div>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      <div className={`md:hidden ${nav ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 mt-4">
          {/* <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
          <li><Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li> */}
          <div className="cursor-pointer text-gray-200 hover:text-primary" onClick={()=>scrolltoView(profileRef)}>Home</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(aboutRef)}>About</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(servicesRef)}>Services</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(resumeRef)}>Resume</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(projectsRef)}>Projects</div>
          <div className='cursor-pointer text-gray-200 hover:text-primary' onClick={()=>scrolltoView(contactRef)}> Contact</div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;