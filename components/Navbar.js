'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
    const [isBright, setIsBright] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSideBarOpen,setSideBar] = useState(false)

    const closeSidebar = () =>{
      setSideBar(!isSideBarOpen)
    }
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
    opacity: 1,
    backgroundColor:  '#ffffff' , // Adjust color values accordingly
    transition: 'opacity 0.3s, background-color 0.3s'  // Include background-color in the transition
  };

  const openSidebar = () => {
    setSideBar(!isSideBarOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={navbarStyle} className='top-0 flex justify-between sm:px-20 px-6 sm:py-5 py-2 bg-gray-100 bg-opacity-80  fixed w-full mt-0 sm:align-middle z-20'>
        <div>
            <Image src='/logo.png' alt='zemy-logo' width={100} height={200} className=' sm:h-10 sm:w-20 h-8 w-10 left-5 absolute' />
        </div>
        <div className="sm:flex space-x-10 text-burgundy hidden">
            <Link href='/'>Home</Link>
            <Link href='/about-us'>About us</Link>
              <div className='relative flex flex-row space-x-6 align-middle cursor-pointer' onClick={toggleDropdown}>Service{isOpen ? (
              <div>
                <Image src='/arrow-down.png' width={25} height={25} alt=''/>
              </div>) : (
              <div>
                <Image src='/arrow-up.png' width={25} height={25} alt=''/>
              </div>) }
              </div>
            {isOpen && (
            <div className="absolute right-10 mt-2 top-12 w-48 bg-white rounded-lg shadow-xl z-10">
            <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-300">
              <Link href='/services/pharmaceuticals'>Pharmaceuticals</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-300">
              <Link href='/services/real-estate'>Real Estate</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-300">
              <Link href='/services/manufacturing'>Manufacturing</Link>
            </li>
          </ul>
            </div>)}
            <Link href='/contact-us'>Contact us</Link>
        </div>

        <button
            type="button"
            className="align-self-end justify-end text-primary-500 hover:text-primary-700 focus:outline-none sm:hidden block "
            onClick={openSidebar}
          >
            <FaBars className="w-8 h-8 " style={{ color: 'brown' }} />
          </button>

        <div className={`sidebar ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0  bg-white transition-transform z-10 w-screen h-full sm:hidden`}>
      
      <div className="sidebar-header flex justify-between items-center px-4 py-6">
              {/* <img src={logo} className='logo' alt='comfy sloth' /> */}
        <button className="close-btn text-red-dark text-2xl" type='button' onClick={closeSidebar}>
          <FaTimes style={{ color: 'brown' }} />
        </button>
      </div>
      <Link href='/' className=" mx-auto flex flex-row space-x-2 ">
              <Image
                src='/logo.png'
                alt='elite-bully-sticks-facebook'
                height={200}
                width={70}
                className='h-20 w-20 mx-auto'
              />
      </Link>
      <ul className="links mb-8 mx-auto">
        {/* {links.map(({ id, text, url }) => ( */}
          <li >
            <Link href='/' onClick={closeSidebar}><button className="block text-base capitalize px-6 py-4 text-gray-500 transition duration-300 hover:bg-grey-10 hover:text-grey-2">Home</button></Link>
          </li>
          <li >
            <Link href='/about-us' onClick={closeSidebar}><button className="block text-base capitalize px-6 py-4 text-gray-500 transition duration-300 hover:bg-grey-10 hover:text-grey-2">About Us</button></Link>
          </li>

          <li>
          <div className='flex flex-row space-x-6 align-middle cursor-pointer text-base capitalize  px-6 py-4 text-gray-500 transition duration-300 hover:bg-grey-10 hover:text-grey-2' onClick={toggleDropdown}>Service{isOpen ? (
              <div>
                <Image src='/arrow-down.png' width={25} height={25} alt=''/>
              </div>) : (
              <div>
                <Image src='/arrow-up.png' width={25} height={25} alt=''/>
              </div>) }
              </div>
            {isOpen && (
            <div className=" mt-2 w-48 bg-white  z-10">
            <ul className='flex flex-col space-y-3 mx-10'>
            <li className="px-4 py-2  cursor-pointer transition-colors duration-300">
              <Link href='/services/pharmaceuticals'>Pharmaceuticals</Link>
            </li>
            <li className="px-4 py-2  cursor-pointer transition-colors duration-300">
              <Link href='/services/real-estate'>Real Estate</Link>
            </li>
            <li className="px-4 py-2  cursor-pointer transition-colors duration-300">
              <Link href='/services/manufacturing'>Manufacturing</Link>
            </li>
          </ul>
            </div>)}
          </li>

          <li >
            <Link href='/contact-us' onClick={closeSidebar}><button className="block text-base capitalize px-6 py-4 text-gray-500 transition duration-300 hover:bg-grey-10 hover:text-grey-2">Contact Us</button></Link>
          </li>
        {/* ))} */}
      </ul>
    </div>

        {/* {if(viewport)} */}
    </div>
  )
}

export default Navbar
