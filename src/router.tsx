import Home from "@/features/home"
import { Layout } from "@/features/root/layout"
import { Empty } from "@/libs/atoms/empty"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Empty />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
