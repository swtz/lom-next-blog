import Head from 'next/head';
import { GetStaticProps } from 'next';
import { PostsTemplate, PostsTemplateProps } from '../templates/PostsTemplate';
import { loadPosts } from '../api/load-posts';

export default function Index({ posts, setting }: PostsTemplateProps) {
  return (
    <>
      <Head>
        <title>{setting.data.attributes.blogName}</title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate posts={posts} setting={setting} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async () => {
  let data = null;

  try {
    data = await loadPosts();
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
