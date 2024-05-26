import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "@/pages/Layout";
import { Home } from "@/pages/Home";
import { Blog } from "@/pages/Blog";
import { ErrorPage } from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
    ],
  },
  { path: "*", element: <Navigate to="." /> },
]);
