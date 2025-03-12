import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { PostCard, PostCardProps } from '.';
import { postProps } from './mock';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    title: postProps.title,
    excerpt: postProps.excerpt,
    cover: postProps.cover,
    slug: postProps.slug,
  },
} as Meta<PostCardProps>;

export const Template: StoryFn<PostCardProps> = (args) => {
  return (
    <div style={{ maxWidth: '32rem' }}>
      <PostCard {...args} />
    </div>
  );
};
