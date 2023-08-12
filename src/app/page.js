import ToggleThemeButton from "../components/ToggleThemeButton";
import AddNewTodo from "../components/AddNewTodo";
import TodoList from "../components/TodoList";
export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center text-light-vl-gray">
        <h1 className="font-bold text-4xl tracking-[0.3em] uppercase">Todo</h1>
        <ToggleThemeButton />
      </header>
      <main className="py-8">
        <AddNewTodo />
        <TodoList />
        {/* 


All
Active 
Completed



Drag and drop to reorder list

<div class="attribution">
Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
Coded by <a href="#">Your Name Here</a>.
</div> */}
      </main>
    </>
  );
}
