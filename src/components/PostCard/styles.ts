import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  text-align: center;

  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: 0;
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.small};
      transition: all 300ms ease-in-out;
    }

    a {
      text-decoration: none;
    }

    &:hover ${HeadingStyles} {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
  ${() => css`
    max-width: 100%;
    transition: opacity 300ms ease-in-out;
  `}
`;
export const Excerpt = styled.p`
  ${() => css``}
`;
