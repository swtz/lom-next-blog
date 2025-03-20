import { PostGrid } from '../../components/PostGrid';
import { Posts } from '../../shared-typed/posts';
import { SettingStrapi } from '../../shared-typed/setting-strapi';
import { Base } from '../Base';

export type PostsTemplateProps = {
  setting: SettingStrapi;
  posts?: Posts;
};

export const PostsTemplate = ({ setting, posts }: PostsTemplateProps) => {
  return (
    <Base setting={setting}>
      <PostGrid posts={posts} />
    </Base>
  );
};
