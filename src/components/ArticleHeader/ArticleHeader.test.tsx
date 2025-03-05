import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader } from '.';

import mock from './mock';

describe('<ArticleHeader />', () => {
  it('should render a title, a description, an image and the post metadata', () => {
    renderTheme(<ArticleHeader {...mock} />);

    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();

    expect(screen.getByAltText(`${mock.excerpt}`)).toHaveAttribute(
      'alt',
      `${mock.excerpt}`,
    );

    expect(
      screen.getByRole('img', { name: `${mock.excerpt}` }),
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
        id: 1,
        attributes: {
          url: '/assets/images/arroz-branco-saudavel.webp',
          alternativeText: 'arroz-no-prato-com-erva-em-cima',
        },
      },
    };

    renderTheme(<ArticleHeader {...mock} cover={image} />);

    expect(
      screen.getByRole('img', { name: 'arroz-no-prato-com-erva-em-cima' }),
    ).toHaveAttribute('alt', `${image.data.attributes.alternativeText}`);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleHeader {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
