import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { PostCard, PostCardProps } from '.';
import { postId, postProps } from './mock';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    id: postId,
    ...postProps,
  },
} as Meta<PostCardProps>;

export const Template: StoryFn<PostCardProps> = (args) => {
  return (
    <div style={{ maxWidth: '32rem' }}>
      <PostCard {...args} />
    </div>
  );
};
