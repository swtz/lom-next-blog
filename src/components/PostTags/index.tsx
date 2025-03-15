import Link from 'next/link';
import { Tag } from '../../shared-typed/tag';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: Tag;
};

export const PostTags = ({ tags }: PostTagsProps) => {
  if (!tags.data) {
    return null;
  }

  return (
    <Styled.Wrapper>
      tags:
      {tags.data.map((tag) => (
        <span key={tag.id}>
          <Link href={`/tag/${tag.attributes.slug}`} passHref>
            {tag.attributes.displayName}
          </Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
