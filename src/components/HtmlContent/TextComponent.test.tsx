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
