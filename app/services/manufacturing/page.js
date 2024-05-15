import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className=''>
        {/* <div className='relative'> */}
          <Image src='/std.jpg' height={1000} width={1000} className='h-screen w-full relative' alt='manufacturing-comp'/>
        {/* </div> */}
        <div className="absolute inset-0 bg-lurgundy bg-opacity-50 h-full ">
              <div className="text-center  mt-12 ">
                <p className="text-2xl sm:text-7xl text-cream font-extrabold sm:mb-24 mr-96 absolute left-10 bottom-64 text-start leading-10 w-2/3 tracking-wider">Manufacturer of <br/> <span className='mt-4 border-b-2 pb-1  border-white'>Bully Stick</span></p>
                <p className=" text-cream text-2xl tracking-wide text-start w-1/3 sm:mb-24 mr-96 absolute left-10 mt-8 font-light bottom-8">Our focus and responsibility as an industry leading manufacturer of pharmaceuticals are to improve the lives of the people by providing them with ethical, sustainable and better treatments.</p>
              </div>
        </div>
      </div>

      <div className='bg-gray-100'>
        <div className=' w-2/5 text-center mx-auto py-12'>
          <h2>ZEMY GROUP GLOBAL LIMITED</h2>
          <p className=' text-center font-light'>
          is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
          is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
          </p>
        </div>
      </div>

    <div className='bg-white py-6'>
      <div className=' '>
        <div className='h-80 flex flex-row justify-around w-11/12  px-8'>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
          <div className='w-2/5 py-4'>
            <h2>ZEMY GROUP GLOBAL LIMITED</h2>
            <p className='font-light '>
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
            <p className='font-light '>
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            </p>
          </div>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
        </div>
      </div>
      </div>

      <div className=' bg-blue-600 py-8 px-16 '>
        <h1 className='text-center font-medium text-white'>Our Portfolio</h1>
        <div className='flex flex-row  space-x-12'>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
          <p className='font-extralight  text-lg w-2/5 text-white'>
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
          </p>
        </div>
      </div>
      


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
      
      
    </div>
  )
}

export default page
