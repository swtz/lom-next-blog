import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { PostGrid } from '../../components/PostGrid';
import { Posts } from '../../shared-typed/posts';
import { SettingStrapi } from '../../shared-typed/setting-strapi';
import * as Styled from './styles';

export type BaseProps = {
  setting: SettingStrapi;
  posts: Posts;
};

export const Base = ({ setting, posts }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={setting.data.attributes.menuLink}
        blogName={setting.data.attributes.blogName}
        logo={setting.data.attributes.logo.data.attributes.url}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={setting.data.attributes.blogName}
          blogDescription={setting.data.attributes.blogDescription}
          logo={setting.data.attributes.logo.data.attributes.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>
        <PostGrid posts={posts} />
      </Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={setting.data.attributes.text} />
      </Styled.FooterContainer>
    </Styled.Wrapper>
  );
};
