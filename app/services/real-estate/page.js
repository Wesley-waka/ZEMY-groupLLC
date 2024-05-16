import Image from 'next/image'
import React from 'react'
import { MdRealEstateAgent } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
// import {useEffect, useState, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
// import "mapbox-gl/dist/mapbox-gl.css";
// import { environment } from '../../../Environments/EnvDev';
// import '../../../App.css';
import { FaCar } from 'react-icons/fa6';
import Link from 'next/link';

// mapboxgl.accessToken = environment.mapbox.accessToken;

// const MapboxComponent = () => {
//   const mapContainerRef = useRef(null);
//   const map = useRef(null);

//   const [lng] = useState(-97.7431);
//   const [lat] = useState(30.2672);
//   const [zoom] = useState(2);

//   // Initialize map when component mounts
//   useEffect(() => {
//     map.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

// // Create a marker with a custom icon
// const marker = new mapboxgl.Marker({
//     element: document.getElementById("custom-marker"),
//   })
//     .setLngLat([88.3639, 22.5726]) // longitude and latitude
//     .addTo(map)
//     .setPopup(
//       new mapboxgl.Popup({ closeButton: true }).setHTML(
//         `
//       <div class="location-details">
//         <span><strong>City:</strong> Kolkata</span><br>
//         <span><strong>State:</strong> West Bengal</span><br>
//         <span><strong>Country:</strong> INDIA</span></div>
//       </div>
//       `
//       )
//     );

//   // Create a marker at the starting position
//   const startMarker = new mapboxgl.Marker()
//     .setLngLat(originCord)
//     .addTo(map);


//     // Add our navigation control (the +/- zoom buttons)
//     map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     // Map onload event 
//     map.current.on("load", ()=> {
//         // Nifty code to force map to fit inside container when it loads
//         map.current.resize();

//     })

//     // Clean up on unmount
//     return () => map.current.remove();
//   }, [lat, lng, zoom]); 

//   return (
//     <div className='map-container' ref={mapContainerRef} />
//   );
// };

// export default MapboxComponent;
{/* <TabContent id="mapbox" activeTab={activeTab}>
  <MapboxComponent></MapboxComponent>
</TabContent> */}

const page = () => {

    return (
    <div>
        <div className='sm:py-16 sm:px-16 sm:h-3/4 py-8 '>
            <div className='flex sm:flex-row sm:space-x-5 flex-col px-2'>
                <h1 className='font-semibold sm:text-5xl sm:w-9/12 tracking-wider'>
                    Unparalleled Luxury: Find Your new home today !
                </h1>
                <div className='sm:w-9/12 tracking-wide leading-7'>We transcend mere construction crafting sanctuaries of Unparalleled elegance and innovation.Our discerning clientele envision a life of distinction,and we translate their aspirations into bespoke havens that redefine luxury living</div>
            </div>
            <div className='sm:mt-12'>
                <Image src='/her-estate.jpg' width={2800} height={2400} alt='real' className='sm:h-screen h-3/4'/>
            </div>
        </div>

        <div className='bg-gray-100 sm:py-8 py-4'>
        <div className='font-semibold text-3xl text-center mb-12'>
            Unparalleled Luxury
        </div>
            <div className='flex sm:flex-row flex-col sm:space-x-36 sm:space-y-0 space-y-8 sm:mx-20 mx-5'>
                 <div className='sm:w-80 bg-white sm:p-8 p-12 rounded-md text-center mx-auto'>
                     <MdRealEstateAgent className='text-burgundy text-center mx-auto' size={55}/>
                     <h1 className='text-burgundy text-2xl font-semibold'>Your Home</h1>
                     <h2 className='text-lg font-light my-2 tracking-normal'>We offer a seamless experience for both property owners and tenants alike.</h2>
                 </div>
                 <div className='sm:w-80 bg-white sm:p-8 p-12 rounded-md text-center mx-auto'>
                     <MdHomeWork className='text-burgundy text-center mx-auto' size={55}/>
                     <h1 className='text-burgundy text-2xl font-semibold'>Your Belonging</h1>
                     <h2 className='text-lg font-light tracking-normal'>Committed to delivering exceptional service and ensuring the long-term success of your rental portfolio</h2>
                 </div>
                 <div className='sm:w-80 bg-white sm:p-8 p-12 rounded-md text-center mx-auto'>
                    <TbBuildingSkyscraper className='text-burgundy text-center mx-auto' size={55}/>
                    <h1 className='text-burgundy text-2xl font-semibold'>Your Liability</h1>
                    <h2 className='text-lg font-light tracking-normal'>From property acquisition to tenant placement and ongoing management,our team is here to support you every step of the way.</h2>
                </div>
            </div>
        </div>

        <div className='flex sm:flex-row flex-col sm:space-x-4 space-y-2 sm:px-20 px-2 sm:my-16'>
            <Image src='/sec-estate.jpg' height={600} width={600} alt='sec-estate'/>
            <div>
                <div className='text-base font-light'>our best service</div>
                <h2 className='font-semibold'>And Here&apos;s how we?We do property acquisition and land management better</h2>
                <p className='flex flex-col space-y-4'>
                <div className='flex flex-row w-4/5 space-x-3'>
                    <Image src='/check.svg' width={25} height={25} alt='check'/>
                    <span style={{color: 'rgb(29, 62, 104)'}}></span>We take a personalized approach to each client and property we serve.
                </div>

                <div className='flex flex-row w-4/5 space-x-3'>
                    <Image src='/check.svg' width={25} height={25} alt='check'/>
                    <span style={{color: 'rgb(29, 62, 104)'}}></span>We maximize your ROI and minimize your stress with Zeake Khan LLC&apos;s premier commercial property management.
                </div>

                <div className='flex flex-row w-4/5 space-x-3'>
                    <Image src='/check.svg' width={25} height={25} alt='check'/>
                    <span style={{color: 'rgb(29, 62, 104)'}}></span>Whether you&apos;re a first-time investor or a seasoned landlord, you can trust Mysha Khan LLC to provide customized solutions that drive results and exceed expectations.
                </div>

            </p>
            </div>
        </div>


        <div className=' bg-gray-100 sm:px-20 py-4 flex sm:flex-row flex-col sm:py-4'>
            <div className='mx-auto '>
                <Image src='/speec.svg' height={140} width={160} alt='speach' className='w-24 sm:w-32'/>
            </div>
            <div className='sm:my-20 sm:mx-auto mx-2 sm:text-center sm:w-3/4'>
                <h1 className='text-3xl font-bold text-center'>What Our Client Say</h1>
                <div className='tracking-wide my-4'>Working with Mysha Khan LLC & Zeake Khan LLC was a game-changer for my rental property investments. Their attention to detail and personalized approach helped me optimize my portfolio and maximize my returns. I highly recommend their services to any property owner looking for top-notch management.</div>
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