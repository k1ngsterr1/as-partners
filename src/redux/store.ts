import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import loaderSlice from "./loaderSlice";
import portfolioSelectorSlice from "./portfolioSelectorSlice";
import hoverSlice from "./hoverSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    loader: loaderSlice,
    portfolioSelector: portfolioSelectorSlice,
    hover: hoverSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
