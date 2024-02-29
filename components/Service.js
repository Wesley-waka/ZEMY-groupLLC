"use client"
import { services } from '@/utils/constants';
import styled from 'styled-components';
import styles from '@/styles/Hero.module.scss';

const StyledService = styled.div`
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
.service {
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
  p {
    color: var(--clr-primary-2);
  }
}`

const ServiceStyled = styled.article`
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
  p {
    color: var(--clr-primary-2);
  }
`


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
      <div className={` flex md:flex-row flex-col flex-wrap md:space-x-6 space-y-6 w-full  mx-auto`}>
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

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 2rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`

export default Service
