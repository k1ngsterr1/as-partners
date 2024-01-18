import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import loaderSlice from "./loaderSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    loader: loaderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
