import { Posts } from '../../shared-typed/posts';
import { PostCard } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts: Posts;
};

export const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Grid>
        {posts.data.map((post) => (
          <PostCard
            key={post.id}
            title={post.attributes.title}
            excerpt={post.attributes.excerpt}
            cover={post.attributes.cover}
            slug={post.attributes.slug}
          />
        ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
