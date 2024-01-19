import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import loaderSlice from "./loaderSlice";
import portfolioSelectorSlice from "./portfolioSelectorSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    loader: loaderSlice,
    portfolioSelector: portfolioSelectorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
