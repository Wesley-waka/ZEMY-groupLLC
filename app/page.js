import Button from "@/components/Button";
import Service from "@/components/Service";
import UseCase from "@/components/UseCase";
import { services } from "@/utils/constants";
import Image from "next/image";
import styles from '@/styles/Home.module.scss'
import Sustainability from "@/components/Sustainability";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import DonutChart from "@/components/DonutChart";
import ContactUs from "@/components/ContactUs";
// StyledButton.js


// Creating a styled button component with styled-components

export default function Home() {
  const current_year = new Date().getFullYear();
  return (
    <div>
      {/* large Screens grid */}
      <div class="hidden md:grid grid-cols-5 z-10 gap-1 p-0  relative">

        <div class="col-span-2 md:col-span-2  ">
          <Image src="/IMG_8.png" height={800} width={800} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>

         <div class="col-span-2 md:col-span-1  ">
          <Image src="/health.jpg" height={700} width={800} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>
        
        <div class="col-span-2 md:col-span-1 ">
          <Image src="/IMG_9.jpg" height={400} width={400} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>


        <div class="col-span-2 md:col-span-1  ">
          <Image src="/IMG_4.jpg" height={200} width={200} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>

        <div class="col-span-2 md:col-span-2  ">
          <Image src="/christina.jpg" height={700} width={800} alt="Description" class="w-full h-1/2 object-cover rounded"/>
        </div>

        <div class="col-span-2 md:col-span-1  ">
          <Image src="/ryan.jpg" height={400} width={400} alt="Description" class="w-full h-1/2 object-cover rounded"/>
        </div>


        <div class="col-span-2   ">
          <Image src="/ousa.jpg" height={400} width={400} alt="Description" class="w-full h-1/2 object-cover rounded"/>
        </div> 
        

      </div>
      <div class="hidden  absolute inset-0 h-full bg-lurgundy z-10 bg-opacity-50 md:flex justify-center items-center flex-col  space-y-5 bottom-48">
          <p class=" text-6xl text-cream font-bold">ZEMY GROUP <span className="block text-center">LLC</span></p>
          <button className='bg-lurgundy w-48 px-4 py-2 my-4 text-white rounded-full border-slate-100 hover:bg-white hover:text-burgundy hover:border-burgundy hover:transition-all' style={{
            borderWidth: '1px'
          }}>Learn More</button>
          
      </div>
      {/* large Screens grid */}


      {/* small Screens grid */}

    <div >
    <div class="flex flex-wrap -m-1 md:-m-2 md:hidden ">
        <div class="flex flex-wrap w-1/2">
            <div class="w-1/2 p-1 md:p-2">
        <Image src="/IMG_8.png" height={200} width={200} alt="Description" class="w-full h-full object-cover rounded"/>

            </div>
            <div class="w-1/2 p-1 md:p-1">
        <Image src="/IMG_9.jpg" height={200} width={200} alt="Description" class="w-full h-full object-cover rounded"/>

            </div>
            <div class="w-full p-1 md:p-2">
            <Image src="/ousa.jpg" height={400} width={400} alt="Description" class="w-full sm:h-5/6 h-full object-cover rounded"/>

            </div>
        </div>
        <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
        <Image src="/IMG_3.jpg" height={400} width={400} alt="Description" class="w-full h-full object-cover rounded"/>

            </div>
            <div class="w-1/2 p-1 md:p-2">
        <Image src="/health.jpg" height={400} width={400} alt="Description" class="w-full sm:h-5/6 h-full  object-cover rounded"/>

            </div>
            <div class="w-1/2 p-1 md:p-2">
        <Image src="/christina.jpg" height={400} width={400} alt="Description" class="w-full sm:h-5/6 h-full  object-cover rounded"/>

            </div>
        </div>
        <div class="flex  absolute inset-0  md:h-72 bg-lurgundy  bg-opacity-50 md:hidden justify-center items-center flex-col h-72  " >
          <p class=" text-2xl text-cream font-bold ">ZEMY GROUP <span className="block text-center">LLC</span></p>
          <button className='bg-lurgundy w-48 px-4 py-2 text-white rounded-full border-slate-100 hover:bg-white hover:text-burgundy hover:border-burgundy hover:transition-all' style={{
            borderWidth: '1px'
          }}>Learn More</button>
          
      </div>
    </div>





    

      {/* small Screens grid */}

      {/* About Us section*/}


      <div className="z-50 h-max absolute md:top-full w-full md:pt-4">
        <Service/>
      </div>

      {/* About Us section*/}

      





      <div id={styles.section_features} className='md:mt-96  flex flex-col mx-auto'>
        {/* Company Overview */}
{/* <div className='my-10  '>
        <h1 className="text-center">Company OverView</h1>
        <div id={styles.tree} className='md:ml-6 my-16'>
            <ul>
              <li>
                <a href="#">ZEMY GROUP GLOBAL LLC</a>
                <ul>
                  <li>
                    <a href="#">ZEMY GROUP GLOBAL LIMITED</a>
                    <ul>
                      <li>
                        <a href="#">Elite Treats Bully Stick</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">KSK International LLC</a>
                  </li>
                  <li>
                    <a href="#">JUST ASK LLC</a>
                  </li>
        
        
                  <li>
                    <a href="#">Medlink World LLC</a>
                  </li><li>
                    <a href="#">Mysha Khan LLC</a>
                  </li><li>
                    <a href="#">Zeake Khan LLC</a>
                  </li><li>
                    <a href="#">Sierra Global Health LLC</a>
                  </li>
        
                </ul>
              </li>
            </ul>
          </div>
      </div> */}

    <div>
      <h2 className="text-center text-2xl font-semibold">Company OverView</h2>
        <DonutChart/>
    </div>

{/* Company Overview */}
        <div>
          <h2 className="text-3xl sm:text-2xl font-semibold mx-auto my-8 text-center">Why ZEMY Group LLC is Unique</h2>
          
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
            <h3>Manufacturing</h3>
            <p>Our company takes pride in sustainably sourcing the highest quality ingredients in Kenya, expertly crafting premium bully sticks, and ensuring reliable, timely supply to our loyal customers throughout the United States</p>
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
            <h3>Pharmaceuticals & Health Products</h3>
            <p>Sierra Global Health LLC embodies innovation in the generic pharma space, with a manufacturing presence spanning from the Czech Republic to India. Our commitment to quality positions us as a powerhouse ready to enhance North America&apos;s pharmaceutical landscape.</p>
          </div>
                </div>
              </div>
          
              <div className="flex justify-center md:flex-row flex-col">
                <div className={`${styles.backsplash_container} w-full md:w-1/3 text-center`} >
          <div className={`${styles.backsplash} mx-auto`}></div>
          <Image
            src="/estate.jpg"
            alt="Screenshot of Roads app showing how to select friends to add to a channel."
            height={400}
            width={200}
            className={`${styles.backsplash_image} shadow-lg mx-auto rounded-lg`}
          />
                </div>
          
                <div className='w-full md:w-1/3 md:ml-4 flex items-center'>
          <div>
            <h3>Real Estate Initiatives</h3>
            <p>Unite the comfort of home with the pulse of industry through Mysha Khan LLC and Zeake Khan LLC, where we expertly secure and manage residential investments to prosper your sanctuary,  ensuring growth and stability for our discerning clientele</p>
          </div>
                </div>
              </div>
          
              </div>
        </div>
  </div>


      {/* <Sustainability/> */}
      <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 justify-center ml-4 mx-auto'>
      <h2 className="text-3xl my-6 text-center">Sustainability and Social Responsibility</h2> 
      <div className='w-72 text-center bg-gray-100 p-4 rounded-lg text-burgundy  border-red-200 border-t-4'>
                <FaHandshake className="mx-auto block" size={50} />
                <div className='mt-4'>
                  <h6>At ZEMY Group LLC actively supports community initiatives, fosters inclusive growth, and operates with the utmost integrity to make a meaningful difference in society.</h6>
                </div>
              </div>
              <div className='w-72 text-center bg-gray-100 p-4 rounded-lg text-burgundy  border-red-200 border-t-4'>
                <BsGraphUpArrow className="mx-auto block" size={50}/>
                <div className='mt-4'>
                  <h6>At ZEMY Group LLC. We meticulously measure our impact and continuously innovate to reduce our carbon footprint, championing a greener economy.</h6>
                </div>
              </div>
              <div className='w-72 text-center bg-gray-100 p-4 rounded-lg   text-burgundy border-red-200 border-t-4'>
                <GiGears className="mx-auto block" size={50}/>

                <div className='mt-4'>
                  <h6>Through strategic partnerships and collaborative efforts, ZEMY Group LLC is on a mission to catalyze sustainable development and empower communities,</h6>
                </div>
              </div>
      </div>
      
      <div className="md:px-10 px-4 my-8 flex flex-col  space-y-4 ">
        <h2 className="text-3xl my-6 text-center">Join Us</h2>
        <div className="flex md:flex-row flex-col md:space-x-20 md:w-3/4 w-full mx-auto">
          <Image src='/mail.svg' alt='news_letter' className='w-48 h-30 mx-auto' height={350} width={350}/>
          <div className='md:w-5/6 md:my-24 my-10'>
            <h1 className="md:text-xl text-sm text-center">Subscribe to our newsletter to get Access to the latest news,updates and exclusive content 
            </h1>
            <form className='flex flex-col relative'>
              <label className="text-base ">Email</label>
              <input className='border-gray-400 p-2 rounded-lg w-72 h-9 focus:ring focus:ring-burgundy' style={{
                borderWidth: '1px'
              }}/>
                <button type="submit" className="text-white absolute end-2 bottom-0 right-0 bg-burgundy hover:bg-burgundy focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-burgundy dark:hover:bg-burgundy dark:focus:ring-orange-800">Send</button>
            </form>
            {/* <div className="relative">
                <input type="search" id="default-search" className="block sm:w-full w-scren p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500  slate:border-orange-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search Products" required />
            </div> */}
          </div>
        </div>
        
      </div>

<ContactUs/>

    
      <div className='h-full bg-burgundy text-center text-white'>
        <div className='flex flex-col space-y-2'>
          <div className='flex mx-auto mt-2'>
            <h5>About Us</h5> <span>|</span>
            <h5>News</h5> <span>|</span>
            <h5>Contact</h5>
          </div>
          <h6>Copyright © {current_year}, Zemy Group Global LLC LLC. All Rights Reserved.</h6>



        </div>

      </div>

    </div>
    </div>
  );
}
