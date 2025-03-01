import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(
      <Header
        blogName="Olá, mundo!"
        blogDescription="A short description"
        logo="a.svg"
        showText={false}
      />,
    );
    expect(screen.queryByRole('paragraph')).toHaveStyle('visibility: 0');
  });

  it('should matches to snapshot', () => {
    const { container } = renderTheme(
      <Header
        blogName="Olá, mundo!"
        blogDescription="A short description"
        logo="a.svg"
      />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c3 {
        color: #000000;
        font-size: 3.2rem;
        text-transform: none;
      }

      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        gap: 3.2rem;
      }

      .c2 {
        visibility: 0;
        opacity: 0;
        visibility: 1;
        opacity: 1;
      }

      .c1 {
        width: 100%;
        max-width: 12rem;
      }

      <header
        class="c0"
      >
        <img
          alt="Olá, mundo!"
          class="c1"
          src="a.svg"
        />
        <div
          class="c2"
        >
          <h3
            class="c3"
          >
            Olá, mundo!
          </h3>
          <p
            class=""
          >
            A short description
          </p>
        </div>
      </header>
    `);
  });
});
