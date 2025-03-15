import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

const props: PostTagsProps = mock;

describe('<PostTags />', () => {
  it('should render the correct number of link elements', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(props.tags.data.length);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with no tags', () => {
    props.tags.data = null;
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container).toMatchSnapshot();
  });
});
