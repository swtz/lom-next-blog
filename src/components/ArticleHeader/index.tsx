import { Cover } from '../../shared-typed/cover';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  title: React.ReactNode;
  description: string;
  image: Cover;
  metadata: ArticleMetaProps;
};

export const ArticleHeader = ({
  title,
  description,
  image,
  metadata,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading as="h2" size="big">
        {title}
      </Heading>
      <p>{description}</p>
      <img
        src={image.data.attributes.url}
        alt={
          image.data.attributes.alternativeText
            ? image.data.attributes.alternativeText
            : description
        }
      />
      <ArticleMeta {...metadata} />
    </Styled.Wrapper>
  );
};
