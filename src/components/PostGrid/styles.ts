import styled, { css } from 'styled-components';
import { Wrapper as PostCardStyles } from '../PostCard/styles';

export const Wrapper = styled.div`
  ${() => css``}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 3rem;
    padding: 1rem;

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
