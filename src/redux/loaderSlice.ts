import { createSlice } from "@reduxjs/toolkit";

const loaderStateSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: true,
  },
  reducers: {
    toggleOnLoader: (state) => {
      state.isLoading = true;
    },
    toggleOffLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { toggleOffLoader, toggleOnLoader } = loaderStateSlice.actions;
export default loaderStateSlice.reducer;
