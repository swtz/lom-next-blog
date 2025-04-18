import Head from 'next/head';
import {
  PostsTemplate,
  PostsTemplateProps,
} from '../../templates/PostsTemplate';
import { GetStaticPaths, GetStaticProps } from 'next';
import { loadPosts } from '../../api/load-posts';
import { useRouter } from 'next/router';
import { Loading } from '../../templates/Loading';

export default function CategoryPage({ posts, setting }: PostsTemplateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const categoryName = posts.data[0].attributes.categories.data.filter(
    (tag) => tag.attributes.slug === router.query.slug,
  )[0].attributes.displayName;

  return (
    <>
      <Head>
        <title>
          Category: {categoryName} - {setting.data.attributes.blogName}
        </title>
      </Head>
      <PostsTemplate posts={posts} setting={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: PostsTemplateProps | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.data.map(
      (post) =>
        post.attributes.categories.data.map((category) => ({
          params: { slug: category.attributes.slug },
        }))[0],
    );
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
    data = await loadPosts({ categorySlug: ctx.params.slug as string });
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
