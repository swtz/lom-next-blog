import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';

import mockArticleHeader from '../ArticleHeader/mock';
import mockHtmlContent from '../HtmlContent/mock';

const props: PostProps = {
  ...mockArticleHeader,
  content: mockHtmlContent,
};

describe('<Post />', () => {
  it('should render elements from the ArticleHeader, and HtmlContent components inside Post.', () => {
    const spreadProps = { ...props };
    renderTheme(<Post {...spreadProps} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(screen.getByAltText(props.excerpt)).toBeInTheDocument();

    expect(screen.getByRole('blockquote')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const spreadProps = { ...props };
    const { container } = renderTheme(<Post {...spreadProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
