import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our mission is to create value for our stakeholders through pioneering solutions, customer-centric service, and sustainable business practices.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
    'Our vision is to transform everyday challenges into opportunities for growth by leveraging our wide-ranging expertise.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Create an inviting ambiance in your home with our range of elegant and versatile furniture, meticulously crafted for enduring beauty.',
  },
]
