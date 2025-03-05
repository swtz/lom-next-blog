import { Cover } from '../../shared-typed/cover';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: Cover;
  metadata: ArticleMetaProps;
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  metadata,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading as="h2" size="big">
        {title}
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover
        src={cover.data.attributes.url}
        alt={
          cover.data.attributes.alternativeText
            ? cover.data.attributes.alternativeText
            : excerpt
        }
      ></Styled.Cover>
      <ArticleMeta {...metadata} />
    </Styled.Wrapper>
  );
};
