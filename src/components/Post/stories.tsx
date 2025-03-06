import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { Post, PostProps } from '.';

import mockHeader from '../Header/mock';
import mockArticleHeader from '../ArticleHeader/mock';
import mockHtmlContent from '../HtmlContent/mock';

export default {
  title: 'Post',
  component: Post,
  args: {
    ...mockHeader,
    ...mockArticleHeader,
    content: mockHtmlContent,
  },
} as Meta<PostProps>;

export const Template: StoryFn<PostProps> = ({ ...args }) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};
