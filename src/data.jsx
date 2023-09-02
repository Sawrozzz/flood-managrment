import {
  FaHome,
  FaMapMarkedAlt,
  FaNewspaper,
  FaChartLine,
  FaQuestion,
} from 'react-icons/fa';

import {
  BiClinic
} from 'react-icons/bi';



export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Map',
    icon: <FaMapMarkedAlt className='nav__icon' />,
    path: '/map',
  },

  {
    id: 3,
    name: 'Update',
    icon: <FaNewspaper className='nav__icon' />,
    path: '/update',
  },

  {
    id: 4,
    name: 'Recovery',
    icon: <BiClinic className='nav__icon' />,
    path: '/recovery',
  },
  
  {
    id: 5,
    name: 'Prediction',
    icon: <FaChartLine className='nav__icon' />,
    path: '/prediction',
  },
  {
    id: 6,
    name: 'FAQ',
    icon: <FaQuestion className='nav__icon' />,
    path: '/faq',
  },
];


