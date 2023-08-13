import Todo from "./Todo";
import ToggleTodo from "./ToggleTodo";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleCompletion,
  deleteTodo,
  clearTodos,
} from "../redux/TodoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="my-5 shadow-lg rounded-lg bg-white">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todoID={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
          />
        ))}
        <div className="flex justify-between px-6 py-6 text-light-d-g-blue">
          <p>5 items left</p>
          <div className="hidden lg:block">
            <ToggleTodo />
          </div>

          <button onClick={() => dispatch(clearTodos())}>
            Clear Completed
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <ToggleTodo />
      </div>
    </>
  );
};

export default TodoList;
