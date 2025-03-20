import { renderTheme } from '../../styles/render-theme';
import { PostsTemplate, PostsTemplateProps } from '.';
import mock from './mock';

const props: PostsTemplateProps = mock;

describe('<PostsTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
