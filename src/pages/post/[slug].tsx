import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostsTemplateProps } from '../../templates/PostsTemplate';
import { loadPosts } from '../../api/load-posts';
import { useRouter } from 'next/router';
import { PostTemplate } from '../../templates/PostTemplate';
import { Loading } from '../../templates/Loading';

export default function PostPage({ posts, setting }: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const post = posts.data[0].attributes;
  const sttg = setting.data.attributes;

  return (
    <>
      <Head>
        <title>
          {post.title} - {sttg.blogName}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate post={posts.data[0].attributes} setting={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: PostsTemplateProps | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }));
  } catch (e) {
    data = null;
    console.log('Error: getStaticProps from Index component', e.message);
  }

  if (!data || !data.posts || !data.posts.data.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: ctx.params.slug as string });
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
  };
};
