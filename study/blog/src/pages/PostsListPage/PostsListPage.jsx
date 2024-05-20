import { Link, useLoaderData } from "react-router-dom";

const PostsListPage = () => {
  const posts = useLoaderData();
  return (
    <>
      <h1>ListPage</h1>

      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default PostsListPage;
