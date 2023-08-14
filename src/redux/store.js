import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import themeReducer from "./ThemeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});
