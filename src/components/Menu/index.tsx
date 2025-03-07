import { LogoLink, LogoLinkProps } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';

export type MenuProps = LogoLinkProps & {
  links: MenuLinkProps[];
};

export const Menu = ({ links = [], link, text, newTab, srcImg }: MenuProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink link={link} text={text} srcImg={srcImg} newTab={newTab} />
      <Styled.MenuNav>
        {links.map((item) => (
          <MenuLink key={item.id} link={item.link} newTab={item.newTab}>
            {item.children}
          </MenuLink>
        ))}
      </Styled.MenuNav>
    </Styled.Wrapper>
  );
};
