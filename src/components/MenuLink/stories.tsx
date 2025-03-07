import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { MenuLink, MenuLinkProps } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'texto do MenuLink',
    link: 'https://github.com/swtz',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
    newTab: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<MenuLinkProps>;

export const Template: StoryFn<MenuLinkProps> = (args) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: theme.colors.primary,
        padding: theme.spacings.large,
      }}
    >
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
