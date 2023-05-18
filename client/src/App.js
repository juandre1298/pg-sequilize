import "./styles/App.css";
import "./styles/home.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/login.css";
import "./styles/register.css";

import React from "react";

import { Header } from "./components/Header";
import { Register } from "./pages/Register";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
//import axios from "axios";

function App() {
  const Layout = () => {
    return (
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects/:id",
          element: <ProjectDetail />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
