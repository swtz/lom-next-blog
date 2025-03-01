import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';
import mock from './mock';

describe('<Header />', () => {
  it('should render an image, a heading and text, ', () => {
    renderTheme(<Header {...mock} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: mock.blogName }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Blog do Arroz é vida!/i }),
    ).toHaveAttribute('src', mock.logo);

    expect(screen.getByText(mock.blogDescription)).toBeInTheDocument();
  });

  it('should render image only', () => {
    renderTheme(<Header {...mock} showText={false} />);

    expect(
      screen.queryByRole('heading', { name: mock.blogName }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Blog do Arroz é vida!/i }),
    ).toHaveAttribute('src', mock.logo);

    expect(screen.queryByText(mock.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...mock} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
