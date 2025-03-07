import styled, { css } from 'styled-components';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    max-width: 32rem;
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
  `}
`;

export const MenuNav = styled.nav`
  ${() => css``}
`;
