import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-row space-x-6 mt-20 mx-14 py-10 align-middle justify-center'>
          <div className='w-7/12'>
            <h1 className='text-sm font-light text-burgundy'>ABOUT US</h1>
            <h2 className='text-4xl font-extrabold'>Creating <span className='relative underline-after'>value</span> for sustainable business practices</h2>
            <h2 className='text-base leading-7'>At ZEMY Group LLC we consider working with people for the best of their needs ensuring we deliver the right results to their benefits and financial homes.With over 200+ users and 12 companies delivering the right results to and fro the company.</h2>
          </div>
          <div className='w-10/12'>
            <Image width={1000} height={1000} alt='real-estate' src='/estate.jpg' className='h-full'/>
          </div>
      </div>

      <div className='bg-gray-100 px-32 py-5'>
        <div className='flex space-x-2  mx-auto pb-6 mt-10 '>
          <div className=''>
            <h2 className='text-4xl w-4/5 font-semibold text-burgundy'>Built for go-to-market teams, powered by AI</h2>
          </div>
          <div>
          <div className='flex flex-col space-y-1 font-normal'>
              <h2 className='text-lg'>We believe in the power of video to foster human connections and empower go-to-market professionals to deliver trusted and productive buyer experiences.</h2>
              <h2 className='text-lg'>We believe in the power of video to foster human connections and empower go-to-market professionals to deliver trusted and productive buyer experiences.</h2>
              <h2 className='text-lg'>We believe in the power of video to foster human connections and empower go-to-market professionals to deliver trusted and productive buyer experiences.</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className='mt-10 w-full'>
          <div className='flex flex-row space-x-6'>
            <div className='flex flex-col w-1/3 px-12'>
              <h2 className='font-semibold mx-auto'>300+</h2>
              <h2 className='text-sm font-light'>Since 2010, Vidyard has grown from a team of 2 to over 300.</h2>
            </div>
            <div className='flex flex-col w-1/3 px-12'>
              <h2 className='font-semibold block mx-auto'>300+</h2>
              <h2 className='text-sm font-light text-center block'>Since 2010, Vidyard has grown from a team of 2 to over 300.</h2>
            </div>
            <div className='flex flex-col w-1/3 px-12'>
              <h2 className='font-semibold mx-auto'>300+</h2>
              <h2 className='text-sm font-light'>Since 2010, Vidyard has grown from a team of 2 to over 300.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='my-10 mx-auto flex flex-col align-items-center justify-center'>
        <div className='flex flex-row space-x-7 w-3/4 mx-auto justify-around'>
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
            <h1 className='text-2xl font-extrabold'>Our Mission: Helping Millions of Organizations Grow Better</h1>
            <h2 className='text-base'>We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</h2>
          </div>
        </div>

        <div className='flex flex-row space-x-20 w-3/4 mx-auto justify-around mt-20'>
        <div className='align-middle my-auto'>
            <h1 className='text-2xl font-extrabold'>Our Story</h1>
            <h2 className='text-base'>We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!</h2>
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

      <div className='mx-auto bg-gray-100 py-10 my-10'>
        <h2 className='text-center text-3xl font-bold'>ZEMY By The Numbers</h2>
        
        <div className='flex flex-row space-x-20 mx-auto py-4 px-36'>
        <div className='flex flex-col justify-center p-12 bg-white rounded-md'>
          <Image
            src='/people1.svg'
            height={200}
            width={200}
            alt=''
          />
          <div className='text-2xl font-semibold'>
            12 global Offices
          </div>
        </div>

        <div className='flex flex-col justify-center p-12 bg-white rounded-md '>
          <Image
            src='/people2.svg'
            height={200}
            width={200}
            alt=''
          />
          <div className='text-2xl font-semibold'>
            12 global Offices
          </div>
        </div>

        <div className='flex flex-col justify-center p-12 bg-white rounded-md'>
          <Image
            src='/people3.svg'
            height={200}
            width={200}
            alt=''
          />
          <div className='text-2xl font-semibold'>
            12 global Offices
          </div>
        </div>

        </div>
      </div>

    </div>
  )
}

export default page
