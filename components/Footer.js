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
    <div>
    <div className="w-3/4 flex flex-row space-x-0 mx-auto my-8">
    <div className=" bg-burgundy text-white ">
      <div className="p-28">
        <h3 className="text-3xl font-extralight mb-6">Interested about Our Products & Services</h3>
        <Link href='/contact-Us' className="mt-6 py-2 px-12 bg-blue-600 rounded-full hover:text-burgundy hover:border-blue-600 hover:bg-white hover:transition-all">Contact Us</Link>
      </div>
    </div>
    {/* <div> */}
      <Image
        src='/contact.jpg'
        alt='bull-stick'
        width={400}
        height={600}
      />
    {/* </div> */}
  </div>
    <footer className='h-72 '>
    <div className='h-full bg-burgundy  text-white py-8 pl-52'>
    <div className='flex flex-col sm:flex-row space-x-40'>
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
        <Link href='#'>Home</Link>
        <Link href='#'>Services</Link>
        <Link href='#'>News</Link>
        <Link href='#'>About Us</Link>
        <Link href='#'>Contact Us</Link>
      </div>

      <div className='flex flex-col space-y-3'>
        <div className='text-3xl font-extrabold'>Get in touch</div>
        <div className='flex flex-row space-x-3'>
          <FiMapPin size={20}/>
          <div>Nairobi,Kenya</div>
        </div>
        <div className='flex flex-row space-x-3'>
          <IoCallOutline size={20}/>
          <div>+1 (917)-06990</div>
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
  </div>
  )
}

export default Footer
