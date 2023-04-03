import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Contract from "./Component/Contract";
import Home from "./Component/Home";
import FriendDetails from "./Component/friendDetails";
import Path from "./Component/Path";

//const router = createBrowserRouter([
// {
//   path: "/",
//   element: <div>Hello world!</div>,
// },
// {
//   path: "/about",
//   element: <About></About>,
// },
// {
//   path: "/contact",
//   element: <Contract></Contract>,
// },
//]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "about",
        element: <About></About>,
        loader: () => fetch("https:jsonplaceholder.typicode.com/users"),
      },
      {
        path: "contract",
        element: <Contract></Contract>,
      },

      {
        path: "path",
        element: <Path></Path>,
        loader: () => fetch("https:jsonplaceholder.typicode.com/posts"),
      },

      {
        path: "singledata/:singledataId",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https:jsonplaceholder.typicode.com/users/${params.singledataId}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
