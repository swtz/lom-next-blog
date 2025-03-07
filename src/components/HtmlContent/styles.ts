import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.xsmall} + 0.2rem);
    line-height: 1.5;

    p {
      margin: ${theme.spacings.medium} 0;
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

    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xsmall};
      background: ${theme.colors.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.medium} 0;
      font-size: ${theme.font.sizes.xsmall};
      width: 100%;
      overflow-x: auto;
    }

    pre code {
      color: inherit;
      background: inherit;
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
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
      margin: ${theme.spacings.medium} ${theme.spacings.small};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul,
    ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${theme.spacings.medium} 0;
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

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
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
