import { MenuPropsLinks } from '../components/Menu';
import { Cover } from './cover';

export type SettingStrapi = {
  data: Data;
};

type Data = {
  id: string;
  attributes: Attributes;
};

type Attributes = {
  blogName: string;
  blogDescription: string;
  logo: Cover;
  menuLink: MenuPropsLinks[];
  text: string;
};
