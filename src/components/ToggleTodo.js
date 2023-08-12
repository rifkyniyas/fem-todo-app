const ToggleTodo = () => {
  return (
    <div
      className="flex items-center justify-center gap-x-4 rounded-lg shadow-lg
    text-light-d-g-blue font-medium my-5"
    >
      <button className="text-primary">All </button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

export default ToggleTodo;
