import { Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import Profile from "../pages/Profile/Profile";
import Message from "../pages/Message/Message";
import Dashboard from "../pages/Dashboard/Dashboard";
import Setting from "../pages/Setting/Setting";
import {  auth } from "../config/firebase/FirebaseConfig";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import VerifyEmail from "../pages/Auth/recover/VerifyEmail";
import AuthLayout from "../pages/Auth/AuthLayout";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import NotFound from "../NotFound";

const mainChildren = [
  {
    path: "/",
    index: true,

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
];
const authChildren = [
  {
    path: "/*",
    Component: NotFound,
  },
  {
    path: "/",
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
];

const routeList = [
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound />,
    children: mainChildren,
  },
];

const authRoute = [
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <NotFound />,
    children: authChildren,
  },
];

const ProtectedRoutes = () => {
  const [user, loading, error] = useAuthState(auth);
  const { isLoading } = useSelector((state) => state.auth);

  const router = createBrowserRouter(user ? routeList : authRoute);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {loading || isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <img
            className=" w-[100px] h-[100px] rounded-lg "
            src="/src/icons/InstagramLogo.png"
            alt=""
            srcset=""
          />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </Suspense>
  );
};

export default ProtectedRoutes;
