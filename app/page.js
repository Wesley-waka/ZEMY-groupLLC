import Button from "@/components/Button";
import Service from "@/components/Service";
import UseCase from "@/components/UseCase";
import { services } from "@/utils/constants";
import Image from "next/image";
import styles from '@/styles/Home.module.scss'
import Sustainability from "@/components/Sustainability";

// StyledButton.js


// Creating a styled button component with styled-components

export default function Home() {
  const current_year = new Date().getFullYear();
  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-slate-300 ">

        <div class="col-span-2 md:col-span-2 md:row-span-1 ">
          <Image src="/IMG_8.png" height={800} width={800} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>


       

        <div class="col-span-2 md:col-span-1 md:row-span-1 ">
          <Image src="/health.jpg" height={700} width={800} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>
        
        <div class="col-span-2 md:col-span-1 row-span-1 ">
          <Image src="/IMG_9.jpg" height={400} width={400} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>

        {/* <div class="col-span-2 md:col-span-2 md:row-span-2 bg-white"> */}
          {/* <Image src="/IMG_7.jpg" height={200} width={200} alt="Description" class="w-full h-full object-cover rounded"/> */}
        {/* </div> */}

        <div class="col-span-2 md:col-span-1 row-span-1 ">
          <Image src="/IMG_4.jpg" height={200} width={200} alt="Description" class="w-full h-full object-cover rounded"/>
        </div>

        <div class="col-span-2 md:col-span-2 md:row-span-2 ">
          <Image src="/christina.jpg" height={700} width={800} alt="Description" class="w-full h-1/2 object-cover rounded"/>
        </div>

        <div class="col-span-2 md:col-span-1 row-span-1 ">
          <Image src="/ryan.jpg" height={400} width={400} alt="Description" class="w-full h-1/2 object-cover rounded"/>
        </div>


        <div class="col-span-2  md:row-span-2 ">
          <Image src="/ousa.jpg" height={400} width={400} alt="Description" class="w-full h-1/2 object-cover rounded"/>
        </div>

        <div class="absolute inset-0 h-full bg-lurgundy bg-opacity-50 flex justify-center items-center flex-col  space-y-7">
            <p class=" text-6xl text-blue-300 font-bold">ZEMY GROUP <span className="block text-center">LLC</span></p>
            <div className='w-96 text-center text-blue-300 text-xl font-normal'>Empowering Diverse Markets with Excellence – ZEMY Group LLC, Your Gateway to Innovation and Quality.</div>
        </div>
      </div>

      <div className="h-max">
        <Service/>
      </div>

      <div className=" pt-40">
        <h6 className="text-center">Company OverView</h6>
        <div class="flex items-center justify-center h-screen">
        <div class="flex items-center justify-center h-screen">
      <div >
      
    
      <div class="w-64 h-64 rounded-full grid grid-cols-2">
        <div class="rounded-l-full bg-sky-500">Sky Blue</div>
        <div class="rounded-r-full bg-green-500">Earthy Green</div>
      </div>
   
    
    </div>
  </div>
      </div>
      </div>

      <div id={styles.section_features}>
        <h2 className="text-3xl mx-auto my-8 text-center">How Roads Is Unique</h2>

  <div className="container mx-auto px-4 py-4">
    <div className="flex justify-center">
      <div className={`${styles.backsplash_container} w-full md:w-1/3 text-center`} >
        <div className={`${styles.backsplash} mx-auto`}></div>
        <Image 
          src="/device_15_player_simple2.png" 
          alt="Screenshot of Roads app showing the main player with several comments."
          height={400}
          width={200}
          className={`${styles.backsplash_image} shadow-lg`}
        />
      </div>

      <div className='w-full md:w-1/3 md:ml-4 flex items-center'>
        <div>
          <h3>Comment With Audio</h3>
          <p>While listening to conversations you can add an audio comment, which will branch off the main recording. Creating a more dynamic conversation over time.</p>
        </div>
      </div>
    </div>
    
    <div className="flex justify-center my-20 flex-row-reverse">
      <div className={`${styles.backsplash_container} w-full md:w-1/3 md:ml-4 text-center`} >
        <div className={`${styles.backsplash} mx-auto`}></div>
        <Image 
          src="/device_15_player_nested.png" 
          alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
          height={400}
          width={200}
          className={`${styles.backsplash_image} shadow-lg`}
        />
      </div>
      <div className='w-full md:w-1/3 flex items-center order-first md:order-none'>
        <div>
          <h3>Always Have Context</h3>
          <p>When listening to a comment know exactly whats being referenced, and easily navigate the asynchronous conversation.</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className={`${styles.backsplash_container} w-full md:w-1/3 text-center`} >
        <div className={`${styles.backsplash} mx-auto`}></div>
        <Image 
          src="/device_15_channel_invite.png" 
          alt="Screenshot of Roads app showing how to select friends to add to a channel."
          height={400}
          width={200}
          className={`${styles.backsplash_image} shadow-lg`}
        />
      </div>

      <div className='w-full md:w-1/3 md:ml-4 flex items-center'>
        <div>
          <h3>Control Access</h3>
          <p>You control who has access to your content through channels. Only invited members can listen and collaborate on your conversations.</p>
        </div>
      </div>
    </div>

    </div>
  </div>


      <Sustainability/>
      
      <div className="px-10 my-8 flex flex-col space-y-4">
        <h2 className="text-3xl my-6 text-center">Join Us</h2>
        <div className="flex flex-row space-x-20">
          <Image src='/mail.svg' alt='news_letter' height={350} width={350}/>
          <div className='w-5/6 my-24'>
            <h1 className="text-xl ">Subscribe to our newsletter to get Access to the latest news,updates and exclusive content 
            </h1>
            <form className='flex flex-col'>
              <label className="text-base ">Email</label>
              <input className='border-gray-400 p-2 rounded-lg w-72 h-9' style={{
                borderWidth: '1px'
              }}/>
            </form>
          </div>
        </div>
        
      </div>

      <div className="px-10 my-4">
      <h2 className="text-3xl my-6 text-center">Contact Us</h2>
      <div className='flex flex-row space-x-36 '>
        <div className='w-3/5 mx-auto'>
          <h2 className="text-3xl my-6 text-center text-burgundy font-bold">Let&apos;s Talk</h2>
          <h2 className='text-base  text-start'>We love your feedback,suggestion and review.We always listen</h2>
          <form className='mt-10 flex flex-col space-y-7'>
            <div className='flex flex-col space-y-3'>
              <label>What&apos;s your Name?</label>
              <input className='border-gray-400 p-2 rounded-lg' style={{
              borderWidth: '1px'
            }}/>
            </div>
            
            <div className='flex flex-col space-y-3'>
              <label>What email Address can we reach you at?</label>
              <input className='border-gray-400 p-2 rounded-lg' style={{
              borderWidth: '1px'
            }}/>
            </div>

            <div className='flex flex-col space-y-3'>
              <label>What phone Number can we reach you at?</label>
              <input className='border-gray-400 p-2 rounded-lg' style={{
              borderWidth: '1px'
            }}/>
            </div>

            <div className='flex flex-col space-y-3'>
              <label>What would you like to know from us?Write us a message</label>
              <input className='border-gray-400 p-2 rounded-lg' style={{
              borderWidth: '1px'
            }}/>
            </div>

            <button className='bg-burgundy w-48 p-3 text-white rounded-lg border-slate-400 hover:bg-white hover:text-burgundy hover:border-burgundy hover:transition-all' style={{
              borderWidth: '1px'
            }}>Send Message</button>
            
          </form>
        </div>
        <div className='w-2/3 my-28'>
          <Image alt="Contact us" src='/news.svg' width={400} height={400}/>
        </div>
      </div>
        
      </div>

      {/* <div className="h-96">
        <h6 className="text-center">Manufacturing</h6>
      </div> */}
      <div className='h-full bg-burgundy text-center text-white'>
        <div className='flex flex-col space-y-2'>
          <div className='flex mx-auto mt-2'>
            <h5>About Us</h5> <span>|</span>
            <h5>News</h5> <span>|</span>
            <h5>Contact</h5>
          </div>
          <h6>Copyright © {current_year}, 1ManStartup LLC. All Rights Reserved.</h6>



        </div>

      </div>

      
    </div>
  );
}
