import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base, BaseProps } from '.';
import mock from './mock';

const props: BaseProps = mock;

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base {...props} />);

    expect(
      screen.getByRole('heading', {
        name: mock.setting.data.attributes.blogName,
      }),
    ).toBeInTheDocument();
  });
});
