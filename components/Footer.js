'use client'
import React from 'react'

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <footer>
    <div className='h-full bg-burgundy text-center text-white '>
    <div className='flex flex-col space-y-2'>
      <div className='flex mx-auto mt-2'>
        <h5 className='hover:cursor-pointer' onClick={() => document.getElementById('about_us').scrollIntoView({ behavior: 'smooth' })}>About Us</h5> <span>|</span>
        <h5 className='hover:cursor-pointer'  onClick={() => document.getElementById('news').scrollIntoView({ behavior: 'smooth' })}>News</h5> <span>|</span>
        <h5 className='hover:cursor-pointer'  onClick={() => document.getElementById('contact_us').scrollIntoView({ behavior: 'smooth' })}>Contact</h5>
      </div>
      <h6>Copyright © {current_year}, Zemy Group  LLC. All Rights Reserved.</h6>



    </div>

  </div>
  </footer>
  )
}

export default Footer
