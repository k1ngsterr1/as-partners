import { createSlice } from "@reduxjs/toolkit";

const menuStateSlice = createSlice({
  name: "menuState",
  initialState: {
    isOpened: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export default menuStateSlice.reducer;
