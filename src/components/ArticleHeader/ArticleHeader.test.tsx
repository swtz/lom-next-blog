import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader } from '.';

import mock from './mock';

describe('<ArticleHeader />', () => {
  it('should render', () => {
    renderTheme(<ArticleHeader {...mock} />);

    expect(
      screen.getByRole('heading', { name: `${mock.title}` }),
    ).toBeInTheDocument();
  });
});
