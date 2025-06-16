import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../utils/CookieFun";

const initialState = {
  isLogin: 0,
  isUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: ({ isLogin }, { payload }) => {
      isLogin = payload;
      setCookie('isLogin',payload)
    },
    setIsUser: ({ isUser }, { payload }) => {
      isUser = payload;
      setCookie('isUser',payload)

    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogin, setIsUser } = authSlice.actions;

export default authSlice.reducer;
