import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `<b>Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Ipsa beatae voluptate quod rem quisquam
    id illo ea voluptatum quidem enim autem, voluptatem necessitatibus
    vel, a veritatis debitis porro, nam eveniet?</b>`,
  },
} as Meta;

export const Template: StoryFn<HtmlContentProps> = (args) => (
  <div>
    <HtmlContent {...args} />
  </div>
);
