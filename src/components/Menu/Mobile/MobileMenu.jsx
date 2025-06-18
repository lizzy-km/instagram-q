import React from "react";
import HomeIcon from "../../../icons/HomeIcon";
import { NavLink, useLocation } from "react-router";
import ExplorerOutLine from "../../../icons/ExplorerOutLine";
import ExploreFill from "../../../icons/ExploreFill";
import HomeOutLineIcon from "../../../icons/HomeOutLineIcon";
import HomeFillIcon from "../../../icons/HomeFillIcon";
import MessengerOutLine from "../../../icons/MessengerOutLine";
import MessageFill from "../../../icons/MessageFill";
import Message from "../../../icons/Message";
import AddOutLine from "../../../icons/AddOutLine";
import { auth } from "../../../config/firebase/FirebaseConfig";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const {currentUser} = auth

  const routeName = pathname.slice(1, pathname.length);

  console.log(currentUser)

  return (
    <div className=" fixed h-[50px] w-full border-t bottom-0 left-0 flex justify-evenly items-center ">
      <NavLink
        to={"/"}
        className=" w-[48px] h-[48px] flex justify-center items-center "
      >
        {routeName.length < 1 ? <HomeFillIcon /> : <HomeOutLineIcon />}
      </NavLink>
      <NavLink
        to={"/explore"}
        className=" w-[48px] h-[48px] flex justify-center items-center "
      >
        {routeName == "explore" ? <ExploreFill /> : <ExplorerOutLine />}
      </NavLink>

      <div className=" w-[48px] h-[48px] flex justify-center items-center ">
        <AddOutLine />
      </div>

      <NavLink
        to={"/message"}
        className=" w-[48px] h-[48px] flex justify-center items-center "
      >
        {routeName == "message" ? <MessageFill /> : <Message />}
      </NavLink>

       <NavLink
        to={"/profile"}
        className=" w-[28px] h-[28px] rounded-full p-[1px] flex justify-center items-center "
      >
        <img className=" rounded-full w-full h-full " src={currentUser.photoURL} alt="" srcset="" />
      </NavLink>
    </div>
  );
};

export default MobileMenu;
