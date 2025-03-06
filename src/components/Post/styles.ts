import styled, { css } from 'styled-components';
import { Container as HtmlContentStyles } from '../HtmlContent/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${theme.sizes.max};
    margin: 0 auto;
  `}

  ${HtmlContentStyles} {
    ${({ theme }) => css`
      width: 100%;
      max-width: ${theme.sizes.content};
    `}

    p:first-child {
      margin-top: 0;
    }
  }
`;
