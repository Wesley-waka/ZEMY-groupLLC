import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdAlternateEmail } from 'react-icons/md'
import Image from 'next/image';

const ContactUs = () => {

  return (
    <div className="md:px-10 my-4">
    <h2 className="text-center text-2xl sm:text-3xl font-semibold">Contact Us</h2>
    <div className='flex flex-col-reverse md:flex-row md:space-x-36 space-x-0 md:w-3/4 w-full mx-auto'>
      <div className='md:w-3/5 w-full px-3 md:px-0 mx-auto'>
        <h2 className="text-3xl my-6 text-center text-burgundy font-bold">Let&apos;s Talk</h2>
        <h2 className='text-base  text-start'>We love your feedback,suggestion and review.We always listen</h2>
        <form className='md:mt-10 flex flex-col space-y-7'            
          method="POST"
          action="https://formspree.io/f/mayrjoke"
          >
          <div className='flex flex-col space-y-3'>
            <label>What&apos;s your Name?</label>
            <input name="name"
                              id="name"
                              placeholder="Name"
                              aria-required="true"
                              required className='border-gray-400 p-2 rounded-lg focus:ring focus:ring-burgundy' style={{
            borderWidth: '1px'
          }}/>
          </div>
          
          <div className='flex flex-col space-y-3'>
            <label>What email Address can we reach you at?</label>
            <input  name="email"
                          id="email"
                          placeholder="Email"
                          aria-required="true"
                          required type="email"  className='border-gray-400 p-2 rounded-lg focus:ring focus:ring-burgundy' style={{
            borderWidth: '1px'
          }}/>
          </div>

          <div className='flex flex-col space-y-3'>
            <label>What phone Number can we reach you at?</label>
            <input name="phone_number"
                          id="phone_number"
                          placeholder="Phone Number"
                          aria-required="true"
                          required className='border-gray-400 p-2 rounded-lg focus:ring focus:ring-burgundy' style={{
            borderWidth: '1px'
          }}/>
          </div>

          <div className='flex flex-col space-y-3'>
            <label>What would you like to know from us?Write us a message</label>

            <textarea name="message" id="message" placeholder="Message"
                          aria-required="true"
                          required cols={30} rows={5} style={{borderWidth: '0.75px'}} className='p-2 w-full rounded-lg border-2 border-gray-400 focus:ring focus:ring-burgundy '/>
          </div>

          <button className='bg-burgundy md:w-48 w-full p-3 text-white rounded-lg border-slate-400  hover:bg-white hover:text-burgundy hover:border-burgundy hover:transition-all' style={{
            borderWidth: '1px'
          }}>Send Message</button>
          
        </form>
      </div>
      <div className='md:w-2/3 w-full md:my-28 px-3 md:px-0 text-burgundy flex flex-col space-y-8'>
        <Image alt="Contact us" src='/news.svg'  width={400} height={400}/>
          <div>
            <div className='flex flex-row space-x-2 align-middle my-4'>
              <FaLocationDot size={20}/>
              <h6>NYC</h6>
            </div>
            <div className='flex flex-row space-x-2 align-middle my-4'>
              <MdAlternateEmail size={20}/>
              <h6>info@zemy-group.com</h6>
            </div>
            <div className='flex flex-row space-x-2 align-middle my-4'>
              <IoCall size={20}/>
              <h6>+1 (917) 609-4597</h6>
            </div>
          </div>
      </div>
    </div>
      
    </div>
  )
}

export default ContactUs
