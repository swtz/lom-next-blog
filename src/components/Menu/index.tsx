import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import { useState } from 'react';

export type MenuPropsLinks = {
  id: number;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export const Menu = ({ links = [], blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>
          {links.map((item) => (
            <MenuLink key={item.id} link={item.link} newTab={item.newTab}>
              {item.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
