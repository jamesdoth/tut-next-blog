import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ postData }) => {
  return (
    <>
      <Head>
        <title>ID Placeholder</title>
      </Head>
      <main>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </main>
    </>
  );
};

export default Post;
