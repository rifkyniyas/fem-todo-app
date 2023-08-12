import Todo from "./Todo";
const todos = [
  { isCompleted: true, text: "Complete online JavaScript course" },
  { isCompleted: false, text: "Jog around the park 3x" },
  { isCompleted: false, text: "10 minutes meditation" },
  { isCompleted: false, text: "Read for 1 hour" },
  { isCompleted: false, text: "Pick up groceries" },
  { isCompleted: false, text: "Complete Todo App on Frontend Mentor" },
];
const TodoList = () => {
  return (
    <div className="bg-white my-5 shadow-lg rounded-lg">
      {todos.map((todo, index) => (
        <Todo text={todo.text} isCompleted={todo.isCompleted} />
      ))}
      <div className="flex justify-between px-6 py-6 text-light-d-g-blue">
        <p>5 items left</p>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
