"use client"
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/UseCase.module.scss'

const Sustainability = () => {
  return (
    <div>
      <div id={styles.section_use_cases}>
          <h2 className="text-3xl my-6 text-center">Sustainability and Social Responsibility</h2> 
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-row space-x-32 ">
              <div className='text-center bg-gray-100 p-4 rounded-lg text-green-900 half-border-bottom-left half-border-top-right border-red-200 border-t-4'>
                  <Image
                  src="/chat.svg"
                  alt="Icon image related to the use case"
                  height={75}
                  width={75}
                  className='mx-auto'
                />
                <div className='mt-4'>
                  <h6>Chat with a friend asynchronously</h6>
                </div>
              </div>

              <div className='text-center bg-gray-100 p-4 rounded-lg text-green-900 half-border-top-left half-border-bottom-right border-red-200 border-b-4'>
                  <Image
                  src="/chat.svg"
                  alt="Icon image related to the use case"
                  height={75}
                  width={75}
                  className='mx-auto'
                />
                <div className='mt-4'>
                  <h6>Chat with a friend asynchronously</h6>
                </div>
              </div>


              <div className='text-center bg-gray-100 p-4 rounded-lg  half-border-bottom-left half-border-top-right border-red-200 border-t-4'>
                  <Image
                  src="/chat.svg"
                  alt="Icon image related to the use case"
                  height={75}
                  width={75}
                  className='mx-auto'
                />
                <div className='mt-4'>
                  <h6>Chat with a friend asynchronously</h6>
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
