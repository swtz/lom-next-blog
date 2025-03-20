import * as Styled from './styles';
import { Post, PostProps } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { SettingStrapi } from '../../shared-typed/setting-strapi';
import { Base } from '../Base';

export type PostTemplateProps = {
  setting: SettingStrapi;
  post: PostProps;
};

export const PostTemplate = ({ setting, post }: PostTemplateProps) => {
  return (
    <Base setting={setting}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
    </Base>
  );
};
