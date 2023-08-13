import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/TodoSlice";
const ToggleTodo = () => {
  const filterValue = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();
  const updateFilter = (value) => dispatch(setFilter(value));
  return (
    <div
      className="bg-white flex items-center justify-center gap-x-4 rounded-lg shadow-lg
    text-light-d-g-blue font-medium my-5 py-5"
    >
      <button
        className={`${filterValue == "all" ? "text-primary" : ""}`}
        onClick={() => updateFilter("all")}
      >
        All
      </button>
      <button
        className={`${filterValue == "active" ? "text-primary" : ""}`}
        onClick={() => updateFilter("active")}
      >
        Active
      </button>
      <button
        className={`${filterValue == "completed" ? "text-primary" : ""}`}
        onClick={() => updateFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default ToggleTodo;
