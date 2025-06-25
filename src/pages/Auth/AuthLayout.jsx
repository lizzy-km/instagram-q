import React from 'react'
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <main className=" w-full h-full flex flex-col mx-auto justify-center items-center ">
      <article className=" mt-[32px] w-[40%] h-[90%] justify-center items-center flex ">
        <Outlet  />
        {/* <Children/> */}
      </article>
    </main>
  );
}

export default AuthLayout