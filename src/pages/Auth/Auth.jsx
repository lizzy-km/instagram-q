import React from "react";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <main className=" w-full h-full flex flex-col mx-auto justify-center items-center ">
      <article className=" mt-[32px] w-[40%] h-[90%] justify-center items-center flex ">
        <Outlet />
      </article>
    </main>
  );
};

export default AuthPage;
