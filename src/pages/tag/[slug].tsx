import Head from 'next/head';
import {
  PostsTemplate,
  PostsTemplateProps,
} from '../../templates/PostsTemplate';
import { GetStaticPaths, GetStaticProps } from 'next';
import { loadPosts } from '../../api/load-posts';
import { useRouter } from 'next/router';
import { Loading } from '../../templates/Loading';

export default function TagPage({ posts, setting }: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const tagName = posts.data[0].attributes.tags.data.filter(
    (tag) => tag.attributes.slug === router.query.slug,
  )[0].attributes.displayName;

  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.data.attributes.blogName}
        </title>
      </Head>
      <PostsTemplate posts={posts} setting={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }; // 'paths' vazio e 'fallback' true quer dizer que o Next.js vai gerar as páginas no momento da requisição
};

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ tagSlug: ctx.params.slug as string });
  } catch (e) {
    data = null;
    console.log('Error: getStaticProps from Index component', e.message);
  }

  if (!data || !data.posts || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
    revalidate: 24 * 60 * 60,
  };
};
