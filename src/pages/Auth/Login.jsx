import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";
import FacebookLogo from "../../icons/FacebookLogo";
import { auth, provider } from "../../config/firebase/FirebaseConfig";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import Instagram from "../../components/Logo/Instagram";

const Login = () => {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  function siginUpWithFacebook() {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log(credential, email, errorMessage, errorCode);

        // ...
      });
  }

  return (
    <div className="   min-w-[350px] w-auto min-h-full flex flex-col gap-[10px] ">
      <div className=" min-w-full min-h-[410px] h-auto border border-t-[#363636] border-[#dbdbdb] py-[10px] justify-start items-center flex gap-[12px] flex-col ">
        <div className=" mt-[36px] ">
          <Instagram width="175px" height="51px" />
        </div>

        <div className=" min-w-full  flex flex-col gap-[12px] justify-start items-center ">
          <form className=" px-[40px] py-[24px] min-w-full h-auto gap-[6px] flex-col flex justify-start items-center ">
            {/* Email  */}
            <div className="  min-h-[38px] h-[38px] min-w-full border   border-[#dbdbdb] rounded-[3px] ">
              <div className=" min-w-full h-full relative   " htmlFor="">
                <span
                  style={{
                    position:
                      formVal.email?.length > 0 ? "absolute" : "relative",
                    height: formVal.email?.length > 0 ? 16 : "100%",
                    fontSize: formVal.email?.length > 0 ? 10 : 12,
                    transition: "0.2s all",
                  }}
                  className="  px-[8px] h-full left-0 top-0 flex justify-start items-center text-start text-[#dbdbdb] "
                >
                  Phone number, username, or email
                </span>
                <input
                  required
                  className=" active:border-none border-none active:outline-0 outline-0  py-2 absolute min-h-full min-w-full cursor-text top-0 left-0 px-2 "
                  value={formVal.email}
                  onChange={(e) =>
                    setFormVal({ ...formVal, email: e.target.value })
                  }
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            {/* Password  */}
            <div className="  min-h-[38px] h-[38px] min-w-full border  border-[#dbdbdb] rounded-[3px] ">
              <div
                className=" min-w-full h-full relative flex justify-between items-center   "
                htmlFor=""
              >
                <span
                  style={{
                    position:
                      formVal.password?.length > 0 ? "absolute" : "relative",
                    height: formVal.password?.length > 0 ? 16 : "100%",
                    fontSize: formVal.password?.length > 0 ? 10 : 12,
                    transition: "0.2s all",
                  }}
                  className="  px-[8px] h-full left-0 top-0 flex justify-start items-center text-start text-[#dbdbdb] "
                >
                  Password
                </span>
                <input
                  required
                  className=" active:border-none border-none active:outline-0 outline-0  py-2 absolute min-h-full min-w-full cursor-text top-0 left-0 px-2 "
                  value={formVal.password}
                  onChange={(e) =>
                    setFormVal({ ...formVal, password: e.target.value })
                  }
                  type={showPass ? "text" : "password"}
                  name=""
                  id=""
                />
                <div
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#dbdbdb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333333";
                  }}
                  onClick={() => setShowPass(!showPass)}
                  className=" absolute right-0 text-[12px] text-[#333333] transition-all font-semibold mr-[8px] cursor-pointer z-10 "
                >
                  {showPass ? "Hide" : "Show"}
                </div>
              </div>
            </div>
            {/* Login Button */}

            <div
              style={{
                backgroundColor:
                  formVal.email?.length > 0 && formVal.password?.length > 0
                    ? "#4a5df9"
                    : "#4a5df94d",
                cursor:
                  formVal.email?.length > 0 && formVal.password?.length > 0
                    ? "pointer"
                    : "not-allowed",
              }}
              className=" my-2 h-[32px]  px-[16px] py-[7px] text-[14px]  justify-center items-center flex font-semibold text-white w-full rounded-md  "
            >
              <div>Login</div>
            </div>

            {/* Label  */}

            <div className=" mt-[14px] mb-[22px] w-full h-full justify-center items-center ">
              <div className=" flex justify-center items-center h-full w-auto text-[#737373] ">
                <div className=" bg-[#dbdbdb] w-full h-[1px] "></div>
                <p className=" text-[13px] font-bold mx-[18px]  ">OR</p>
                <div className=" bg-[#dbdbdb] w-full h-[1px] "></div>
              </div>
            </div>

            {/* Social  */}
            <div className=" w-full justify-center items-center text-[14px] my-2 h-[20px] flex  ">
              <div
                onClick={siginUpWithFacebook}
                className=" flex cursor-pointer "
              >
                <div className=" mr-1  ">
                  <FacebookLogo currentColor="#3579ea" />
                </div>
                <span className=" text-primary text-[14px] font-semibold ">
                  Login with Facebook
                </span>
              </div>
            </div>
          </form>
          <div>
            <Link to={"forgot-pass"} className=" font-semibold text-[14px] ">
              Forgot password?{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full h-[63px]  border text-[14px] border-t-[#363636] border-[#dbdbdb] gap-1 flex justify-center items-center ">
        <p>Don't have an account?</p>{" "}
        <Link className="text-[#4150f7] font-semibold  " to={"signup"}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
