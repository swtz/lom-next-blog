import { ArticleHeaderProps } from '.';
import { ArticleMetaProps } from '../ArticleMeta';

const metadata = {
  createdAt: '2025-02-12T11:41:13.991Z',
  author: {
    data: {
      id: '1',
      attributes: {
        displayName: 'surfista',
        slug: 'surfista',
      },
    },
  },

  categories: {
    data: [
      {
        id: '4',
        attributes: {
          displayName: 'Off Topic',
          slug: 'off-topic',
        },
      },
      {
        id: '1',
        attributes: {
          displayName: 'tech',
          slug: 'tech',
        },
      },
    ],
  },
} as ArticleMetaProps;

export default {
  title: 'Hello, rice!',
  description: `Rice is a cereal grain and in its domesticated form is the staple food of over half of the world's population, particularly in Asia and Africa. Rice is the seed of the grass species Oryza sativa (Asian rice).`,
  image: {
    data: {
      attributes: {
        url: '/assets/images/stages-of-rice-milling.jpeg',
        alternativeText: null,
      },
    },
  },
  metadata: metadata,
} as ArticleHeaderProps;
