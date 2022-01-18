import first from '../assets/icons/first.svg';
import second from '../assets/icons/second.svg';
import third from '../assets/icons/third.svg';
import fourth from '../assets/icons/fourth.svg';
import fifth from '../assets/icons/fifth.svg';
import sixth from '../assets/icons/sixth.svg';
import seventh from '../assets/icons/seventh.svg';
import eights from '../assets/icons/eights.svg';
import nineth from '../assets/icons/nineth.svg';
import bg from '../assets/images/bg.png';
import Banner from '../components/Banner';
import Home from '../components/Home';
import About from '../components/About';
import Subscriptions from '../components/Subscriptions';
import Library from '../components/Library';
import History from '../components/History';

export const sidebar = [
  {
    id: 1,
    path: '/home',
    title: 'Home',
    icon: first,
    component: Banner,
    hiddeh: false,
  },
  {
    id: 2,
    path: '/explore',
    title: 'Explore',
    icon: second,
    component: About,
    hiddeh: false,
  },
  {
    id: 3,
    path: '/subscriptions',
    title: 'Subscriptions',
    icon: third,
    component: Subscriptions,
    hiddeh: false,
  },
  {
    id: 4,
    path: '/library',
    title: 'Library',
    icon: fourth,
    component: Library,
    hiddeh: false,
  },
  {
    id: 5,
    path: '/history',
    title: 'History',
    icon: fifth,
    component: History,
    hiddeh: false,
  },
  {
    id: 6,
    path: '/history',
    title: 'Music',
    icon: sixth,
    component: History,
    hiddeh: false,
  },
  {
    id: 7,
    path: '/history',
    title: 'Last Watched',
    icon: seventh,
    component: History,
    hiddeh: false,
  },
  {
    id: 8,
    path: '/history',
    title: 'Likes',
    icon: eights,
    component: History,
    hiddeh: false,
  },
  {
    id: 9,
    path: '/history',
    title: 'Next',
    icon: nineth,
    component: History,
    hiddeh: false,
  },
  {
    id: 10,
    path: '/history',
    title: 'Sport',
    icon: bg,
    component: History,
    hiddeh: false,
  },
  {
    id: 11,
    path: '/history',
    title: 'Games',
    icon: bg,
    component: History,
    hiddeh: false,
  },
  {
    id: 12,
    path: '/history',
    title: 'Programming',
    icon: bg,
    component: History,
    hiddeh: false,
  },
  {
    id: 13,
    path: '/history',
    title: 'Live',
    icon: bg,
    component: History,
    hiddeh: false,
  },
  {
    id: 14,
    path: '/history',
    title: 'Dancing',
    icon: bg,
    component: History,
    hiddeh: false,
  },
];
