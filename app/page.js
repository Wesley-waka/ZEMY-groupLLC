import Button from "@/components/Button";
import Service from "@/components/Service";
import Image from "next/image";
import styles from '@/styles/Home.module.scss'
import Sustainability from "@/components/Sustainability";
import DonutChart from "@/components/DonutChart";
import ContactUs from "@/components/ContactUs";
import ManufactureButton from "@/components/ManufactureButton";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      {/* large Screens grid */}
        <header>

      <div class="hidden lg:grid grid-cols-5 z-10 gap-1 p-0 relative">

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
          <Image src="/IMG_4.jpg" height={400} width={400} alt="Description" class="w-full h-full object-cover rounded"/>
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
      <div class="hidden absolute inset-0 h-full bg-lurgundy z-10 bg-opacity-50 md:flex justify-center items-center flex-col  space-y-5 bottom-48">
        <Image src='/logo.png' alt='zemy-logo' width={100} height={200} className='top-8  left-5 absolute' />
          <p class=" text-6xl text-cream font-bold">ZEMY GROUP <span className="block text-center">LLC</span></p>
          <Button/>

          
      </div>
      </header>
      {/* large Screens grid */}


      {/* small Screens grid */}

    <div>
      <div class="flex flex-wrap -m-1 lg:-m-2 lg:hidden">
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
          <div class="flex  absolute inset-0  sm:h-full bg-lurgundy  bg-opacity-50 md:hidden justify-center items-center flex-col h-72  " >
          <Image src='/logo.png' alt='zemy-logo' width={100} height={200} className='top-8  left-5 absolute w-16' />
            <p class=" text-2xl text-cream font-bold ">ZEMY GROUP <span className="block text-center">LLC</span></p>
            <Button/>
            
          </div>
      </div>
      {/* small Screens grid */}
      

      {/* About Us section*/}


      <div className=" max-h-full absolute sm:top-full w-full sm:pt-4" id='about_us'>
        <Service/>
      </div>

      {/* About Us section*/}

      

      <div id={styles.section_features} className='md:mt-96  flex flex-col mx-auto'>


      <div className="max-h-full">
        <DonutChart/>
      </div>

        {/* Company Overview */}
        <div className='mt-4'>
          <h2 className="text-3xl font-semibold mx-auto my-8 text-center">Why ZEMY Group LLC is Unique</h2>
          
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
            <ManufactureButton/>
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
            <h3 className='sm:text-start text-center font-light'>Real Estate Initiatives</h3>
            <p className='sm:text-start text-center font-extralight'>Unite the comfort of home with the pulse of industry through Mysha Khan LLC and Zeake Khan LLC, where we expertly secure and manage residential investments to prosper your sanctuary,  ensuring growth and stability for our discerning clientele</p>
          </div>
                </div>
              </div>
          
              </div>
        </div>
  </div>


      <Sustainability/>
      
      <div className="md:px-10 px-4 my-8 flex flex-col  space-y-4 " id='news'>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold">Join Us</h2>
        <div className="flex md:flex-row flex-col md:space-x-20 md:w-3/4 w-full mx-auto">
          <Image src='/mail.svg' alt='news_letter' className='w-48 h-30 mx-auto' height={350} width={350}/>
          <div className='md:w-5/6 md:my-24 my-10'>
            <h1 className="md:text-xl text-sm text-center md:text-start">Subscribe to our newsletter to get Access to the latest news,updates and exclusive content 
            </h1>
            <form className='flex  flex-col space-y-3'>
                <label className="text-base ">Email</label>
              <div className="flex lg:flex-row flex-col space-y-3 lg:space-x-3 space-x-0 lg:space-y-0">
                <input className='border-gray-400 p-2 rounded-lg  w-full h-9 focus:ring focus:ring-burgundy' style={{
                  borderWidth: '1px'
                }}/>
                <button type="submit" className="text-white lg:w-1/2 w-full end-2 bottom-0 right-0  bg-burgundy hover:bg-burgundy focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-burgundy dark:hover:bg-burgundy dark:focus:ring-orange-800">Send</button>
              </div>
            </form>

          </div>
        </div>
        
      </div>

    <div id="contact_us">
      <ContactUs/>
    </div>

    
    <Footer/>

    </div>
    </div>
  );
}
