'use client'
import React from 'react'
import { FiFacebook,FiMapPin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <footer className='sm:h-72 h-full '>
    <div className='h-full bg-burgundy  text-white py-4 px-6 sm:py-8 sm:pl-52 '>
    <div className='flex flex-col space-x-0 sm:flex-row sm:space-x-40 space-y-4 sm:space-y-0'>
      {/* <div className='flex mx-auto mt-2'>
        <h5 className='hover:cursor-pointer' onClick={() => document.getElementById('about_us').scrollIntoView({ behavior: 'smooth' })}>About Us</h5> <span>|</span>
        <h5 className='hover:cursor-pointer'  onClick={() => document.getElementById('news').scrollIntoView({ behavior: 'smooth' })}>News</h5> <span>|</span>
        <h5 className='hover:cursor-pointer'  onClick={() => document.getElementById('contact_us').scrollIntoView({ behavior: 'smooth' })}>Contact</h5>
      </div> */}
      <div className='flex flex-col space-y-2'>
        <div>
          <Image
            height={100}
            width={100}
            src='/logo.png'
            alt=''
          />
        </div>
        <div className='flex space-x-2'>
          <FiFacebook size={25}/>
          <IoLogoInstagram size={25}/>
          <FaXTwitter size={25}/>
        </div>
      </div>

      <div className='flex flex-col space-y-3'>
        <div className='text-3xl font-extrabold'>Navigation</div>
        <Link href='/'>Home</Link>
        <Link href='/service/pharmaceuticals'>Pharmaceuticals</Link>
        <Link href='/service/manufacturing'>Manufacturing</Link>
        <Link href='/service/real-estate'>Real Estate</Link>
        <Link href='/about-us'>About Us</Link>
        <Link href='/contact-us'>Contact Us</Link>
      </div>

      <div className='flex flex-col space-y-3'>
        <div className='text-3xl font-extrabold'>Get in touch</div>
        <div className='flex flex-row space-x-3'>
          <FiMapPin size={20}/>
          <div>147 W 35th St,New York,NY 10001</div>
        </div>
        <div className='flex flex-row space-x-3'>
          <IoCallOutline size={20}/>
          <div>+1(917) 6094-597</div>
        </div>
        <div className='flex flex-row space-x-3'>
          <CiMail size={20}/>
          <div>info@zemy-group.com</div>
        </div>

      </div>
    </div>

  </div>
    <h2 className='text-sm text-center py-3 w-full bg-white text-burgundy'>Copyright © {current_year}, Zemy Group  LLC. All Rights Reserved.</h2>
  </footer>
  )
}

export default Footer
