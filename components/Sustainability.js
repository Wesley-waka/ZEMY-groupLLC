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
      <div className='mx-auto' >
          <h2 className="text-3xl my-6 text-center">Sustainability and Social Responsibility</h2> 
          <div className=" py-6 mx-auto ">

            <div className="flex md:flex-wrap md:flex-row flex-col space-x-24 md:ml-36 justify-center">
              <div className='w-72 text-center bg-gray-100 p-4 rounded-lg text-burgundy  border-red-200 border-t-4'>
                <FaHandshake className="mx-auto block" size={50} />
                <div className='mt-4'>
                  <h6>At ZEMY Group LLC actively supports community initiatives, fosters inclusive growth, and operates with the utmost integrity to make a meaningful difference in society.</h6>
                </div>
              </div>

              <div className='w-72 text-center bg-gray-100 p-4 rounded-lg text-burgundy  border-red-200 border-t-4'>
                <BsGraphUpArrow className="mx-auto block" size={50}/>
                <div className='mt-4'>
                  <h6>At ZEMY Group LLC. We meticulously measure our impact and continuously innovate to reduce our carbon footprint, championing a greener economy.</h6>
                </div>
              </div>


              <div className='w-72 text-center bg-gray-100 p-4 rounded-lg   text-burgundy border-red-200 border-t-4'>
                <GiGears className="mx-auto block" size={50}/>

                <div className='mt-4'>
                  <h6>Through strategic partnerships and collaborative efforts, ZEMY Group LLC is on a mission to catalyze sustainable development and empower communities,</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
        <style jsx>{`
            .half-border-top-right::after {
                content: '';
                position: absolute;
                bottom: 50%; /* start at 25% from the top to get a 50% height border */
                right: 0;
                width: 4px; /* same width as border-r-4 */
                height: 50%;
                background-color: #fecaca; /* same as Tailwind's border-red-200 */
                border-radius: 20px; /* Adjust as needed for border-radius */
            }

            .half-border-bottom-right::after {
                content: '';
                position: absolute;
                top: 50%; /* start at 25% from the top to get a 50% height border */
                right: 0;
                width: 4px; /* same width as border-r-4 */
                height: 50%;
                background-color: #fecaca; /* same as Tailwind's border-red-200 */
                border-radius: 20px; /* Adjust as needed for border-radius */
            }

            .half-border-bottom-left::before {
                content: '';
                position: absolute;
                bottom: 50%; /* start at 25% from the top to get a 50% height border */
                left: 0;
                width: 4px; /* same width as border-r-4 */
                height: 50%;
                background-color: #fecaca; /* same as Tailwind's border-red-200 */
                border-radius: 20px; /* Adjust as needed for border-radius */
            }

            .half-border-top-left::before {
                content: '';
                position: absolute;
                top: 50%; /* start at 25% from the top to get a 50% height border */
                left: 0;
                width: 4px; /* same width as border-r-4 */
                height: 50%;
                background-color: #fecaca; /* same as Tailwind's border-red-200 */
                border-radius: 20px; /* Adjust as needed for border-radius */
            }
            
            
            .half-border-top-right {
                position: relative; /* needed for absolute positioning of the pseudo-element */
            }

            .half-border-bottom-right {
                position: relative; /* needed for absolute positioning of the pseudo-element */
            }

            .half-border-top-left {
                position: relative; /* needed for absolute positioning of the pseudo-element */
            }

            .half-border-bottom-left {
                position: relative; /* needed for absolute positioning of the pseudo-element */
            }
            
            `}</style>
    </div>
  )
}

export default Sustainability
