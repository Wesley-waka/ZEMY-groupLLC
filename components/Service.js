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
      <h6 className="text-center py-2 mx-auto text-burgundy font-extrabold text-2xl">ABOUT US</h6>
    <div className={styles.sectionCenter}>
      <article className='header'>
        <h3>
          custom furniture <br /> built only for you
        </h3>
        <p>
        Immerse yourself in the art of relaxation with our exclusive range of handcrafted furniture. 
        </p>
      </article>
      <div className={styles.servicesCenter}>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article className={styles.service} key={id}>
              <span className={styles.icon}>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
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
