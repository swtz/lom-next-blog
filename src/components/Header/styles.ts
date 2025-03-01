import styled, { css } from 'styled-components';
import { HeaderProps } from '.';

const show = () => css`
  visibility: 1;
  opacity: 1;
`;

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.large};
  `}
`;

export const TextWrapper = styled.div<Pick<HeaderProps, 'showText'>>`
  visibility: 0;
  opacity: 0;

  ${({ showText }) => css`
    ${showText ? show() : null}
  `}
`;

export const Text = styled.p``;

export const ImageWrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    max-width: 12rem;
  `}
`;
