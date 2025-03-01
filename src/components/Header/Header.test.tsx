import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header>Olá, mundo!</Header>);

    expect(
      screen.getByRole('heading', { name: 'Olá, mundo!' }),
    ).toBeInTheDocument();
  });
});
