import Image from "next/image";

const AddNewTodo = () => {
  return (
    <div className="relative">
      <input
        type="text"
        name="newTodo"
        placeholder="Create a new todo"
        className="py-5 px-16 rounded block w-full outline-none
            text-light-vd-g-blue"
      />
      <div
        className="w-6 h-6 rounded-full border border-light-vl-g-blue
      absolute top-1/2 -translate-y-1/2 left-6"
      ></div>
    </div>
  );
};

export default AddNewTodo;
