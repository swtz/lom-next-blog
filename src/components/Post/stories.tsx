import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { Post, PostProps } from '.';

import mockArticleHeader from '../ArticleHeader/mock';
import mockHtmlContent from '../HtmlContent/mock';

export default {
  title: 'Post',
  component: Post,
  args: {
    ...mockArticleHeader,
    content: mockHtmlContent,
  },
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
    author: {
      control: {
        type: null,
      },
    },
    categories: {
      control: {
        type: null,
      },
    },
    cover: {
      control: {
        type: null,
      },
    },
  },
} as Meta<PostProps>;

export const Template: StoryFn<PostProps> = ({ ...args }) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};
