import { MenuProps } from '.';

export default {
  links: [
    {
      id: 10,
      text: 'intro',
      link: '/home/1',
      newTab: false,
    },
    {
      id: 8,
      text: 'grid-one',
      link: '/home/2',
      newTab: false,
    },
    {
      id: 9,
      text: 'gallery',
      link: '/home/3',
      newTab: false,
    },
    {
      id: 11,
      text: 'grid-two',
      link: '/home/4',
      newTab: false,
    },
    {
      id: 7,
      text: 'contact',
      link: '/home/5',
      newTab: false,
    },
    {
      id: 12,
      text: 'Dev',
      link: 'https://github.com/swtz',
      newTab: true,
    },
  ],
  blogName: 'Hello, rice!',
  logo: '/assets/images/logo.svg',
} as MenuProps;
