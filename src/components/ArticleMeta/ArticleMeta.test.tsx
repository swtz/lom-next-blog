import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

const props: ArticleMetaProps = {
  title: 'any',
};

describe('<ArticleMeta />', () => {
  it('should render', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
