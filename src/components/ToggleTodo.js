import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/TodoSlice";
const ToggleTodo = () => {
  const filterValue = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();
  const updateFilter = (value) => dispatch(setFilter(value));
  return (
    <div
      className="bg-white dark:bg-dark-vdd-blue flex items-center justify-center gap-x-4 lg:gap-x-2 rounded-lg shadow-lg
    text-light-d-g-blue dark:text-dark-dg-blue font-medium my-5 py-5 lg:shadow-none lg:my-0 lg:py-0 lg:text-sm "
    >
      <button
        className={`${
          filterValue == "all" ? "text-primary" : ""
        } hover:text-light-vd-g-blue`}
        onClick={() => updateFilter("all")}
      >
        All
      </button>
      <button
        className={`${
          filterValue == "active" ? "text-primary" : ""
        } hover:text-light-vd-g-blue`}
        onClick={() => updateFilter("active")}
      >
        Active
      </button>
      <button
        className={`${
          filterValue == "completed" ? "text-primary" : ""
        } hover:text-light-vd-g-blue`}
        onClick={() => updateFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default ToggleTodo;
