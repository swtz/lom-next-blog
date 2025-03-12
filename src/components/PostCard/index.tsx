import * as Styled from './styles';
import { PostProps } from '../Post';
import Link from 'next/link';
import { Heading } from '../Heading';

export type PostCardProps = PostProps & {
  slug: string;
};

export const PostCard = ({ title, excerpt, cover, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`post/${slug}`} passHref>
        <Styled.Cover src={cover.data.attributes.url} />
      </Link>
      <Link href={`post/${slug}`} passHref>
        <Heading as="h2" size="small">
          {title}
        </Heading>
      </Link>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
