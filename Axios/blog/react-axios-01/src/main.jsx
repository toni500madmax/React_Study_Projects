import React from "react";
import ReactDOM from "react-dom/client";

// App
import App from "./App.jsx";

// Style
import "./main.css";

// Routers
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Pages
import NewPost from "./routes/NewPost.jsx";
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
