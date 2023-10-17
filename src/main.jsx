import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import Signup from "./Pages/Auth/Signup";
import SignIn from "./Pages/Auth/SignIn";
import AuthProvider from "./Provider/AuthProvider";
import Users from "./components/Users";
import Main from "./Layout/Main";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch(
            "https://coffe-store-server-bpldhrdui-mdsabbirhowlader420-gmailcom.vercel.app/coffee"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffe-store-server-bpldhrdui-mdsabbirhowlader420-gmailcom.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://coffe-store-server-bpldhrdui-mdsabbirhowlader420-gmailcom.vercel.app/users"
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
