import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello, world!" />);
    expect(
      screen.getByRole('heading', { name: 'Hello, world!' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Hello, world!' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Hello, world!" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText('Hello, world!')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render internal link', () => {
    renderTheme(
      <LogoLink link="/target" text="Hello, world!" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText('Hello, world!')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render newTab prop with default value', () => {
    renderTheme(
      <LogoLink link="/target" text="Hello, world!" srcImg="image.jpg" />,
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
  });

  it('should render newTab prop with _blank value', () => {
    renderTheme(
      <LogoLink
        link="/target"
        text="Hello, world!"
        srcImg="image.jpg"
        newTab
      />,
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });

  it('should render internal link with text only', () => {
    renderTheme(<LogoLink link="/target" text="Hello, world!" />);
    expect(
      screen.getByRole('heading', { name: 'Hello, world!' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Hello, world!" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
