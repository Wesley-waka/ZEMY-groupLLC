import Image from 'next/image'
import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <div className='flex h-1/4 text-center py-auto bg-rose-800 justify-between'>
        <div className='text-white text-start my-auto pl-14'>
        <h1 className='font-bold'>Contact Us</h1>
        <h4 className='font-light text-sm w-10/12'>
        is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
        </h4>
        </div>
        <Image src='/toll.jpg' height={1200} width={1200} className='rounded-s-full h-96 w-1/2 relative' alt='manufacturing-comp'/>
      </div>
      
      <div className='bg-gray-100'>
        <div className=' h-max flex  space-x-8 mx-40 px-20 py-8'>
            <div className=' flex flex-col space-y-4 w-2/6'>
              <div className='bg-white flex py-4 px-2 space-x-4'>
                <div className='p-4 bg-gray-100 rounded-full'>
                  <IoCall className='text-burgundy' size={25}/>
                </div>
                <div className='text-sm  flex-col space-y-1 justify-center'>
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
            <div className='bg-white w-4/5 flex-col px-8 py-10 rounded-md'>
              <div>
                <h2 className='text-3xl font-semibold'>Send Message</h2>
                <div className='text-sm font-light'> daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.</div>
              </div>
              <form className='flex flex-col space-y-6 my-2'>
                <div className='flex flex-row space-x-1 '>
                  <input placeholder='First Name' className='border w-1/2 rounded-lg px-2 py-2' />
                  <input placeholder='Last Name' className='border w-1/2 rounded-lg px-2 py-2'/>
                </div>
                <div className='flex flex-row space-x-1 '>
                  <input placeholder='Email' className='border w-1/2 rounded-lg px-2 py-2' />
                  <input placeholder='Phone Number' className='border w-1/2 rounded-lg px-2 py-2'/>
                </div>
                <textarea name="message" id="message" placeholder="Message"
                    aria-required="true"
                    required cols={30} rows={5} className='p-2 w-full rounded-lg border '/>
                <button className='bg-blue-500 text-white rounded-md py-2 w-60'>Send Message</button>
              </form>
            </div>
        </div>
      </div>


    </div>
  )
}

export default page
