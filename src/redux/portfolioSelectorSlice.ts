import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const portfolioSelectorSlice = createSlice({
  name: "portfolioSelector",
  initialState: {
    selectedOption: "houses",
  },
  reducers: {
    changeOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { changeOption } = portfolioSelectorSlice.actions;
export default portfolioSelectorSlice.reducer;
