import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className=''>
        {/* <div className='relative'> */}
          <Image src='/std.jpg' height={1000} width={1000} className='h-screen w-full relative' alt='manufacturing-comp'/>
        {/* </div> */}
        <div className="absolute inset-0 bg-lurgundy bg-opacity-50 h-full left-0">
              <div className="text-center bottom-72 sm:mt-44 mt-12 ">
                <p className="text-3xl sm:text-6xl text-cream font-bold sm:mb-24">MANUFACTURING</p>
              </div>
        </div>
      </div>

      <div className=' w-2/5 text-center mx-auto my-12'>
        <h2>ZEMY GROUP GLOBAL LIMITED</h2>
        <p className=' text-center font-light'>
        is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
        is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
        </p>
      </div>

      <div className=' bg-rose-800 py-8 px-12 '>
        <h1 className='text-center font-medium text-white'>Our Portfolio</h1>
        <div className='flex flex-row  space-x-5'>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
          <p className='font-extralight text-white text-lg w-3/6'>
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
          </p>
        </div>
      </div>
      
      <div className='bg-blue-500 py-6 text-white'>
      <div className=' '>
        <div className='h-80 flex flex-row justify-around w-11/12  px-8'>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
          <div className='w-2/5 py-4'>
            <h2>ZEMY GROUP GLOBAL LIMITED</h2>
            <p className='font-light text-white'>
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            </p>
          </div>
        </div>
      </div>

      <div className=' '>
        <div className='h-80 flex flex-row justify-around w-11/12 space-x-11 px-8'>
          <div className='w-2/5 py-4'>
            <h2>ZEMY GROUP GLOBAL LIMITED</h2>
            <p className='font-light text-white'>
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            </p>
          </div>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
        </div>
      </div>
      </div>

      
      
      
    </div>
  )
}

export default page
