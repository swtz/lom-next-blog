import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingStrapi } from '../../shared-typed/setting-strapi';
import * as Styled from './styles';

export type BaseProps = {
  setting: SettingStrapi;
  children: React.ReactNode;
};

export const Base = ({ setting, children }: BaseProps) => {
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

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={setting.data.attributes.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
