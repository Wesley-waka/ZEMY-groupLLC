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
        <div className='py-16 px-16 h-3/4'>
            <div className='flex flex-row space-x-5'>
                <h1 className='font-semibold text-5xl w-9/12 tracking-wider'>
                    Unparalleled Luxury: Find Your new home today !
                </h1>
                <div className='w-9/12 tracking-wide'>We transcend mere construction crafting sanctuaries of Unparalleled elegance and innovation.Our discerning clientele envision a life of distinction,and we translate their aspirations into bespoke havens that redefine luxury living</div>
            </div>
            <div className='mt-12'>
                <Image src='/her-estate.jpg' width={2800} height={2400} alt='real' className='h-screen'/>
            </div>
        </div>

        <div className='bg-gray-100 py-8'>
        <div className='font-semibold text-3xl text-center mb-12'>
            Unparalleled Luxury
        </div>
            <div className='flex flex-row space-x-36 mx-20'>
                 <div className='w-80 bg-white p-8 rounded-md text-center mx-auto'>
                     <MdRealEstateAgent className='text-burgundy text-center mx-auto' size={55}/>
                     <h1 className='text-burgundy text-2xl font-semibold'>Your Home</h1>
                     <h2 className='text-lg font-light my-2 tracking-normal'>We transcend mere construction crafting sanctuaries of Unparalleled elegance and innovation.</h2>
                 </div>
                 <div className='w-80 bg-white p-8 rounded-md text-center mx-auto'>
                     <MdHomeWork className='text-burgundy text-center mx-auto' size={55}/>
                     <h1 className='text-burgundy text-2xl font-semibold'>Your Belonging</h1>
                     <h2 className='text-lg font-light tracking-normal'>We transcend mere construction crafting sanctuaries of Unparalleled elegance and innovation.</h2>
                 </div>
                 <div className='w-80 bg-white p-8 rounded-md text-center mx-auto'>
                    <TbBuildingSkyscraper className='text-burgundy text-center mx-auto' size={55}/>
                    <h1 className='text-burgundy text-2xl font-semibold'>Your Liability</h1>
                    <h2 className='text-lg font-light tracking-normal'>We transcend mere construction crafting sanctuaries of Unparalleled elegance and innovation.</h2>
                </div>
            </div>
        </div>

        <div className='flex flex-row space-x-4 px-20 my-16'>
            <Image src='/sec-estate.jpg' height={600} width={600} alt='sec-estate'/>
            <div>
                <div className='text-sm'>our best service</div>
                <h1 className='font-semibold'>And Here&apos;s how we?We do insurance better</h1>
                <p className='flex flex-col space-y-4'>
                <div className='flex flex-row w-4/5 space-x-3'>
                    <Image src='/check.svg' width={25} height={25} alt='check'/>
                    <span style={{color: 'rgb(29, 62, 104)'}}></span> Patients have the opportunity to book appointments with a practitioner of their choice
                </div>

                <div className='flex flex-row w-4/5 space-x-3'>
                    <Image src='/check.svg' width={25} height={25} alt='check'/>
                    <span style={{color: 'rgb(29, 62, 104)'}}></span> Patients have the opportunity to book appointments with a practitioner of their choice
                </div>

                <div className='flex flex-row w-4/5 space-x-3'>
                    <Image src='/check.svg' width={25} height={25} alt='check'/>
                    <span style={{color: 'rgb(29, 62, 104)'}}></span> Patients have the opportunity to book appointments with a practitioner of their choice
                </div>

            </p>
            </div>
        </div>


        <div className=' bg-gray-100 px-20 flex flex-row py-4'>
            <div>
                <Image src='/speec.svg' height={140} width={160} alt='speach'/>
            </div>
            <div className='my-20 mx-auto text-center w-3/4'>
                <h1 className='text-3xl font-bold'>What Our Client Say</h1>
                <div className='tracking-wide'>We Transcend Mere Construction Crafting Sanctuaries Of Unparalleled Elegance And Innovation.We Transcend Mere Construction Crafting Sanctuaries Of Unparalleled Elegance And Innovation.We Transcend Mere Construction Crafting Sanctuaries Of Unparalleled Elegance And Innovation.We Transcend Mere Construction Crafting Sanctuaries Of Unparalleled Elegance And Innovation.We Transcend Mere Construction Crafting Sanctuaries Of Unparalleled Elegance And Innovation.We Transcend Mere Construction Crafting Sanctuaries Of Unparalleled Elegance And Innovation.</div>
            </div>
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