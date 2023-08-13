import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    text: "Complete online JavaScript course",
    isCompleted: true,
  },
  { id: uuidv4(), text: "Jog around the park 3x", isCompleted: false },
  { id: uuidv4(), text: "10 minutes meditation", isCompleted: false },
  { id: uuidv4(), text: "Read for 1 hour", isCompleted: false },
  { id: uuidv4(), text: "Pick up groceries", isCompleted: false },
  {
    id: uuidv4(),
    text: "Complete Todo App on Frontend Mentor",
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleCompletion: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) state[index].isCompleted = !state[index].isCompleted;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    clearTodos: () => [],
  },
});

export const { addTodo, toggleCompletion, deleteTodo, clearTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
