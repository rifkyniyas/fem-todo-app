import { useRef } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleCompletion, deleteTodo, reorderTodos } from "../redux/TodoSlice";
import { useDrag, useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";

const Todo = ({ todoID, todoIndex, text, isCompleted }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: NativeTypes.FILE,
    item: { id: todoID, index: todoIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: NativeTypes.FILE,
    hover: (item, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = todoIndex;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      // Time to actually perform the action
      dispatch(
        reorderTodos({
          sourceIndex: todoIndex,
          destinationIndex: item.index,
        })
      );
      item.index = hoverIndex;
    },
  });
  dragRef(dropRef(ref));
  return (
    <div
      className={`flex items-center group gap-x-5 py-5 px-6 border-b 
    border-b-light-l-g-blue dark:border-b-dark-vdg-blue`}
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "grab" }}
    >
      <button
        className={`${
          isCompleted
            ? "bg-gradient-to-br from-gradient-from to-gradient-to"
            : ""
        }
        shrink-0 flex justify-center items-center relative w-6 h-6 rounded-full
        border border-light-vl-g-blue dark:border-dark-dg-blue hover:border-gradient-from`}
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
        className="shrink-0 group-hover:lg:block lg:hidden w-4 h-4 relative ml-auto"
        onClick={() => dispatch(deleteTodo(todoID))}
      >
        <Image src="/images/icon-cross.svg" alt="Clear todo icon" fill={true} />
      </button>
    </div>
  );
};

export default Todo;
