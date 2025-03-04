import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
  argTypes: {
    metadata: {
      control: {
        type: null,
      },
    },
    image: {
      control: {
        type: null,
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
