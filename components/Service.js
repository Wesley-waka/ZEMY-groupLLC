"use client"
import { services } from '@/utils/constants';
import styled from 'styled-components';
import styles from '@/styles/Hero.module.scss';




const Service = () => {
  return (
    <div className={styles.section}>
      <h2 className="text-center sm:py-4 mx-auto  font-bold ">WHO WE ARE</h2>
      <div className='sm:ml-40 sm:m-6 mx-4'>
        <article className='header flex flex-col sm:flex-row sm:space-x-8 sm:mb-7 text-burgundy xs:mb-4'>
          <h1 className='font-bold text-3xl'>
            ZEMY Group  LLC, <br />
          </h1>
          <p className='sm:w-5/12'>
            is a rich portfolio enveloping healthcare, daily commodities, real estate, and more, we are the nexus of industry-leading subsidiaries making a global impact.
          </p>
        </article>
        <div className={`flex sm:flex-row flex-col  h-3/4 sm:space-x-6 space-y-6 sm:space-y-0 w-full  mx-auto sm:align-middle`}>
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
