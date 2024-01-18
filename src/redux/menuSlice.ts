import { createSlice } from "@reduxjs/toolkit";

const menuStateSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = menuStateSlice.actions;
export default menuStateSlice.reducer;
