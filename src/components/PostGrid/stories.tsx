import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { PostGrid, PostGridProps } from '.';
import { posts } from './mock';

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: {
    posts,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostGridProps>;

export const Template: StoryFn<PostGridProps> = (args) => {
  return (
    <div>
      <PostGrid {...args} />
    </div>
  );
};
