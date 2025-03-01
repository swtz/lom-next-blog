import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { ArticleMeta, ArticleMetaProps } from '.';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
} as Meta<ArticleMetaProps>;

export const Template: StoryFn<ArticleMetaProps> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
