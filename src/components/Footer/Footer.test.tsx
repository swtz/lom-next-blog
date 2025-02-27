import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render string passed to html prop as html', () => {
    const { container } = renderTheme(
      <Footer footerHtml={'<h1>Children</h1>'} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1 {
        font-size: 2.4rem;
      }

      .c1 p {
        margin: 4.0rem 0;
      }

      .c1 a,
      .c1 a:visited,
      .c1 a:link {
        color: #DC143C;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c1 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c1 pre {
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
        .c1 {
          font-size: 2rem;
        }

        .c1 pre {
          font-size: 1.2rem;
        }
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <h1>
              Children
            </h1>
          </div>
        </footer>
      </div>
    `);
  });
});
