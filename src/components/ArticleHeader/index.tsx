import { Cover } from '../../shared-typed/cover';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: Cover;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading as="h2">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover
        src={cover.data.attributes.url}
        alt={
          cover.data.attributes.alternativeText
            ? cover.data.attributes.alternativeText
            : excerpt
        }
      ></Styled.Cover>
      <ArticleMeta
        author={author}
        categories={categories}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};
