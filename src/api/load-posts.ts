import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostsTemplateProps } from '../templates/PostsTemplate';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<PostsTemplateProps> => {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
