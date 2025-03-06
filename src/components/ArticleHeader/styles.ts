import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyles} {
      font-size: ${theme.font.sizes.xxlarge};
      margin: 0;
      margin-bottom: ${theme.spacings.medium};

      @media ${theme.media.lteMedium} {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: ${theme.spacings.medium} 0;

    @media ${theme.media.lteMedium} {
      font-size: 2rem;
    }
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
