import { createSlice } from "@reduxjs/toolkit";

const hoverStateSlice = createSlice({
  name: "hover",
  initialState: {
    isHover: false,
  },
  reducers: {
    toggleOnHover: (state) => {
      state.isHover = true;
    },
    toggleOffHover: (state) => {
      state.isHover = false;
    },
  },
});

export const { toggleOffHover, toggleOnHover } = hoverStateSlice.actions;
export default hoverStateSlice.reducer;
