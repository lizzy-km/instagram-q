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
import SearchBold from "../icons/SearchBold";
import SearchOutLine from "../icons/SearchOutLine";
import SearchDrawer from "../components/Search/SearchDrawer";

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1159px)" });

  const { pathname } = useLocation();
  const { currentUser } = auth;

  const routeName = pathname.slice(1, pathname.length);

  const isinMessagePage = routeName === "message";

  const menuStyle =
    "  transition-all relative justify-between  flex flex-wrap  h-screen max-1xl:w-[73px]   border-r  border-secondary pt-2 px-[12px] pb-[20px] ";

    function logOut (){
    auth.signOut().then(() => {
      // Sign-out successful.
      window.location.reload(true);
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
  }

  return (
    <div className="  flex relative w-full h-full  ">
      {/* SideMenu  */}
      {!isMobile && (
        <div
          style={{
            width: isDrawerOpen || isinMessagePage ? 73 : 335,
            minWidth: isDrawerOpen || isinMessagePage ? 73 : 335,

          }}
          className={menuStyle}
        >
          <div className=" w-full h-full flex flex-col  ">
            {/* Logo  */}
            <NavLink
              to={"/"}
              className=" h-[92px] w-full pt-[25px] px-3 pb-[16px] "
            >
              {isDrawerOpen || isinMessagePage ? (
                <LogoOutline className={" flex  "} />
              ) : !isTablet ? (
                <InstagramLogo className={"  flex "} />
              ) : (
                <LogoOutline className={" flex "} />
              )}
            </NavLink>

            {/* Menu Items */}
            <div className=" menu flex  flex-col w-full h-[64px] ">
              <NavLink
                aria-activedescendant=""
                style={{
                  backgroundColor: "transparent",
                }}
                to={"/"}
                className={
                  "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:!bg-[#dbdbdb57] cursor-pointer flex rounded-md  justify-start items-center"
                }
              >
                {/* Icon  */}
                {routeName.length < 1 ? <HomeFillIcon /> : <HomeOutLineIcon />}
                {isDrawerOpen ||
                  (!isinMessagePage && (
                    <p className="  max-1xl:hidden flex menuText ">Home</p>
                  ))}
              </NavLink>

              <div className=" transition-colors w-full min-h-[64px] rounded-md py-2  ">
                <div
                  onClick={() => {
                    setIsDrawerOpen(!isSearchOpen);
                    setIsSearchOpen(!isSearchOpen);
                    setIsNotiOpen(false);
                  }}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:!bg-[#dbdbdb57] cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {isSearchOpen ? <SearchBold /> : <SearchOutLine />}
                  {isDrawerOpen ||
                    (!isinMessagePage && (
                      <p className="  max-1xl:hidden flex menuText ">Search</p>
                    ))}{" "}
                </div>
              </div>

              <div className=" transition-colors w-full min-h-[64px] rounded-md py-2  ">
                <NavLink
                  aria-activedescendant=""
                  to={"/explore"}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:!bg-[#dbdbdb57] cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {routeName == "explore" ? (
                    <ExploreFill />
                  ) : (
                    <ExplorerOutLine />
                  )}
                  {isDrawerOpen ||
                    (!isinMessagePage && (
                      <p className="  max-1xl:hidden flex menuText ">Explore</p>
                    ))}{" "}
                </NavLink>
              </div>
              <div className=" transition-colors w-full min-h-[64px] rounded-md py-2  ">
                <div
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:!bg-[#dbdbdb57] cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  <AddOutLine />
                  {isDrawerOpen ||
                    (!isinMessagePage && (
                      <p className="  max-1xl:hidden flex menuText ">Add post</p>
                    ))}{" "}
                </div>
              </div>

              <div className=" transition-colors w-full min-h-[64px] rounded-md py-2  ">
                <NavLink
                  aria-activedescendant=""
                  to={"/message"}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:!bg-[#dbdbdb57] cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {routeName == "message" ? <MessageFill /> : <Message />}
                  {isDrawerOpen ||
                    (!isinMessagePage && (
                      <p className="  max-1xl:hidden flex menuText ">Messages</p>
                    ))}{" "}
                </NavLink>
              </div>

              <div className=" transition-colors w-full min-h-[64px] rounded-md py-2  ">
                <div
                  onClick={() => {
                    setIsDrawerOpen(!isNotiOpen);
                    setIsNotiOpen(!isNotiOpen);
                    setIsSearchOpen(false);
                  }}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:!bg-[#dbdbdb57] cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  {isNotiOpen ? <HeartFill /> : <HeartOutLine />}
                  {isDrawerOpen ||
                    (!isinMessagePage && (
                      <p className="  max-1xl:hidden flex menuText ">Notifications</p>
                    ))}{" "}
                </div>
              </div>

              <div className=" transition-colors w-full min-h-[64px] rounded-md py-2  ">
                <NavLink
                  aria-activedescendant=""
                  to={"/profile"}
                  className={
                    "transition-colors w-full h-full p-3 gap-[16px] text-[16px] hover:!bg-[#dbdbdb57] cursor-pointer flex rounded-md  justify-start items-center"
                  }
                >
                  <img
                    className=" rounded-full w-[28px] h-[28px] "
                    src={currentUser?.photoURL}
                    alt=""
                    srcset=""
                  />
                  {isDrawerOpen ||
                    (!isinMessagePage && (
                      <p className="  max-1xl:hidden flex menuText ">Profile</p>
                    ))}{" "}
                </NavLink>
              </div>
            </div>
          </div>

          <div className=" absolute bottom-2 justify-center items-center flex  left-0 w-full h-[200px] ">
            <div onClick={logOut} className=" w-[80%] cursor-pointer px-2 py-1 rounded-md  bg-secondary-gray text-[#333333] " >Logout</div>
          </div>
        </div>
      )}

      {/* NotiFication  */}
      {
        <section
          style={{
            width: isDrawerOpen ? 400 : 0,
            left: isDrawerOpen || isinMessagePage ? 73 : 335,
            boxShadow: "10px 0 24px #dbdbdb50 ",
            visibility: isDrawerOpen ? "visible" : "hidden",
            transition: "0.2s",
          }}
          className=" z-10 absolute  bottom-0   p-2  rounded-r-2xl border-secondary-gray border-r  bg-white  h-full "
        >
          {isNotiOpen && <NotificationDrawer />}
          {isSearchOpen && <SearchDrawer />}
        </section>
      }

      {/* Content */}
      <section className=" flex justify-start items-start w-full max-h-full overflow-y-auto px-5  ">
        <Outlet />
      </section>

      {isMobile && <MobileMenu />}
    </div>
  );
};

export default MainLayout;
