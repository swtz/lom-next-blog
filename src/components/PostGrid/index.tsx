import { Posts } from '../../shared-typed/posts';
import { PostCard } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts: Posts;
};

export const PostGrid = ({ posts }: PostGridProps) => {
  if (!posts.data) {
    return (
      <Styled.Wrapper>
        <Styled.NotFound>Nenhum post encontrado.</Styled.NotFound>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      {posts.data.length > 0 && (
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
      )}
    </Styled.Wrapper>
  );
};
