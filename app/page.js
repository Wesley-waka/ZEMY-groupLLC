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
                <Image src="/IMG_8.png" height={400} width={400} alt="Description" className="w-full h-full object-cover rounded" />
              </div>
              <div className="w-1/2 p-1 md:p-1">
                <Image src="/IMG_9.jpg" height={400} width={400} alt="Description" className="w-full h-full object-cover rounded" />
              </div>
              <div className="w-full p-1 md:p-2">
                <Image src="/ousa.jpg" height={400} width={400} alt="Description" className="w-full  h-full object-cover rounded" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <Image src="/IMG_3.jpg" height={900} width={900} alt="Description" className="w-full h-full object-cover rounded" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image src="/health.jpg" height={400} width={400} alt="Description" className="w-full  h-full  object-cover rounded" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image src="/christina.jpg" height={400} width={400} alt="Description" className="w-full  h-full  object-cover rounded" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-lurgundy bg-opacity-50 h-full">
            <div className="text-center bottom-72 sm:mt-44 mt-12">
              <p className="text-3xl sm:text-6xl text-cream font-bold sm:mb-24">ZEMY GROUP<span className="block text-center">LLC</span></p>
              <Button />
            </div>
          </div>
        </div>
      </header>
      {/* Image grid */}
      <div>


        {/* About Us section*/}
        <div className=" max-h-full sm:top-full w-full sm:pt-4" id='about_us'>
          <Service />
        </div>
        {/* About Us section*/}

        <h2 className="text-center my-10 mx-auto  font-bold ">Our Values</h2>
        <div className="max-w-6xl mx-auto overflow-hidden text-white rounded-lg">
          <ValueBlock />
        </div>

        <div className='flex flex-col mx-auto'>
          <div className="">
            {/* <DonutChart /> */}

            <h2 className="text-center  mx-auto  font-semibold">Company OverView</h2>

            <div class="max-w-[80rem] mx-auto">
              <h1 class="text-3xl font-medium mx-auto my-8 text-center">Main Company</h1>
              <div class="flex justify-center items-center">
                <div class=" max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/logo.png" height={200} width={100} />
                    <p class="mt-6 text-gray-700">
                      ZEMY GROUP LLC is a holding company with its headquarters in NY
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                      Learn more
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h1 class="text-3xl font-medium mx-auto my-8 text-center">Subsidary Companies</h1>

              <div class="mt-4 grid px-[30px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/logoP.png" height={100} width={100} />
                    <h3 class="text-lg font-bold text-gray-700 ">
                      Zemy Group Global LTD
                    </h3>
                    <p class="mt-6 text-gray-700">
                      It is a company dedicated to manufacturing of 100% organic pet treat from Africa.
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.elitetreatforpets.com/" target="_blank">
                      Learn More
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/zeake-khan.svg" height={200} width={100} />
                    <h3 class="text-lg font-bold text-gray-700 ">
                      Zeake Khan LLC
                    </h3>
                    <p class="mt-6 text-gray-700">
                      A company completely dedicated to purchase and management of commercial Real Estate in NY tri state area.
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.zeakekhan.com/" target="_blank">
                      Learn more
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/med-link.svg" height={100} width={100} />
                    <h3 class="text-lg font-bold text-gray-700 ">
                      MedLink World LLC
                    </h3>
                    <p class="mt-6 text-gray-700">
                      A healthcare and CRO consulting firm which champions itself in clinical data generation for medical devices that needs FDA registration.
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.medlinkworld.com/" target="_blank">
                      Learn more
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/sierra.svg" height={200} width={100} />
                    <h3 class="text-lg font-bold text-gray-700 ">
                      Sierra Global Health LLC
                    </h3>
                    <p class="mt-6 text-gray-700">
                      A company dedicated to production of CDMO, in generic pharma space.
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://sierra-gh.vercel.app/" target="_blank">
                      Learn more
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/mysha-khan.svg" height={200} width={100} />
                    <h3 class="text-lg font-bold text-gray-700 ">
                      Mysha Khan LLC
                    </h3>
                    <p class="mt-6 text-gray-700">
                      A company dedicated to residential purchase and management of rental properties.
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.myshakhan.com/" target="_blank">
                      Learn more
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>


                <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/just-ask.svg" height={200} width={100} />
                    <h3 class="text-lg font-bold text-gray-700 ">
                      Just Ask LLC
                    </h3>
                    <p class="mt-6 text-gray-700">
                      Just ASK deals with consulting services in health foods and Aviatio
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://justask-seven.vercel.app/" target="_blank">
                      Learn more
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-50 dark:border-neutral-300 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                  <div class="p-4 md:p-5">
                    <Image src="/ksk.svg" height={200} width={100} />
                    <h3 class="text-lg font-bold text-gray-700 ">
                      KSK LLC
                    </h3>
                    <p class="mt-6 text-gray-700">
                      KSK international Is one of the leading supplier of high quality home and office furniture in USA
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="https://www.kskinternationalllc.com/" target="_blank">
                      Learn more
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </a>
                  </div>
                </div>




              </div>
            </div>




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
                    <Link href='https://www.elitetreatforpets.com' className="bg-burgundy text-white py-2 px-5 rounded-md hover:text-burgundy hover:border-burgundy hover:border-2 hover:bg-white transition-colors">
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
                    <Link href='/services/pharmaceuticals' className="transition-colors bg-burgundy text-white py-2 px-5 rounded-md hover:text-burgundy hover:border-burgundy hover:border-2 hover:bg-white">
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
                    <Link href='/services/real-estate' className="bg-burgundy transition-colors text-white py-2 px-5 w-full rounded-md hover:text-burgundy hover:border-burgundy hover:border-2 hover:bg-white">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sustainability />



      </div>

      <div className="sm:w-3/4 flex sm:flex-row flex-col-reverse sm:space-x-0 my-5 mx-4 sm:mx-auto sm:my-8">
        <div className=" bg-burgundy text-white ">
          <div className="sm:p-28 p-5">
            <h3 className="sm:text-3xl text-xl font-extralight mb-6">Interested about Our Products & Services</h3>
            <Link href='/contact-us' className="mt-6 py-2 px-12 bg-blue-600 rounded-full hover:text-burgundy hover:border-blue-600 hover:bg-white hover:transition-all">Contact Us</Link>
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
  );
}
