import styled, { css } from 'styled-components';
import { Container as LogoLinkStyles } from '../LogoLink/styles';

type ButtonProps = {
  visible: boolean;
};

export const Wrapper = styled.menu<ButtonProps>`
  ${({ theme, visible }) => css`
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    width: 100%;
    max-width: 32rem;
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    position: fixed;
    height: 100vh;
    top: 0;
    left: ${visible ? 0 : '-30rem'};
    transition: all 300ms ease-in-out;

    ${LogoLinkStyles} {
      padding-top: ${theme.spacings.xxlarge};
      padding-bottom: ${theme.spacings.xsmall};

      > img {
        border: 0.4rem solid ${theme.colors.white};
        transition: all 300ms ease-in-out;
      }

      > img:hover {
        scale: 1.2;
      }
    }
  `}
`;

export const MenuNav = styled.nav`
  ${() => css`
    width: 100%;
    text-transform: uppercase;
  `}
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, visible }) => css`
    position: fixed;
    top: 0;
    left: ${visible ? '27rem' : 0};
    z-index: 500;
    margin: 2rem 0;
    width: 3rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
    transition: all 350ms ease-in-out;
  `}
`;
