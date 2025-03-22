import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $sort: String = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      data {
        id
        attributes {
          ...settings
        }
      }
    }

    posts(
      filters: {
        slug: { eq: $postSlug }
        title: { eq: $postSearch }
        categories: { slug: { eq: $categorySlug } }
        author: { slug: { eq: $authorSlug } }
        tags: { slug: { eq: $tagSlug } }
      }
      pagination: { start: $start, limit: $limit }
      sort: [$sort]
    ) {
      data {
        id
        attributes {
          ...post
        }
      }
    }
  }
`;
