import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-col space-y-4 mt-14 mx-4 sm:flex-row sm:space-x-6 sm:mt-20 sm:mx-14 sm:pt-10 align-middle justify-center'>
          <div className='sm:w-7/12'>
            <h1 className='text-sm font-light text-burgundy'>ABOUT US</h1>
            <h2 className='text-2xl sm:text-4xl font-extrabold'>Creating <span className='relative underline-after'>value</span> for sustainable business practices</h2>
            <h2 className='text-base sm:leading-7 leading-6 sm:tracking-wider tracking-normal'>At ZEMY Group LLC we consider working with people for the best of their needs ensuring we deliver the right results to their benefits and financial homes.Under the ZEMY GROUP LLC umbrella, we nurture a diverse family of subsidiaries, each dedicated to excellence in their respective fields.</h2>
          </div>
          <div className='sm:w-8/12'>
            <Image width={1000} height={1000} alt='real-estate' src='/estate-1.jpg' className='h-72 sm:h-4/5 '/>
          </div>
      </div>

      <div className='bg-gray-100 sm:px-32 sm:py-5 px-4 py-3 my-3'>
        <div className='flex space-x-2 flex-col sm:flex-row mx-auto sm:pb-6 sm:mt-10 '>
          <div className=''>
            <h2 className='sm:text-4xl text-3xl sm:w-4/5  font-semibold text-burgundy'>Drive Innovation & Deliver Quality Products and Services</h2>
          </div>
          <div>
          <div className='flex flex-col sm:space-y-1 font-normal'>
              <h3 className='text-lg sm:tracking-wider'>Through our subsidiary companies, we expanded our reach into diverse industries, from furniture manufacturing to healthcare consulting, always guided by our commitment to excellence and sustainability.</h3>
              <h3 className='text-lg sm:tracking-wider'>As we grew, so did our impact. We became known not only for the quality of our products but also for our dedication to social responsibility and environmental conservation.</h3>
              <h3 className='text-lg sm:tracking-wider'>With a small team of dedicated individuals, our founder set out to build a company that would not only deliver high-quality products and services but also leave a positive impact on the world.</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className='sm:mt-10 mt-5 w-full'>
          <div className='flex sm:flex-row flex-col sm:space-x-6'>
            <div className='flex flex-col sm:w-1/3 px-12'>
              <h3 className='font-semibold mx-auto '>300+</h3>
              <h2 className='text-sm font-light text-center block'>ZEMY LLC has grown from a team of 2 to over 300.</h2>
            </div>
            <div className='flex flex-col sm:w-1/3 px-12'>
              <h3 className='font-semibold block mx-auto '>10</h3>
              <h2 className='text-sm font-light text-center block'>ZEMY LLC stands tall as a beacon of quality and excellence. with 10 subsidary companies</h2>
            </div>
            <div className='flex flex-col sm:w-1/3 px-12'>
              <h3 className='font-semibold mx-auto '>1000+</h3>
              <h2 className='text-sm font-light text-center block'>ZEMY LLC serves over 1000 consumers across various branches.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:my-10 sm:mx-auto mx-4 flex-col align-items-center justify-center'>
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
            <h3 className='text-xl sm:text-2xl font-extrabold text-blue-600'><span className='text-burgundy'>Our Mission:</span> Helping Millions Grow Better</h3>
            <h4 className='text-base sm:leading-7 leading-6 sm:tracking-wider tracking-normal'>is to pioneer innovative solutions across diverse industries while upholding a steadfast commitment to sustainability, excellence, and social responsibility. Through our subsidiaries and strategic partnerships, we strive to</h4>
          </div>
        </div>

        <div className='flex sm:flex-row flex-col-reverse sm:space-x-20 space-y-8 sm:w-3/4 mx-auto px-2 sm:justify-around sm:mt-20'>
        <div className='align-middle my-auto'>
            <h3 className='text-2xl font-extrabold text-burgundy'>Our Story</h3>
            <h4 className='text-base sm:leading-7 leading-6 sm:tracking-wider tracking-normal'>Driven by a deep-rooted belief in ethical business practices and environmental stewardship we bridge the gap between sustainable agriculture, pet wellness, healthcare, real estate, and beyond.</h4>
          </div>

          <div>
            <Image
              height={2000}
              width={1600}
              src='/prod-8.png'
              alt='house-rent'
              className='w-11/12 h-full'
            />
          </div>
          
        </div>
      </div>

      <div className='mx-auto bg-gray-100 sm:py-10 sm:my-10'>
        <h2 className='text-center sm:text-3xl text-2xl font-bold text-burgundy'>ZEMY By The Numbers</h2>
        
        <div className='flex flex-col sm:flex-row space-y-5 sm:space-x-28 sm:space-y-0 sm:mx-auto mx-10 py-8 sm:py-4 sm:px-36'>
        <div className='flex flex-col justify-center space-y-6 sm:p-7 p-4 bg-white rounded-md '>
          <Image
            src='/people1.svg'
            height={140}
            width={140}
            alt=''
            className='mx-auto'
          />
          <h3 className='text-2xl font-semibold'>
            12 global Offices
          </h3>
        </div>

        <div className='flex flex-col justify-center space-y-6 sm:p-7 p-4 bg-white rounded-md '>
          <Image
            src='/people2.svg'
            height={140}
            width={140}
            alt=''
            className='mx-auto'
          />
          <h3 className='text-2xl font-semibold'>
            7,600+ Employees
          </h3>
        </div>

        <div className='flex flex-col justify-center space-y-6 sm:p-7 p-4 bg-white rounded-md '>
          <Image
            src='/people3.svg'
            height={140}
            width={140}
            alt=''
            className='mx-auto'
          />
          <h3 className='text-2xl font-semibold'>
            20,000+ Customers
          </h3>
        </div>

        </div>
      </div>

    <div className="sm:w-3/4 flex sm:flex-row flex-col-reverse sm:space-x-0 my-5 mx-2 sm:mx-auto sm:my-8">
    <div className=" bg-burgundy text-white ">
      <div className="sm:p-28 p-5">
        <h3 className="sm:text-3xl text-xl font-extralight mb-6">Interested about Our Products & Services</h3>
        <Link href='/contact-us' className="mt-6 py-2 px-12 bg-blue-600 rounded-full hover:text-burgundy hover:border-blue-600 hover:bg-white hover:transition-all">Contact Us</Link>
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
