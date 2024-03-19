import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/home"
import PostPage from "../pages/postPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:postId",
    element: <PostPage />,
  },
])
