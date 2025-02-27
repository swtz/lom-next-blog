import { screen } from '@testing-library/react';
import { HtmlContent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<HtmlContent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html="<b>content</b>" />);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html="<b>content</b>" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      .c0 p {
        margin: 4.0rem 0;
      }

      .c0 a,
      .c0 a:visited,
      .c0 a:link {
        color: #DC143C;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c0 pre {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        color: #FFFFFF;
        margin: 4.0rem 0;
        font-size: 1.6rem;
        width: 100%;
        overflow-x: auto;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 2rem;
        }

        .c0 pre {
          font-size: 1.2rem;
        }
      }

      <div
        class="c0"
      >
        <b>
          content
        </b>
      </div>
    `);
  });

  it('should render correct font-size', () => {
    renderTheme(<HtmlContent html="content" />);
    expect(screen.getByText('content')).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render correct paragraph element', () => {
    const { container } = renderTheme(<HtmlContent html="<b>content</b>" />);
    const div = container.querySelector('div');
    expect(div.tagName.toLowerCase()).toBe('div');
  });
});
