import { MenuProps } from '.';

export default {
  text: 'Hello, LogoLink!',
  srcImg: 'assets/images/logo.svg',
  link: 'https://www.jw.org',
  newTab: false,
  links: [
    {
      id: 10,
      children: 'intro',
      link: '#intro',
      newTab: false,
    },
    {
      id: 8,
      children: 'grid-one',
      link: '#grid-one',
      newTab: false,
    },
    {
      id: 9,
      children: 'gallery',
      link: '#gallery',
      newTab: false,
    },
    {
      id: 11,
      children: 'grid-two',
      link: '#grid-two',
      newTab: false,
    },
    {
      id: 7,
      children: 'contact',
      link: '#contact',
      newTab: false,
    },
    {
      id: 12,
      children: 'Dev',
      link: 'https://github.com/swtz',
      newTab: true,
    },
  ],
} as MenuProps;
