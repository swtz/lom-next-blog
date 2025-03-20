import styled, { css } from 'styled-components';

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    width: 100%;
    margin: 0 auto;
    max-width: ${theme.sizes.content};
  `}
`;
