import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import InstagramLogo from "../icons/InstagramLogo";
import HomeIcon from "../icons/HomeIcon";
import LogoOutline from "../icons/LogoOutline";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "../components/Menu/Mobile/MobileMenu";
import { auth } from "../config/firebase/FirebaseConfig";
import HomeFillIcon from "../icons/HomeFillIcon";
import HomeOutLineIcon from "../icons/HomeOutLineIcon";
import ExploreFill from "../icons/ExploreFill";
import ExplorerOutLine from "../icons/ExplorerOutLine";
import MessageFill from "../icons/MessageFill";
import Message from "../icons/Message";
import AddOutLine from "../icons/AddOutLine";
import { PiHeartThin } from "react-icons/pi";
import HeartFill from "../icons/HeartFill";
import HeartOutLine from "../icons/HeartOutLine";
import NotificationDrawer from "../components/Notification/Notification";

const MainLayout = () => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1159px)" });

  const { pathname } = useLocation();
  const { currentUser } = auth;

  const routeName = pathname.slice(1, pathname.length);

  const menuStyle =
    "  transition-all  flex flex-wrap  h-screen max-1xl:w-[73px]  w-[245px]  border-secondary pt-2 px-[12px] pb-[20px] ";

  return (
    <div className="  flex relative w-full h-full  ">
      {/* SideMenu  */}
      {!isMobile && (
        <div
          style={{
            width: isNotiOpen && "73px",
            borderRight: isNotiOpen ? "none" : "1px solid #dbdbdb",
          }}
          className={menuStyle}
        >
          <div className=" w-full h-full flex flex-col  ">
            {/* Logo  */}
            <NavLink
              to={"/"}
              className=" h-[92px] w-full pt-[25px] px-3 pb-[16px] "
            >
              {isNotiOpen ? (
                <LogoOutline className={" flex "} />
              ) : !isTablet ? (
                <InstagramLogo className={"  flex "} />
              ) : (
                <LogoOutline className={" flex "} />
              )}
            </NavLink>

            {/* Menu Items */}
            <div className=" menu flex  flex-col w-full h-auto ">
              <NavLink
                to={"/"}
                className=" transition-colors w-full min-h-[64PX] rounded-md py-2  "
              >
                <div
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:bg-secondary-gray cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {/* Icon  */}
                  {routeName.length < 1 ? (
                    <HomeFillIcon />
                  ) : (
                    <HomeOutLineIcon />
                  )}
                  {!isNotiOpen && (
                    <p className="  max-1xl:hidden flex ">Home</p>
                  )}
                </div>
              </NavLink>

              <div className=" transition-colors w-full min-h-[64PX] rounded-md py-2  ">
                <NavLink
                  to={"/explore"}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:bg-secondary-gray cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {routeName == "explore" ? (
                    <ExploreFill />
                  ) : (
                    <ExplorerOutLine />
                  )}
                  {!isNotiOpen && (
                    <p className="  max-1xl:hidden flex ">Explore</p>
                  )}{" "}
                </NavLink>
              </div>
              <div className=" transition-colors w-full min-h-[64PX] rounded-md py-2  ">
                <div
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:bg-secondary-gray cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  <AddOutLine />
                  {!isNotiOpen && (
                    <p className="  max-1xl:hidden flex ">Add post</p>
                  )}{" "}
                </div>
              </div>

              <div className=" transition-colors w-full min-h-[64PX] rounded-md py-2  ">
                <NavLink
                  to={"/message"}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:bg-secondary-gray cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {routeName == "message" ? <MessageFill /> : <Message />}
                  {!isNotiOpen && (
                    <p className="  max-1xl:hidden flex ">Messages</p>
                  )}{" "}
                </NavLink>
              </div>

              <div className=" transition-colors w-full min-h-[64PX] rounded-md py-2  ">
                <div
                  onClick={() => setIsNotiOpen(!isNotiOpen)}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:bg-secondary-gray cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {isNotiOpen ? (
                    <HeartFill />
                  ) : (
                    <HeartOutLine />
                  )}
                  {!isNotiOpen && (
                    <p className="  max-1xl:hidden flex ">Notifications</p>
                  )}{" "}
                </div>
              </div>

              <div className=" transition-colors w-full min-h-[64PX] rounded-md py-2  ">
                <NavLink
                  to={"/profile"}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:bg-secondary-gray cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  <img
                    className=" rounded-full w-[28px] h-[28px] "
                    src={currentUser.photoURL}
                    alt=""
                    srcset=""
                  />
                  {!isNotiOpen && (
                    <p className="  max-1xl:hidden flex ">Profile</p>
                  )}{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NotiFication  */}
      <section
        style={{
          width: isNotiOpen ? 400 : 0,
          left: isNotiOpen ? 73 : 245,
          boxShadow: "4px 0 24px #dbdbdb50 ",
          visibility: isNotiOpen ? "visible" : "hidden",
          transition:'0.2s'
        }}
        className=" absolute  bottom-0   py-2  rounded-r-2xl border-secondary-gray border-r  bg-white  h-full "
      >
     { isNotiOpen &&  <NotificationDrawer />}
      </section>

      {/* Content */}
      <section className=" flex justify-start items-start w-full max-h-full overflow-y-auto  ">
        <Outlet />
      </section>

      {isMobile && <MobileMenu />}
    </div>
  );
};

export default MainLayout;
