import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-col space-y-4 mt-14 px-2 sm:flex-row sm:space-x-6 sm:mt-20 sm:mx-14 sm:py-10 align-middle justify-center'>
          <div className='sm:w-7/12'>
            <h1 className='text-sm font-light text-burgundy'>ABOUT US</h1>
            <h2 className='text-4xl font-extrabold'>Creating <span className='relative underline-after'>value</span> for sustainable business practices</h2>
            <h2 className='text-base leading-7'>At ZEMY Group LLC we consider working with people for the best of their needs ensuring we deliver the right results to their benefits and financial homes.Under the ZEMY GROUP LLC umbrella, we nurture a diverse family of subsidiaries, each dedicated to excellence in their respective fields.</h2>
          </div>
          <div className='sm:w-10/12'>
            <Image width={1000} height={1000} alt='real-estate' src='/estate-1.jpg' className='h-72 sm:h-full '/>
          </div>
      </div>

      <div className='bg-gray-100 sm:px-32 sm:py-5 px-2 py-3 my-3'>
        <div className='flex space-x-2 flex-col sm:flex-row mx-auto sm:pb-6 sm:mt-10 '>
          <div className=''>
            <h2 className='sm:text-4xl text-3xl sm:w-4/5  font-semibold text-burgundy'>Built for go-to-market teams, powered by AI</h2>
          </div>
          <div>
          <div className='flex flex-col space-y-1 font-normal'>
              <h2 className='text-lg'>Through our subsidiary companies, we expanded our reach into diverse industries, from furniture manufacturing to healthcare consulting, always guided by our commitment to excellence and sustainability.</h2>
              <h2 className='text-lg'>As we grew, so did our impact. We became known not only for the quality of our products but also for our dedication to social responsibility and environmental conservation.</h2>
              <h2 className='text-lg'>With a small team of dedicated individuals, our founder set out to build a company that would not only deliver high-quality products and services but also leave a positive impact on the world.</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className='sm:mt-10 mt-5 w-full'>
          <div className='flex sm:flex-row flex-col sm:space-x-6'>
            <div className='flex flex-col sm:w-1/3 px-12'>
              <h2 className='font-semibold mx-auto '>300+</h2>
              <h2 className='text-sm font-light text-center block'>ZEMY LLC has grown from a team of 2 to over 300.</h2>
            </div>
            <div className='flex flex-col sm:w-1/3 px-12'>
              <h2 className='font-semibold block mx-auto '>10</h2>
              <h2 className='text-sm font-light text-center block'>ZEMY LLC stands tall as a beacon of quality and excellence. with 10 subsidary companies</h2>
            </div>
            <div className='flex flex-col sm:w-1/3 px-12'>
              <h2 className='font-semibold mx-auto '>300+</h2>
              <h2 className='text-sm font-light text-center block'>ZEMY LLC serves over 1000 consumers across various branches.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:my-10 mx-auto flex-col align-items-center justify-center'>
        <div className='flex flex-col sm:flex-row sm:space-x-7 px-2 sm:w-3/4 mx-auto justify-around'>
          <div>
            <Image
              height={2400}
              width={2000}
              src='/lucas.jpg'
              alt='house-rent'
              className='w-11/12 h-full'
            />
          </div>
          <div className='align-middle my-auto'>
            <h1 className='text-2xl font-extrabold'>Our Mission: Helping Millions Grow Better</h1>
            <h2 className='text-base'>is to pioneer innovative solutions across diverse industries while upholding a steadfast commitment to sustainability, excellence, and social responsibility. Through our subsidiaries and strategic partnerships, we strive to</h2>
          </div>
        </div>

        <div className='flex sm:flex-row flex-col-reverse sm:space-x-20 space-y-8 sm:w-3/4 mx-auto px-2 sm:justify-around sm:mt-20'>
        <div className='align-middle my-auto'>
            <h1 className='text-2xl font-extrabold'>Our Story</h1>
            <h2 className='text-base'>Driven by a deep-rooted belief in ethical business practices and environmental stewardship we bridge the gap between sustainable agriculture, pet wellness, healthcare, real estate, and beyond.</h2>
          </div>

          <div>
            <Image
              height={2000}
              width={1600}
              src='/lucas.jpg'
              alt='house-rent'
              className='w-11/12 h-full'
            />
          </div>
          
        </div>
      </div>

      <div className='mx-auto bg-gray-100 sm:py-10 sm:my-10'>
        <h2 className='text-center text-3xl font-bold'>ZEMY By The Numbers</h2>
        
        <div className='flex flex-col sm:flex-row space-y-5 sm:space-x-28 sm:space-y-0 sm:mx-auto mx-10 py-8 sm:py-4 sm:px-36'>
        <div className='flex flex-col justify-center space-y-6 sm:p-7 p-4 bg-white rounded-md '>
          <Image
            src='/people1.svg'
            height={140}
            width={140}
            alt=''
            className='mx-auto'
          />
          <div className='text-2xl font-semibold'>
            12 global Offices
          </div>
        </div>

        <div className='flex flex-col justify-center space-y-6 sm:p-7 p-4 bg-white rounded-md '>
          <Image
            src='/people2.svg'
            height={140}
            width={140}
            alt=''
            className='mx-auto'
          />
          <div className='text-2xl font-semibold'>
            7,600+ Employees
          </div>
        </div>

        <div className='flex flex-col justify-center space-y-6 sm:p-7 p-4 bg-white rounded-md '>
          <Image
            src='/people3.svg'
            height={140}
            width={140}
            alt=''
            className='mx-auto'
          />
          <div className='text-2xl font-semibold'>
            20,000+ Customers
          </div>
        </div>

        </div>
      </div>

    <div className="sm:w-3/4 flex sm:flex-row flex-col-reverse sm:space-x-0 my-5 mx-2 sm:mx-auto sm:my-8">
    <div className=" bg-burgundy text-white ">
      <div className="sm:p-28 p-5">
        <h3 className="sm:text-3xl text-xl font-extralight mb-6">Interested about Our Products & Services</h3>
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
