import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slice/AuthSlice";
import { authQueryApi } from "../query/AuthQuery";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authQueryApi.reducerPath]: authQueryApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authQueryApi.middleware),
});
