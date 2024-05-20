import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import postDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostsListPage from "../pages/PostsListPage";
import postListPageLoader from "../pages/PostsListPage/PostsListPage.loader";

// 최신 방식, 권장됨
const router = createBrowserRouter([
  {
    element: <DefaultLayout />, // path를 쓰지 않으면 layout
    children: [
      // layout안에 랩핑
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: postListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: postDetailPageLoader,
      },
    ],
  },
]);

export default router;
