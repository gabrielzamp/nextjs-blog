import { usePosts } from '../contexts/PostContext';
import { Post } from '../types/Post';

type Props = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: Props) => {
  const postsTest: any = [];

  const getPosts = async (posts: Post[]) => {
    const res = await fetch(
      'https://institucional.conasems.simoa.dev/noticias/'
    );
    const json = await res.json();
    posts.push(json);
  };
  getPosts(postsTest);

  return (
    <>
      <div>
        <h1>{postsTest?.response?.docs.title}</h1>
      </div>
    </>
  );
};

export default Page;
