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
        <div className="absolute inset-0 bg-lurgundy bg-opacity-50 h-screen">
              <div className="text-center  sm:mt-12 px-7 sm:">
                <p className="text-3xl sm:text-7xl text-cream font-extrabold sm:mb-24 sm:mr-96 absolute sm:left-10 sm:bottom-64 bottom-72 text-start leading-10 sm:w-2/3 tracking-wider">Bully Stick<br/> <span className='mt-4 border-b-2 pb-1  border-white'>Manufacturing</span></p>
                <p className=" text-cream sm:text-2xl text-lg tracking-wide text-start w-72 sm:w-1/2 sm:mb-24 sm:mr-96 absolute sm:left-10 sm:mt-8 font-extralight sm:bottom-16 bottom-12">At the forefront of our industry, we take pride in our commitment to enhancing the well-being of pets by offering conscientious, eco-friendly, and superior products</p>
              </div>
        </div>
      </div>

      <div className='bg-gray-100 '>
        <div className=' sm:w-2/5 text-center mx-auto sm:py-12 px-2 py-4'>
          <h2>ZEMY GROUP GLOBAL LIMITED</h2>
          <p className=' text-center font-light'>
          Nestled in the heart of Kenya, we take pride in being a leading manufacturer of premium bully sticks, dedicated to the happiness and health of your beloved pets. Our journey began with a simple mission: to provide dogs with the finest, all-natural treats while contributing positively to our local community and environment.
          </p>
        </div>
      </div>

    <div className='bg-white sm:py-6 py-3'>
      <div className=' '>
        <div className='sm:h-80 flex sm:flex-row flex-col justify-around sm:w-11/12  sm:px-8 px-2'>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
          <div className='sm:w-2/5 py-4'>
            <h2>Commitment to Quality</h2>
            <p className='font-light '>
            Quality is not just a standard; it&apos;s our promise. We meticulously source our ingredients, ensuring only the highest standards of safety and nutrition for your furry friends. Our bully sticks are crafted from the finest Kenyan beef, free from artificial additives, preservatives, or harmful chemicals.
            </p>
          </div>
        </div>
      </div>

      <div className=' '>
        <div className='sm:h-80 flex sm:flex-row flex-col-reverse justify-around sm:w-11/12 sm:space-x-11 sm:px-8 px-2'>
          <div className='sm:w-2/5 py-4'>
            <h2>Ethical and Sustainable Practices</h2>
            <p className='font-light '>
            As stewards of the environment, we are committed to sustainability at every step of our manufacturing process. Our bully sticks are responsibly sourced from local Kenyan farmers who adhere to ethical and humane farming practices. 
            </p>
          </div>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
        </div>
      </div>
      </div>

      <div className=' bg-blue-600 sm:py-8 sm:px-16 px-2 py-4'>
        <h1 className='text-center font-medium text-white'>Our Portfolio</h1>
        <div className='flex sm:flex-row flex-col space-y-2 sm:space-x-12'>
          <Image height={1200} width={560} src='/std.jpg' alt=''/>
          <p className='font-extralight  text-lg sm:w-2/5 text-white'>
          Beyond crafting exceptional products, we are dedicated to making a positive impact on the communities we serve. Through partnerships with local shelters and animal welfare organizations, we actively support initiatives that promote pet adoption, responsible pet ownership, and animal welfare education. 
          </p>
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
