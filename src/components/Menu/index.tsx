import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { useState } from 'react';

export type MenuProps = LogoLinkProps & {
  links: MenuLinkProps[];
};

export const Menu = ({ links = [], link, text, newTab, srcImg }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(!visible)}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </Styled.Button>
      <Styled.Wrapper visible={visible} onClick={() => setVisible(!visible)}>
        <LogoLink link={link} text={text} srcImg={srcImg} newTab={newTab} />
        <Styled.MenuNav>
          {links.map((item) => (
            <MenuLink key={item.id} link={item.link} newTab={item.newTab}>
              {item.children}
            </MenuLink>
          ))}
        </Styled.MenuNav>
      </Styled.Wrapper>
    </>
  );
};
