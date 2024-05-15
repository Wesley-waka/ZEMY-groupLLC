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
            <Image src='/pharm-1.jpg' alt='pharmaceuticals' height={1200} width={1200} className='w-full relative'/>
            <div className='absolute top-24 w-6/12 px-8'>
                <h1 className='font-semibold text-burgundy'>Pharmaceuticals</h1>
                <h4 className='font-light text-lg'>is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.</h4>
            </div>
        </div>

        <div className='flex flex-row align-middle justify-center'>
            <Image src='/doctor.png' width={600} height={600} alt='doctor'/>
            <div className='my-auto mx-20'>
                <h2 className='font-semibold text-burgundy text-3xl'>Complete Medical Solutions in One Place</h2>
                <div className='text-lg'>A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, a valued partner in the community, and creators of positive change.</div>
            </div>
        </div>

        <div className=' bg-gray-100 text-center py-5'>
            <h1 className='text-3xl font-semibold text-burgundy'>Total Health Care Solutions</h1>
            <h5 className='w-3/4 mx-auto font-normal'>Newlife Hospital App simplifies medical processes, but it also holds the potential to improve the patient experience significantly.</h5>
            <div className='flex flex-row my-10 space-x-16 mx-14'>
                <div className='w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaBedPulse className='text-blue-600' size={35}/>
                    </div>
                    <div className='text-2xl font-semibold '>Phone Call</div>
                    <div className='text-sm font-light'>Schedule an appointment with the best Pediatrician doctors, specialized in Pediatrics, New Born, Natural Breast Feeding and many more.</div>
                </div>

                <div className='w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaHandHoldingDroplet className='text-blue-600' size={30}/>
                    </div>
                    <div className='text-2xl font-semibold '>Phone Call</div>
                    <div className='text-sm font-light'>Schedule an appointment with the best Pediatrician doctors, specialized in Pediatrics, New Born, Natural Breast Feeding and many more.</div>
                </div>

                <div className='w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaHeartPulse className='text-blue-600' size={30}/>
                    </div>
                    <div className='text-2xl font-semibold '>Phone Call</div>
                    <div className='text-sm font-light'>Schedule an appointment with the best Pediatrician doctors, specialized in Pediatrics, New Born, Natural Breast Feeding and many more.</div>
                </div>

                <div className='w-1/5 flex flex-col space-y-2 justify-center align-middle bg-white p-6'>
                    <div className='bg-gray-100 p-5 rounded-full w-16 mx-auto'>
                        <FaTruckMedical className='text-blue-600' size={30}/>
                    </div>
                    <div className='text-2xl font-semibold '>Phone Call</div>
                    <div className='text-sm font-light'>Schedule an appointment with the best Pediatrician doctors, specialized in Pediatrics, New Born, Natural Breast Feeding and many more.</div>
                </div>
            </div>
        </div>

        <div className='flex flex-row align-middle justify-center mx-16 py-5'>

        <div className='w-3/4'>
            <h2 className='text-2xl font-bold text-burgundy'>Facility with Innovative Approach to Treatment</h2>
            <div className='text-lg'>NewLife Hospital App simplifies medical processes, but it also holds the potential to improve the patient experience significantly. </div>
            <h2 className='text-2xl font-bold text-burgundy mt-4'>Highest Quality Care</h2>
            <p>
            <span style={{color: 'rgb(29, 62, 104)'}}>》</span> Patients have the opportunity to book appointments with a practitioner of their choice<br/>
<span style={{color: 'rgb(29, 62, 104)'}}>》</span> E-commerce platform that provides basic medical supplies<br/>
<span style={{color: 'rgb(29, 62, 104)'}}>》</span> E-commerce platform that provides basic medical supplies<br/>
<span style={{color: 'rgb(29, 62, 104)'}}>》</span> We guarantee patient confidentiality by keeping all records private

            </p>
        </div>

        <Image src='/doc-2.png' alt='doctor' height={1000} width={1000} className='w-1/2'/>
        
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