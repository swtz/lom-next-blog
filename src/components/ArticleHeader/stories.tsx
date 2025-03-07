import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
  argTypes: {
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
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleHeaderProps>;

export const Template: StoryFn<ArticleHeaderProps> = (args) => {
  return (
    <>
      <div>
        <ArticleHeader {...args} />
      </div>
      <p>Aqui se inicia o conteúdo do post</p>
    </>
  );
};
