import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.sizes.max};
    margin: 0 auto;

    ${HeadingStyles} {
      margin: calc(${theme.spacings.xsmall} - 1rem) 0;

      @media ${theme.media.lteMedium} {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}

  p {
    ${({ theme }) => css`
      margin: ${theme.spacings.xsmall} 0;
    `}
  }

  img {
    width: 100%;
    height: auto;
  }

  hr {
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.mediumGray};
      margin: ${theme.spacings.large} 0;
    `}
  }
`;
