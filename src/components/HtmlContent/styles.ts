import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.xlarge} 0;
      font-size: ${theme.font.sizes.xsmall};
      width: 100%;
      overflow-x: auto;
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
    }

    .image figcaption {
      background: ${theme.colors.mediumGray};
      font-size: ${theme.font.sizes.xsmall};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul,
    ol {
      margin: ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    .media iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }

    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      pre {
        font-size: 1.2rem;
      }

      .image-style-side {
        float: none;
        max-width: 100%;
        margin: ${theme.spacings.xlarge} 0;
      }
    }
  `};
`;
