import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  content,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        title={title}
        excerpt={excerpt}
        cover={cover}
        createdAt={createdAt}
        author={author}
        categories={categories}
      />
      <Styled.Container>
        <HtmlContent html={content} />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
