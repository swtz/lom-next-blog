import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';

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
      <PostContainer size="max">
        <ArticleHeader
          title={title}
          excerpt={excerpt}
          cover={cover}
          createdAt={createdAt}
          author={author}
          categories={categories}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
