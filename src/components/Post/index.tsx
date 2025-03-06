import * as Styled from './styles';
import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { Header } from '../Header';

import { Cover } from '../../shared-typed/cover';

import { ArticleMetaProps } from '../ArticleMeta';

export type PostProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
  title: string;
  excerpt: string;
  cover: Cover;
  metadata: ArticleMetaProps;
  content: string;
};

export const Post = ({
  blogName,
  blogDescription,
  logo,
  showText,
  title,
  excerpt,
  cover,
  metadata,
  content,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <Header
        blogName={blogName}
        blogDescription={blogDescription}
        logo={logo}
        showText={showText}
      />
      <ArticleHeader
        title={title}
        excerpt={excerpt}
        cover={cover}
        metadata={metadata}
      />
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
