import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { PostsTemplate, PostsTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostsTemplateProps>;

export const Template: StoryFn<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
