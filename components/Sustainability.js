"use client"
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/UseCase.module.scss'
import { FaHandshake } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

const Sustainability = () => {
  return (
    <div>
      <div className=' ' >
          <h2 className="text-center text-2xl sm:text-3xl font-semibold sm:my-6">Sustainability & Social Responsibility</h2> 
          <div className=" py-6 w-full">

            <div className="flex md:flex-wrap md:flex-row flex-col space-y-4 md:space-y-2 lg:space-y-0 md:space-x-24  lg:space-x-24   mx-auto justify-center">
              <div className='w-56 mx-auto md:mx-0 text-center bg-gray-100 p-4 rounded-lg text-burgundy  border-red-200 border-t-4'>
                <FaHandshake className="mx-auto block" size={50} />
                <div className='mt-4'>
                  <h6>At ZEMY Group LLC actively supports community initiatives, fosters inclusive growth, and operates with the utmost integrity to make a meaningful difference in society.</h6>
                </div>
              </div>

              <div className='w-56 mx-auto md:mx-0 text-center bg-gray-100 p-4 rounded-lg text-burgundy  border-red-200 border-t-4'>
                <BsGraphUpArrow className="mx-auto block" size={50}/>
                <div className='mt-4'>
                  <h6>At ZEMY Group LLC. We meticulously measure our impact and continuously innovate to reduce our carbon footprint, championing a greener economy.</h6>
                </div>
              </div>


              <div className='w-56 mx-auto md:mx-0 text-center bg-gray-100 p-4 rounded-lg   text-burgundy border-red-200 border-t-4'>
                <GiGears className="mx-auto block" size={50}/>

                <div className='mt-4'>
                  <h6>Through strategic partnerships and collaborative efforts, ZEMY Group LLC is on a mission to catalyze sustainable development and empower communities,</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Sustainability
