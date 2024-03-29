import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./about.tsx";
import Blog from "./blog.tsx";
import BlogOne from "./blog-one.tsx";
import Contact from "./contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/one",
    element: <BlogOne />,
  },
  {
    path: "/blog/two",
    element: <BlogOne />,
  },
  {
    path: "/blog/three",
    element: <BlogOne />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
