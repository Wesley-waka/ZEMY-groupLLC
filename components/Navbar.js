'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isBright, setIsBright] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const heroSectionHeight = 880; // or the actual height of your hero section
    // Set isBright to true if the scroll is beyond the hero section
    setIsBright(window.scrollY > heroSectionHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Conditional styles for navbar
  const navbarStyle = {
    opacity: isBright ? 1 : 0.5,
    backgroundColor: isBright ? '#ffffff' : 'transparent', // Adjust color values accordingly
    transition: 'opacity 0.3s, background-color 0.3s'  // Include background-color in the transition
  };

  return (
    <div style={navbarStyle} className='top-0 flex justify-between px-20 py-5 bg-white bg-opacity-65 fixed w-full mt-0 align-middle'>
        <div>
            <Image src='/logo.png' alt='zemy-logo' width={100} height={200} className=' sm:h-10 sm:w-20 h-5 w-10 left-5 absolute' />
        </div>
        <div className="flex space-x-10 text-burgundy">
            <Link href='#'>About us</Link>
            <Link href='#'>Service</Link>
            <Link href='#'>News</Link>
            <Link href='#'>Contact us</Link>
        </div>
    </div>
  )
}

export default Navbar
