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
        <p className="text-center text-light-d-g-blue">
          Drag and drop to reorder list
        </p>
        {/* <div class="fixed bottom-0 right-0 bg-white border-light-vl-gray">
          <p>
            Challenge by&nbsp;
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </p>
          <p>
            Coded by&nbsp;
            <a href="#" target="_blank">
              Rifky Niyas
            </a>
          </p>
        </div> */}
      </div>
    </Provider>
  );
}
