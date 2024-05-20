import { useLoaderData } from "react-router-dom";

const PostDetailPage = () => {
  const post = useLoaderData();

  return (
    <>
      <h1>DetailPage</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default PostDetailPage;
