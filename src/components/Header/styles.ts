import styled, { css } from 'styled-components';
import { HeaderProps } from '.';

export const Container = styled.header`
  ${() => css``}
`;

export const TextWrapper = styled.div<Pick<HeaderProps, 'showText'>>``;

export const Text = styled.p``;

export const ImageWrapper = styled.div``;

export const Image = styled.img``;
