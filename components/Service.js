"use client"
import { services } from '@/utils/constants';
import styled from 'styled-components';
import styles from '@/styles/Hero.module.scss';




const Service = () => {
  return (
    <div className={styles.section}>
      <h2 className="text-center py-4 mx-auto  font-bold ">ABOUT US</h2>
    <div className='md:ml-48 sm:m-6 mx-4 xs:mt-10'>
      <article className='header flex flex-row space-x-8 md:my-7 text-burgundy xs:my-4'>
        <h3>
        ZEMY Group  LLC, <br /> 
        </h3>
        <p className='md:w-5/12'>
        With a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
        </p>
      </article>
      <div className={` flex md:flex-row flex-col flex-wrap h-3/4 md:space-x-6 space-y-6 md:space-y-0 w-full  mx-auto md:align-middle`}>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article className={styles.service} key={id}>
              <span className={styles.icon}>{icon}</span>
              <h4 className='text-burgundy font-semibold'>{title}</h4>
              <p className='text-burgundy'>{text}</p>
            </article>
          )
        })}
      </div>
    </div>
  </div>
  )
}



export default Service
