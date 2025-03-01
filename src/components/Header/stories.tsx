import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    children: 'Olá, mundo!',
  },
} as Meta;

export const Template: StoryFn<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
