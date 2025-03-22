import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    url
    alternativeText
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    newTab
    text
  }

  fragment tag on Tag {
    displayName
    slug
  }

  fragment category on Category {
    displayName
    slug
  }

  fragment author on Author {
    displayName
    slug
  }

  fragment post on Post {
    title
    slug
    excerpt
    content
    allowComments
    createdAt
    tags {
      data {
        id
        attributes {
          ...tag
        }
      }
    }
    author {
      data {
        id
        attributes {
          ...author
        }
      }
    }
    categories {
      data {
        id
        attributes {
          ...category
        }
      }
    }
    cover {
      data {
        id
        attributes {
          ...image
        }
      }
    }
  }

  fragment settings on Setting {
    blogName
    blogDescription
    logo {
      data {
        id
        attributes {
          ...image
        }
      }
    }
    menuLink {
      ...menuLink
    }
    text
  }
`;
