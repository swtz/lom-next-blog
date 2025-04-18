import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';
import { posts } from './mock';

const props: PostGridProps = { posts };

describe('<PostGrid />', () => {
  it('should render the correct number of PostCard components', () => {
    renderTheme(<PostGrid {...props} />);

    expect(screen.getAllByRole('heading')).toHaveLength(
      props.posts.data.length,
    );
  });

  it('should render a text if not post', () => {
    renderTheme(<PostGrid posts={{ data: null }} />);

    expect(screen.getByText('Nenhum post encontrado.')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(container).toMatchSnapshot();
  });
});
