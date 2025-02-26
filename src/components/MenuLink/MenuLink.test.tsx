import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">link</MenuLink>);
    expect(screen.getByRole('link', { name: 'link' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a internal link', () => {
    renderTheme(<MenuLink link="/something">link</MenuLink>);
    expect(screen.getByRole('link', { name: 'link' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab>
        link
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'link' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://localhost">link</MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        color: #FFFFFF;
        -webkit-text-decoration: none;
        text-decoration: none;
        margin-bottom: 1.6rem;
        font-size: 1.8rem;
        border-right: 0.5rem solid #000000;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover {
        border-right: 0.5rem solid #DC143C;
        color: #DC143C;
      }

      <a
        class="c0"
        href="https://localhost"
        target="_self"
      >
        link
      </a>
    `);
  });
});
