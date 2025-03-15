import { Author } from './author';
import { Category } from './category';
import { Cover } from './cover';
import { Tag } from './tag';

export type PostsData = {
  data: Data[];
};

export type Data = {
  id: string;
  attributes: Attributes;
};

export type Attributes = {
  title: string;
  excerpt: string;
  cover: Cover;
  slug: string;
  tags: Tag;
  author: Author;
  categories: Category;
  content: string;
  allowComments?: boolean;
  createdAt: string;
};
