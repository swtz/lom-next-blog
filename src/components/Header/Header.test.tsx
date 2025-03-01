import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(
      <Header
        blogName="Olá, mundo!"
        blogDescription="A short description"
        logo="a.svg"
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Olá, mundo!' }),
    ).toBeInTheDocument();
  });
});
