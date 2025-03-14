import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { ArticleMeta, ArticleMetaProps } from '.';
import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
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
  },
} as Meta<ArticleMetaProps>;

export const Template: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
