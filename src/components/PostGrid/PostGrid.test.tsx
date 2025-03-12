import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';
import { posts } from './mock';

const props: PostGridProps = { posts };

describe('<PostGrid />', () => {
  it('should render', () => {
    renderTheme(<PostGrid {...props} />);

    expect(
      screen.getByRole('heading', {
        name: props.posts.data[0].attributes.title,
      }),
    ).toBeInTheDocument();
  });
});
