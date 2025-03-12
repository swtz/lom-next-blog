import { Cover } from './cover';

export type PostsData = {
  data: Data[];
};

export type Data = {
  id: string;
  attributes: Atributes;
};

export type Atributes = {
  title: string;
  excerpt: string;
  cover: Cover;
  slug: string;
};
