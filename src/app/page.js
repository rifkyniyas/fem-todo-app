"use client";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import ToggleThemeButton from "../components/ToggleThemeButton";
import AddNewTodo from "../components/AddNewTodo";
import TodoList from "../components/TodoList";
export default function Home() {
  return (
    <Provider store={store}>
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
        <p className="text-center text-light-d-g-blue dark:text-dark-dg-blue">
          Drag and drop to reorder list
        </p>
        <div class="fixed bottom-0 right-0 bg-white py-3 px-5 shadow text-light-d-g-blue rounded-tl-3xl">
          <p>
            Challenge by&nbsp;
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="text-light-vd-g-blue hover:underline"
            >
              Frontend Mentor
            </a>
          </p>
          <p>
            Coded by&nbsp;
            <a
              href="https://rifkyniyas.vercel.app/"
              target="_blank"
              className="text-light-vd-g-blue hover:underline"
            >
              Rifky Niyas
            </a>
          </p>
        </div>
      </div>
    </Provider>
  );
}
