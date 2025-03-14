import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading>texto</Heading>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #000000;
        line-height: 1.2;
        font-size: 6.4rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 4.0rem;
        }
      }

      <h1
        class="c0"
      >
        texto
      </h1>
    `);
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(
      <Heading size="small">small-text</Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'small-text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">medium-text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'medium-text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">big-text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'big-text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">huge-text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'huge-text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">huge-text</Heading>);
    const heading = screen.getByRole('heading', { name: 'huge-text' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
