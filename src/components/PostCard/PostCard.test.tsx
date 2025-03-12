import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';
import { postProps } from './mock';

const props: PostCardProps = postProps;

describe('<PostCard />', () => {
  it('should render a heading, cover and except', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByAltText(
        'a fox holding a box containing a bottle and ice cubes',
      ),
    ).toBeInTheDocument();

    expect(screen.getByText(props.excerpt)).toBeInTheDocument();

    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      `/post/${props.slug}`,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
