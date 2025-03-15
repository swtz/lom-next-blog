import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base, BaseProps } from '.';
import mock from './mock';

const props: BaseProps = mock;

describe('<Base />', () => {
  it('should render base elements', () => {
    renderTheme(<Base {...props} />);

    expect(
      screen.getByRole('img', {
        name: 'Mundo do Arroz - Um pedacinho do mundo que circunda um dos maiores carros-chefe da alimentação do PLANETA INTEIRO: o arroz.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(
      screen.getByText('Testando o CKEditor... and....'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should render match snapshot', () => {
    const { container } = renderTheme(<Base {...props} />);

    expect(container).toMatchSnapshot();
  });
});
