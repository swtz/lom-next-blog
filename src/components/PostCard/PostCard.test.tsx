import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';
import { postId, postProps } from './mock';

const props: PostCardProps = {
  id: postId,
  ...postProps,
};

describe('<PostCard />', () => {
  it('should render', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
  });
});
