import Todo from "./Todo";
import ToggleTodo from "./ToggleTodo";
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedTodos } from "../redux/TodoSlice";

const selectFilteredTodos = (state) => {
  const { todoItems, filter } = state.todos;
  if (filter === "active") return todoItems.filter((todo) => !todo.isCompleted);
  if (filter === "completed")
    return todoItems.filter((todo) => todo.isCompleted);

  return todoItems;
};

const getActiveTodoCount = (state) => {
  return state.todos.todoItems.filter((todo) => !todo.isCompleted).length;
};

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);
  const activeTodosCount = useSelector(getActiveTodoCount);
  const dispatch = useDispatch();
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
          <p>{activeTodosCount} items left</p>
          <div className="hidden lg:block">
            <ToggleTodo />
          </div>

          <button onClick={() => dispatch(clearCompletedTodos())}>
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
