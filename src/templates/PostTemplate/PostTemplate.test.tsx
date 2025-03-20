import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTemplate, PostTemplateProps } from '.';
import mock from './mock';

const props: PostTemplateProps = mock;

describe('<PostTemplate />', () => {
  it('should render the Heading component from Post component and the PostTag component', () => {
    renderTheme(<PostTemplate {...props} />);

    expect(
      screen.getByRole('heading', { name: mock.post.title }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'health' })).toHaveAttribute(
      'href',
      '/tag/health',
    );
  });
});
