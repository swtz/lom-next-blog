import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';

import mockHeader from '../Header/mock';
import mockArticleHeader from '../ArticleHeader/mock';
import mockHtmlContent from '../HtmlContent/mock';

const props: PostProps = {
  ...mockHeader,
  ...mockArticleHeader,
  content: mockHtmlContent,
};

describe('<Post />', () => {
  it('should render', () => {
    const spreadProps = { ...props };
    renderTheme(<Post {...spreadProps} />);

    expect(
      screen.getByRole('heading', { name: 'Blog do Arroz é vida!' }),
    ).toBeInTheDocument();
  });
});
