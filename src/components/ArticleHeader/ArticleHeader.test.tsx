import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader } from '.';

import mock from './mock';

describe('<ArticleHeader />', () => {
  it('should render a title, a description, an image and the post metadata', () => {
    renderTheme(<ArticleHeader {...mock} />);

    expect(screen.getByText(mock.description)).toBeInTheDocument();

    expect(screen.getByAltText(`${mock.description}`)).toHaveAttribute(
      'alt',
      `${mock.description}`,
    );

    expect(
      screen.getByRole('img', { name: `${mock.description}` }),
    ).toHaveAttribute('src', '/assets/images/arroz-branco-saudavel.webp');

    expect(
      screen.getByRole('link', {
        name: `${mock.metadata.author.data.attributes.displayName}`,
      }),
    ).toBeInTheDocument();
  });

  it('should render a image with alternative text', () => {
    const image = {
      data: {
        attributes: {
          url: '/assets/images/arroz-branco-saudavel.webp',
          alternativeText: 'arroz-no-prato-com-erva-em-cima',
        },
      },
    };

    renderTheme(<ArticleHeader {...mock} image={image} />);

    expect(
      screen.getByRole('img', { name: 'arroz-no-prato-com-erva-em-cima' }),
    ).toHaveAttribute('alt', `${image.data.attributes.alternativeText}`);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleHeader {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
