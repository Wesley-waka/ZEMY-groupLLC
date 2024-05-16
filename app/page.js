import Button from "@/components/Button";
import Service from "@/components/Service";
import Image from "next/image";
import styles from '@/styles/Home.module.scss'
import Sustainability from "@/components/Sustainability";
import DonutChart from "@/components/DonutChart";
import ContactUs from "@/components/ContactUs";
import ManufactureButton from "@/components/ManufactureButton";
import Footer from "@/components/Footer";
import NodeOverlay from "@/components/NodeOverlay";
import Link from "next/link";
import Navbar from "@/components/Navbar"
import ValueBlock from "@/components/ValueBlock";

export default function Home() {

  return (
    <div className="w-full">
      {/* Image grid */}
      <header className="hero z-10">
        <div className="lg:block  h-full w-full relative">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
            <Image src="/IMG_8.png" height={400} width={400} alt="Description" className="w-full h-full object-cover rounded"/>
                </div>
                <div className="w-1/2 p-1 md:p-1">
            <Image src="/IMG_9.jpg" height={400} width={400} alt="Description" className="w-full h-full object-cover rounded"/>
                </div>
                <div className="w-full p-1 md:p-2">
                <Image src="/ousa.jpg" height={400} width={400} alt="Description" className="w-full  h-full object-cover rounded"/>
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
            <Image src="/IMG_3.jpg" height={900} width={900} alt="Description" className="w-full h-full object-cover rounded"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
            <Image src="/health.jpg" height={400} width={400} alt="Description" className="w-full  h-full  object-cover rounded"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
            <Image src="/christina.jpg" height={400} width={400} alt="Description" className="w-full  h-full  object-cover rounded"/>
                </div>
            </div>
        </div>
        <div className="absolute inset-0 bg-lurgundy bg-opacity-50 h-full">
            <div className="text-center bottom-72 sm:mt-44 mt-12">
              <p className="text-3xl sm:text-6xl text-cream font-bold sm:mb-24">ZEMY GROUP<span className="block text-center">LLC</span></p>
              <Button/>
            </div>
        </div>
        </div>
      </header>
      {/* Image grid */}
    <div>
      

      {/* About Us section*/}
      <div  className=" max-h-full sm:top-full w-full sm:pt-4" id='about_us'>
        <Service/>
      </div>
      {/* About Us section*/}

      <h2 className="text-center my-10 mx-auto  font-bold ">Our Values</h2>
      <div className="max-w-6xl mx-auto overflow-hidden text-white rounded-lg">
          <ValueBlock/>
      </div>

      <div className='flex flex-col mx-auto'>
      <div className="">
        <DonutChart/>
      </div>
        {/* Company Overview */}
        <div className='mt-4' id={styles.section_features}>
          <h2 className="text-3xl font-semibold mx-auto my-8 text-center">Why ZEMY Group LLC</h2>
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-center md:flex-row flex-col">
                <div className={`${styles.backsplash_container} w-full md:w-1/3 text-center`} >
          <div className={`${styles.backsplash} mx-auto`}></div>
            <Image
              src="/bs.jpg"
              alt="Screenshot of Roads app showing the main player with several comments."
              height={400}
              width={200}
              className={`${styles.backsplash_image} shadow-lg mx-auto rounded-lg`}
            />
          </div>
          <div className='w-full md:w-1/3 md:ml-4 flex items-center'>
          <div>
            <h3 className='sm:text-start text-center font-light'>Manufacturing</h3>
            <p className='sm:text-start text-center font-extralight'>Our company takes pride in sustainably sourcing the highest quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States</p>
            <Link href='/services/manufacturing' className="bg-burgundy text-white py-2 px-5 rounded-md hover:text-burgundy hover:border-burgundy hover:border-2 hover:bg-white transition-colors">
              Learn More
            </Link>
          </div>
                </div>
              </div>
              <div className="flex justify-center my-20 md:flex-row-reverse  flex-col-reverse">
                <div className={`${styles.backsplash_container} w-full md:w-1/3 md:ml-4 text-center`} >
          <div className={`${styles.backsplash} mx-auto`}></div>
          <Image
            src="/med.jpg"
            alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
            height={400}
            width={200}
            className={`${styles.backsplash_image} shadow-lg mx-auto rounded-lg`}
          />
                </div>
                <div className='w-full md:w-1/3 flex items-center order-first md:order-none'>
          <div>
            <h3 className='sm:text-start text-center font-light'>Pharmaceuticals & Health Products</h3>
            <p className='sm:text-start text-center font-extralight'>Sierra Global Health LLC embodies innovation in the generic pharma space, with a manufacturing presence spanning from the Czech Republic to India. Our commitment to quality positions us as a powerhouse ready to enhance North America&apos;s pharmaceutical landscape.</p>
            <Link href='/services/manufacturing' className="transition-colors bg-burgundy text-white py-2 px-5 rounded-md hover:text-burgundy hover:border-burgundy hover:border-2 hover:bg-white">
              Learn More
            </Link>
          </div>
          
                </div>
              </div>
              <div className="flex justify-center md:flex-row flex-col">
                <div className={`${styles.backsplash_container} w-full md:w-1/3 text-center`} >
          <div className={`${styles.backsplash} mx-auto`}></div>
          <Image
            src="/estat.jpg"
            alt="Screenshot of Roads app showing how to select friends to add to a channel."
            height={400}
            width={200}
            className={`${styles.backsplash_image} shadow-lg mx-auto rounded-lg`}
          />
                </div>
                <div className='w-full md:w-1/3 md:ml-4 flex items-center'>
          <div>
            <h3 className='sm:text-start text-center font-light'>Real Estate Initiatives</h3>
            <p className='sm:text-start text-center font-extralight'>Unite the comfort of home with the pulse of industry through Mysha Khan LLC and Zeake Khan LLC, where we expertly secure and manage residential investments to prosper your sanctuary,  ensuring growth and stability for our discerning clientele</p>
            <Link href='/services/manufacturing' className="bg-burgundy transition-colors text-white py-2 px-5 w-full rounded-md hover:text-burgundy hover:border-burgundy hover:border-2 hover:bg-white">
              Learn More
            </Link>
          </div>
                </div>
              </div>
              </div>
        </div>
      </div>
      <Sustainability/>
      


    </div>
    </div>
  );
}
