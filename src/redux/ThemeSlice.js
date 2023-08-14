import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
