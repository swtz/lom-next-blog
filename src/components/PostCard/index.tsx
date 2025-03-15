import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';
import { Cover } from '../../shared-typed/cover';

export type PostCardProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: Cover;
  slug: string;
};

export const PostCard = ({ title, excerpt, cover, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`} passHref>
        <Styled.Cover
          src={cover.data.attributes.url}
          alt="a fox holding a box containing a bottle and ice cubes"
        />
      </Link>
      <Link href={`/post/${slug}`} passHref>
        <Heading as="h2" size="small">
          {title}
        </Heading>
      </Link>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
