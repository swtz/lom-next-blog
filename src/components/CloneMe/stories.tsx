import { Meta, StoryFn } from '@storybook/react/types-6-0';
import CloneMe, { CloneMeProps } from '.';

export default {
  title: 'CloneMe',
  component: CloneMe,
} as Meta;

export const Template: StoryFn<CloneMeProps> = (args) => (
  <div>
    <CloneMe {...args} />
  </div>
);
