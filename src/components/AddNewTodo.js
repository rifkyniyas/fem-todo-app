import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddNewTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  return (
    <form
      className="relative "
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo({ id: uuidv4(), text: newTodo, isCompleted: false }));
        setNewTodo("");
      }}
    >
      <input
        type="text"
        name="newTodo"
        placeholder="Create a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="py-5 px-16 rounded block w-full outline-none
            text-light-vd-g-blue dark:bg-dark-vdd-blue dark:text-dark-lg-blue"
      />
      <div
        className="w-6 h-6 rounded-full border absolute top-1/2 -translate-y-1/2 left-6 
     border-light-vl-g-blue dark:border-dark-dg-blue"
      ></div>
    </form>
  );
};

export default AddNewTodo;
