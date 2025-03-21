import Link from 'next/link';
import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { Tag } from '../../shared-typed/tag';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category;
  tags?: Tag;
};

export const ArticleMeta = ({
  createdAt,
  author,
  categories,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author.data !== null && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.data.attributes.slug}`}>
              {author.data.attributes.displayName}
            </Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {categories.data !== null && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.data.map((item) => {
                return (
                  <span key={`article-meta-cat-${item.id}`}>
                    <Link href={`/category/${item.attributes.slug}`}>
                      {item.attributes.displayName}
                    </Link>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
