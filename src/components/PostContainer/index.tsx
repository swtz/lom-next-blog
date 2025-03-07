import styled, { css, DefaultTheme } from 'styled-components';

const postContainerStyles = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.content};
  `,
};

type PostContainerProps = {
  size: 'max' | 'content';
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
    ${postContainerStyles[size](theme)};

    @media ${theme.media.lteXSmall} {
      padding: 0 ${theme.spacings.xsmall};
    }
  `}
`;
