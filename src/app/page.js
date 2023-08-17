"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store";

import ToggleThemeButton from "../components/ToggleThemeButton";
import AddNewTodo from "../components/AddNewTodo";
import TodoList from "../components/TodoList";
export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="max-w-md mx-auto">
          <header className="flex justify-between items-center text-light-vl-gray">
            <h1 className="font-bold text-4xl tracking-[0.3em] uppercase">
              Todo
            </h1>
            <ToggleThemeButton />
          </header>
          <main className="py-8">
            <AddNewTodo />
            <TodoList />
          </main>
          <p className="text-center text-light-d-g-blue dark:text-dark-vdg-blue">
            Drag and drop to reorder list
          </p>
        </div>
        <div
          class="lg:max-w-xs mb-5 lg:fixed lg:bottom-0 lg:right-0 lg:mb-0 ml-auto bg-white dark:bg-dark-vdd-blue mt-10 lg:mt-5
         text-light-d-g-blue dark:text-dark-dg-blue rounded-lg py-3 px-5 shadow"
        >
          <p>
            Challenge by&nbsp;
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="text-light-vd-g-blue dark:text-dark-lg-blue
            hover:underline dark:hover:text-dark-lg-blue-hover"
            >
              Frontend Mentor
            </a>
          </p>
          <p>
            Coded by&nbsp;
            <a
              href="https://rifkyniyas.vercel.app/"
              target="_blank"
              className="text-light-vd-g-blue dark:text-dark-lg-blue
            hover:underline dark:hover:text-dark-lg-blue-hover"
            >
              Rifky Niyas
            </a>
          </p>
        </div>
      </PersistGate>
    </Provider>
  );
}
