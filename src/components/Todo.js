import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleCompletion, deleteTodo } from "../redux/TodoSlice";

const Todo = ({ todoID, text, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center group gap-x-5 py-5 px-6 border-b 
    border-b-light-l-g-blue dark:border-b-dark-vdg-blue"
    >
      <button
        className={` flex justify-center items-center relative
        ${isCompleted ? "bg-check-back" : ""} 
        relative w-6 h-6 rounded-full border 
        border-light-vl-g-blue dark:border-dark-dg-blue`}
        // border-light-vl-g-blue
        onClick={() => dispatch(toggleCompletion(todoID))}
      >
        {isCompleted && (
          <Image
            src={"/images/icon-check.svg"}
            alt="Todo Completed Icon"
            width={12}
            height={12}
          />
        )}
      </button>
      <h2
        className={`${
          isCompleted
            ? "line-through text-light-l-g-blue dark:text-dark-dg-blue"
            : "text-light-vd-g-blue dark:text-dark-lg-blue dark:hover:text-dark-lg-blue-hover"
        } text-base`}
      >
        {text}
      </h2>
      <button
        className="group-hover:lg:block lg:hidden w-4 h-4 relative ml-auto"
        onClick={() => dispatch(deleteTodo(todoID))}
      >
        <Image src="/images/icon-cross.svg" alt="Clear todo icon" fill={true} />
      </button>
    </div>
  );
};

export default Todo;
