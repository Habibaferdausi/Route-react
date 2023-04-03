import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Contract from "./Component/Contract";
import Home from "./Component/Home";

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
      },
      {
        path: "contract",
        element: <Contract></Contract>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
