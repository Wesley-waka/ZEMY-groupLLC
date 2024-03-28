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


export default function Home() {
  return (
    <div className="w-full">
      {/* large Screens grid */}
      <header>
        <div className="lg:block h-full w-full relative">
          <div class="flex flex-wrap">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <Image src="/IMG_8.png" height={400} width={400} alt="Description" class="w-full h-full object-cover rounded" />
              </div>
              <div class="w-1/2 p-1 md:p-1">
                <Image src="/IMG_9.jpg" height={400} width={400} alt="Description" class="w-full h-full object-cover rounded" />
              </div>
              <div class="w-full p-1 md:p-2">
                <Image src="/ousa.jpg" height={400} width={400} alt="Description" class="w-full  h-full object-cover rounded" />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <Image src="/IMG_3.jpg" height={900} width={900} alt="Description" class="w-full h-full object-cover rounded" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <Image src="/health.jpg" height={400} width={400} alt="Description" class="w-full  h-full  object-cover rounded" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <Image src="/christina.jpg" height={400} width={400} alt="Description" class="w-full  h-full  object-cover rounded" />
              </div>
            </div>
          </div>
          <div class="absolute inset-0 bg-lurgundy bg-opacity-50 h-full">
            <Image src='/logo.png' alt='zemy-logo' width={100} height={200} className='top-8 sm:h-10 sm:w-20 h-5 w-10 left-5 absolute' />
            <div className="text-center bottom-72 sm:mt-44 mt-12">
              <p class="text-3xl sm:text-6xl text-cream font-bold sm:mb-24">ZEMY GROUP<span className="block text-center">LLC</span></p>
              <Button />
            </div>
          </div>
        </div>
      </header>
      {/* large Screens grid */}
      <div>

        {/* About Us section*/}
        <div className=" max-h-full  sm:top-full w-full sm:pt-4" id='about_us'>
          <Service />
        </div>
        {/* About Us section*/}

        {/* Company subsidary */}
        <div className='flex flex-col mx-auto'>
          <div>
            <DonutChart />
          </div>
          {/* Company subsidary  */}

          {/* Styling  */}
          {/* <NodeOverlay /> */}
          {/* Styling  */}

          {/* Company Overview */}
          <div className='mt-4' id={styles.section_features}>
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
                    <ManufactureButton />
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
          {/* Company Overview */}


        <Sustainability />
{/* ContactUs Form */}
        <div className="md:px-10 px-4 my-8 flex flex-col  space-y-4 " id='news'>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold">Join Us</h2>
          <div className="flex md:flex-row flex-col md:space-x-20 md:w-3/4 w-full mx-auto">
            <Image src='/mail.svg' alt='news_letter' className='w-48 h-30 mx-auto' height={350} width={350} />
            <div className='md:w-5/6 md:my-24 my-10'>
              <h1 className="md:text-xl text-sm text-center md:text-start">Subscribe to our newsletter to get Access to the latest news,updates and exclusive content
              </h1>
              <form className='flex  flex-col space-y-3'>
                <label className="text-base ">Email</label>
                <div className="flex lg:flex-row flex-col space-y-3 lg:space-x-3 space-x-0 lg:space-y-0">
                  <input className='border-gray-400 p-2 rounded-lg  w-full h-9 focus:ring focus:ring-burgundy' style={{
                    borderWidth: '1px'
                  }} />
                  <button type="submit" className="text-white lg:w-1/2 w-full end-2 bottom-0 right-0  bg-burgundy hover:bg-burgundy focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-burgundy dark:hover:bg-burgundy dark:focus:ring-orange-800">Send</button>
                </div>
              </form>

            </div>
          </div>

        </div>
{/* ContactUs Form */}


        <div id="contact_us">
          <ContactUs />
        </div>


        <Footer />

      </div>
    </div>
  );
}
