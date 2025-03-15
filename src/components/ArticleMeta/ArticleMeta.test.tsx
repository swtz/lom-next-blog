import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta } from '.';

import mock from './mock';

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...mock} />);

    expect(
      screen.getByRole('link', {
        name: mock.author.data.attributes.displayName,
      }),
    ).toHaveAttribute('href', '/author/surfista');

    expect(
      screen.getByRole('link', {
        name: mock.categories.data[0].attributes.displayName,
      }),
    ).toHaveAttribute('href', '/category/off-topic');

    expect(
      screen.getByRole('link', {
        name: mock.categories.data[1].attributes.displayName,
      }),
    ).toHaveAttribute('href', '/category/tech');
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...mock} />);

    expect(screen.getByText('12 de fev. de 2025')).toHaveAttribute(
      'datetime',
      mock.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with no author and categories', () => {
    mock.author.data = null;
    mock.categories.data = null;

    const { container } = renderTheme(<ArticleMeta {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
