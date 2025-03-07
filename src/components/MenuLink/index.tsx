import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
  id?: number;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Link href={link} passHref legacyBehavior>
        <Styled.Container target={target}>{children}</Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
