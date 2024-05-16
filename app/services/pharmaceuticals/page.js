import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaBedPulse } from "react-icons/fa6";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import { FaTruckMedical } from "react-icons/fa6";

const page = () => {
  return (
    <div>
        <div>
            <Image src='/pharm-1.jpg' alt='pharmaceuticals' height={1200} width={1200} className='w-full sm:h-full h-64 relative'/>
            <div className='absolute inset-0 bg-rose-900 sm:bg-inherit  sm:text-burgundy bg-opacity-60 h-64 sm:top-24 sm:w-6/12 sm:px-8 top-0 py-12 px-2'>
                <h1 className='sm:font-semibold font-bold text-white sm:text-inherit sm:text-3xl text-3xl'>MEDLINK LLC</h1>
                <h4 className='font-light text-base sm:tracking-wide tracking-normal text-white sm:text-gray-900'>Medlink World LLC is a healthcare and CRO consulting firm which champions itself in clinical data generation for medical devices that needs FDA registration. It also has vast distributorship network to distribute medical devices approved by FDA.</h4>
            </div>
        </div>

        <div className='flex sm:flex-row flex-col align-middle justify-center'>
            <Image src='/doctor.png' width={600} height={600} alt='doctor'/>
            <div className='sm:my-auto sm:mx-20 mx-3'>
                <h2 className='font-semibold text-burgundy text-3xl'>Complete Medical Solutions in One Place</h2>
                <div className='text-lg'>In the realm of healthcare and Clinical Research Organization (CRO) consulting. Their forte lies in facilitating the intricate process of clinical data generation, particularly for medical devices seeking FDA registration. What sets them apart is their expansive distributorship network, ensuring that FDA-approved medical devices reach the hands of those who need them most.</div>
            </div>
        </div>

        <div className=' bg-gray-100 text-center py-5'>
            <h1 className='text-3xl font-semibold text-burgundy'>Total Health Care Solutions</h1>
            <h5 className='sm:w-3/4  mx-auto font-normal'>MedLink simplifies medical processes, but it also holds the potential to improve the patient experience significantly.</h5>
            <div className='flex sm:flex-row flex-col sm:my-10 my-4 sm:space-x-16 space-y-3 sm:mx-14 mx-2'>
                <div className='sm:w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6 mx-5'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaBedPulse className='text-blue-700' size={35}/>
                    </div>
                    <div className='text-2xl font-semibold text-blue-700'>FDA Certified</div>
                    <div className='text-sm font-light'>FDA approval is the standard for medical device safety at Medlink World LLC, we specialize in shepherding products through this rigorous process</div>
                </div>

                <div className='sm:w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6 mx-5'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaHandHoldingDroplet className='text-blue-700' size={30}/>
                    </div>
                    <div className='text-2xl font-semibold text-blue-700'>Study Planning</div>
                    <div className='text-sm font-light'>Acknowledging the industry&apos;s persistent struggle with delays, they offer six key services aimed at expediting clinical study start-up and completion on a global scale.</div>
                </div>

                <div className='sm:w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6 mx-5'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaHeartPulse className='text-blue-700 ' size={30}/>
                    </div>
                    <div className='text-2xl font-semibold text-blue-700'>Patient Engagement</div>
                    <div className='text-sm font-light'>We Recognize the challenges posed by enrollment targets and data quality, they offer end-to-end patient engagement services.</div>
                </div>

                <div className='sm:w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6 mx-5'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaTruckMedical className='text-blue-700' size={30}/>
                    </div>
                    <div className='text-2xl font-semibold text-blue-700'>Site Optimization</div>
                    <div className='text-sm font-light'>From meticulous study and site planning to rapid initiation and thorough site coverage analysis, their strategies not only accelerate timelines but also enhance study quality</div>
                </div>
            </div>
        </div>

        <div className='flex sm:flex-row flex-col-reverse align-middle justify-center sm:mx-16 sm:py-5'>

        <div className='sm:w-3/4 px-2'>
            <h2 className='text-2xl font-bold text-burgundy'>Facility with Innovative Approach to Treatment</h2>
            <div className='text-lg'>Medlink World LLC stands as a stalwart in the realm of healthcare and Clinical Research Organization (CRO) consulting. </div>
            <h2 className='text-2xl font-bold text-burgundy mt-4'>Highest Quality Services</h2>
            <p>
            <span style={{color: 'rgb(29, 62, 104)'}}>》</span>Expansive distributorship network, ensuring that FDA-approved medical devices reach the hands of those who need them most.<br/><br/>
<span style={{color: 'rgb(29, 62, 104)'}}>》</span>From study and site planning to fast initiation and comprehensive site coverage analysis, their strategies not only expedite timelines but also enhance study quality<br/><br/>
<span style={{color: 'rgb(29, 62, 104)'}}>》</span> With a keen understanding of the challenges posed by enrollment targets and data quality, they offer end-to-end patient engagement services.<br/><br/>
{/* <span style={{color: 'rgb(29, 62, 104)'}}>》</span>From trial design and protocol planning to endpoint adjudication and pharmacovigilance, their expertise mitigates risks and fosters data integrity. */}

            </p>
        </div>

        <Image src='/doc-2.png' alt='doctor' height={1000} width={1000} className='sm:w-1/2 '/>
        
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