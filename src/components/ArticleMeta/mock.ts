import { ArticleMetaProps } from '.';

export default {
  createdAt: '2025-02-12T11:41:13.991Z', // value from current Strapi API
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
