import styled, { css } from 'styled-components';
import { Wrapper as PostCardStyles } from '../PostCard/styles';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
  `}
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.large};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: ${theme.spacings.large};
    padding: calc(${theme.spacings.small} + 0.2rem);

    ${PostCardStyles} {
      padding: 1rem;
      border: 0.5rem solid ${theme.colors.secondary};
      border-radius: 5%;
      height: 100%;
      transition: border-color 300ms ease-in-out;
    }

    ${PostCardStyles}:hover {
      border-color: ${theme.colors.darkText};
    }
  `}
`;
