'use client'
import Link from 'next/link'
import React from 'react'


const ManufactureButton = () => {
  return (
    <a href='https://www.elitetreatforpets.com' 
    target="_blank" 
    rel="noopener noreferrer">
      <button  className='rounded-full py-1 sm:px-6  border-2 bg-burgundy hover:bg-white hover:text-amber-800 hover:border-amber-800 transition-all text-white stroke-slate-200 stroke-1 text-lg sm:w-52 w-full' style={{fontFamily: "poppins"}}>
        See More
      </button>
    </a>
  )
}



export default ManufactureButton
