import React from "react";
import {
  currentUser,
  name,
  settings,
  updateCurrentUser,
} from "../../hooks/CommonFun";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className=" flex px-[20px] justify-around items-start w-full min-h-full h-auto ">
      <div className=" max-w-[630px] w-full min-h-full  gap-[24px] h-auto flex flex-col justify-start items-center ">
        <div className="h-[124px] py-2 px-[9px] max-w-full w-full overflow-x-auto  ">
          {/* Story  */}
          <NavLink
            to={"/stories/quix"}
            className=" cursor-pointer w-auto  flex min-h-full min-w-full "
          >
            <div className=" relative   w-[90px]  flex flex-col min-h-full justify-start items-center min-w-[90px]  ">
              <div className=" w-[88px] min-h-[88px] flex-shrink-0 rounded-full ">
                <div
                  className={` p-1  w-full h-full rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 `}
                >
                  <div className=" w-full h-full p-1 flex justify-center items-center bg-white rounded-full">
                    <img
                      className="w-[74px]  h-[74px]  object-cover rounded-full"
                      src={
                        "https://i.pinimg.com/736x/4b/ab/bd/4babbd4c485146ff3c8d1d13bd363fc3.jpg"
                      }
                      alt={currentUser?.displayName}
                    />
                  </div>
                </div>
              </div>
              <p className=" text-ellipsis   h-auto bottom-0 left-0  w-full max-w-full  text-nowrap overflow-hidden text-[12px] font-normal ">
                {currentUser?.displayName}
              </p>
            </div>
          </NavLink>
        </div>

        <div className=" min-w-full w-full h-auto min-h-[500px]   ">
          {/* Content  */}

          <div className=" flex flex-col max-[470px]:min-w-[470px]  max-[470px]:max-w-[470px]  h-[300px] bg-secondary-gray "></div>
        </div>
      </div>
      <div className=" min-w-[383px] w-[383px] min-h-[600px] max-1xl:hidden flex bg-secondary-gray border "></div>
    </div>
  );
};

export default Home;
