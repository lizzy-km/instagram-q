import React, { Suspense } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import Profile from "../pages/Profile/Profile";
import Message from "../pages/Message/Message";
import Dashboard from "../pages/Dashboard/Dashboard";
import Setting from "../pages/Setting/Setting";
import { app, auth } from "../config/firebase/FirebaseConfig";
import { getAuth } from "firebase/auth";
import AuthPage from "../pages/Auth/Auth";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import VerifyEmail from "../pages/Auth/recover/VerifyEmail";

const routeLists = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",

        Component: Home,
      },
      {
        path: "explore",
        Component: Explore,
      },
      {
        path: ":username",
        Component: Profile,
      },
      {
        path: "message",
        Component: Message,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "accounts",
        Component: Setting,
      },
    ],
  },
];

const authRoutes = [
  {
    path: "/",
    Component: AuthPage,
    errorElement: <Login />,
    children: [
      {
        path: "/*",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/forgot-pass",
        Component: VerifyEmail,
      },
    ],
  },
];

const ProtectedRoutes = () => {
  const { currentUser } = getAuth(app);

  const router = createBrowserRouter(currentUser ? routeLists : authRoutes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default ProtectedRoutes;
