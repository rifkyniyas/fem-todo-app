import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import themeReducer from "./ThemeSlice";

const persistedState = JSON.parse(localStorage.getItem("app-state"));
const initialState = {};

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log(store.getState());
  localStorage.setItem("app-state", JSON.stringify(store.getState()));
  return result;
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
  preloadedState: persistedState || initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
