import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

import mock from './mock';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu {...mock} />);

    expect(
      screen.getByRole('heading', { name: 'Hello, LogoLink!' }),
    ).toBeInTheDocument();
  });
});
