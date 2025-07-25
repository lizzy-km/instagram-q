import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slice/AuthSlice";
import { authQueryApi } from "../query/AuthQuery";
import {modalSlice} from "../slice/ModalSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,

    [authQueryApi.reducerPath]: authQueryApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authQueryApi.middleware),
});
