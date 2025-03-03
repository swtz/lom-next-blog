import { ArticleMetaProps } from '.';

export default {
  createdAt: '2025-02-12T11:41:13.991Z', // value from current Strapi API
  author: {
    data: {
      id: '123456789',
    },
    attributes: {
      slug: 'otavio-miranda',
      displayName: 'Otávio Miranda',
    },
  },

  categories: {
    data: [
      {
        id: 'asdslgyh65',
        attributes: {
          displayName: 'Tech',
          slug: 'tech',
        },
      },
      {
        id: 'asdslgyh66',
        attributes: {
          displayName: 'JS',
          slug: 'javascript',
        },
      },
    ],
  },
} as ArticleMetaProps;
