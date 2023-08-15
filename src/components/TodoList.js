import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { clearCompletedTodos, reorderTodos } from "../redux/TodoSlice";
import Todo from "./Todo";
import ToggleTodo from "./ToggleTodo";

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
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    // Dispatch an action to update the state with the reordered todos
    dispatch(
      reorderTodos({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };
  return (
    <>
      <div className="my-5 shadow-lg rounded-lg bg-white dark:bg-dark-vdd-blue">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todo-list">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Todo
                          todoID={todo.id}
                          text={todo.text}
                          isCompleted={todo.isCompleted}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div
          className="flex justify-between px-6 lg:px-3 py-6 lg:text-sm
        text-light-d-g-blue dark:text-dark-dg-blue"
        >
          <p>{activeTodosCount} items left</p>
          <div className="hidden lg:block">
            <ToggleTodo />
          </div>

          <button
            onClick={() => dispatch(clearCompletedTodos())}
            className="hover:text-light-vd-g-blue dark:hover:text-dark-lg-blue-hover"
          >
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
