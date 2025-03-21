import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 ${theme.spacings.large} 0;
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.xsmall};
    margin: 0 auto;

    ${HeadingStyles} {
      margin: 0 0 calc(${theme.spacings.xsmall} - 1rem);
    }

    @media ${theme.media.lteXSmall} {
      flex-flow: column wrap;
      text-align: center;

      > div {
        ${HeadingStyles} {
          margin: ${theme.spacings.xsmall} 0
            calc(${theme.spacings.small} - 1rem);
        }
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.medium};
    margin-right: ${theme.spacings.medium};
    max-width: 48rem;
  `}
`;
