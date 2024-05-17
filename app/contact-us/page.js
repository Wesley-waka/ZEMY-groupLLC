import Image from 'next/image'
import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <div className='flex sm:flex-row flex-col space-y-3 sm:space-y-0 sm:h-1/4 text-center sm:py-auto bg-rose-800 sm:justify-between'>
        <div className='text-white text-start mt-10 sm:mt-1/2 sm:my-auto sm:pl-14 px-3'>
        <h1 className='font-bold'>Contact Us</h1>
        <h4 className='font-light text-sm sm:w-10/12'>
        Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can reach us.
        </h4>
        </div>
        <Image src='/toll.jpg' height={1200} width={1200} className='sm:rounded-s-full sm:rounded-t-none rounded-t-full sm:h-96 h-52 sm:w-1/2 relative' alt='manufacturing-comp'/>
      </div>
      
      <div className='bg-gray-100'>
        <div className=' h-max flex sm:flex-row flex-col sm:space-x-8 sm:mx-40 sm:px-20 sm:py-8'>
            <div className=' flex flex-col sm:space-y-4 space-y-2 sm:w-2/6 mx-2 sm:mx-0'>
              <div className='bg-white flex py-4 px-2 space-x-4'>
                <div className='p-4 bg-gray-100 rounded-full'>
                  <IoCall className='text-burgundy' size={25}/>
                </div>
                <div className='text-sm flex-col space-y-1 justify-center'>
                  <div className='text-sm'>Phone Number</div>
                  <div className='text-sm'>0700704489</div>
                </div>
              </div>
              <div className='bg-white flex py-4 px-2 space-x-4'>
                <div className='p-4 bg-gray-100 rounded-full'>
                  <MdEmail className='text-burgundy' size={25}/>
                </div>
                <div className='text-sm flex flex-col space-y-1 justify-center'>
                  <div className='text-sm'>Email</div>
                  <div className='text-sm'>info@zemy-group.com</div>
                </div>
              </div>
              <div className='bg-white flex py-4 px-2 space-x-4 '>
                <div className='p-4 bg-gray-100 rounded-full'>
                  <FaLocationDot className='text-burgundy' size={25}/>
                </div>
                <div className='text-sm  flex-col space-y-1 justify-center'>
                  <div className='text-sm'>Location</div>
                  <div className='text-sm'>USA,NewYork</div>
                </div>
              </div>
             
            </div>
            <div className='bg-white sm:w-4/5 flex-col mx-2 p-2 my-2 sm:px-8 sm:py-10 rounded-md'>
              <div>
                <h2 className='text-3xl font-semibold'>Send Message</h2>
                <div className='text-sm font-light'>Interested about our products and services.Get in touch with our team to learn more about ZEMY LLC</div>
              </div>
              <form className='flex flex-col sm:space-y-6 space-y-4 my-2'>
                <div className='flex sm:flex-row sm:space-x-1 space-y-2 sm:space-y-0 flex-col'>
                  <input placeholder='First Name' className='border sm:w-1/2 rounded-lg px-2 py-2' />
                  <input placeholder='Last Name' className='border sm:w-1/2 rounded-lg px-2 py-2'/>
                </div>
                <div className='flex sm:flex-row sm:space-x-1 flex-col space-y-2 sm:space-y-0'>
                  <input placeholder='Email' className='border sm:w-1/2 rounded-lg px-2 py-2' />
                  <input placeholder='Phone Number' className='border sm:w-1/2 rounded-lg px-2 py-2'/>
                </div>
                <textarea name="message" id="message" placeholder="Message"
                    aria-required="true"
                    required cols={30} rows={5} className='p-2 w-full rounded-lg border '/>
                <button className='bg-blue-700 text-white rounded-md py-2 sm:w-60 w-full'>Send Message</button>
              </form>
            </div>
        </div>
      </div>


    </div>
  )
}

export default page
