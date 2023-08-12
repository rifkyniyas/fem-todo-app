import Image from "next/image";
import React from "react";

const Todo = ({ text, isCompleted }) => {
  return (
    <div className="flex items-center gap-x-5 py-5 px-6 border-b border-b-light-l-g-blue">
      <button className="w-6 h-6 rounded-full border border-light-vl-g-blue"></button>
      <h2 className="text-light-vd-g-blue text-base">{text}</h2>
      <button className="w-4 h-4 relative ml-auto hidden">
        <Image src="/images/icon-cross.svg" alt="Clear todo icon" fill={true} />
      </button>
    </div>
  );
};

export default Todo;