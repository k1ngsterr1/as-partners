import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

export const store = configureStore({
  reducer: {
    menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
