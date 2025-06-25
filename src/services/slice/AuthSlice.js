import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../utils/CookieFun";

const initialState = {
  isLogin: 0,
  isUser: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, { payload }) => {
      state.isLogin = payload;
      setCookie("isLogin", payload);
    },
    setIsUser: (state, { payload }) => {
      state.isUser = payload;
      setCookie("isUser", payload);
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsLogin,
  setIsUser,
  setIsLoading
} = authSlice.actions;

export default authSlice.reducer;
