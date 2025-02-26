import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import CloneMe from '.';

describe('CloneMe', () => {
  it('should render the title', () => {
    renderTheme(<CloneMe title="Hello World" />);
    expect(
      screen.getByRole('heading', { name: 'Hello World' }),
    ).toBeInTheDocument();
  });

  it('should render the default value of title', () => {
    renderTheme(<CloneMe />);
    expect(
      screen.getByRole('heading', { name: 'change me' }),
    ).toBeInTheDocument();
  });
});
