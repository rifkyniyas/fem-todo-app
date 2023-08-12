import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { isCompleted: true, text: "Complete online JavaScript course" },
  { isCompleted: false, text: "Jog around the park 3x" },
  { isCompleted: false, text: "10 minutes meditation" },
  { isCompleted: false, text: "Read for 1 hour" },
  { isCompleted: false, text: "Pick up groceries" },
  { isCompleted: false, text: "Complete Todo App on Frontend Mentor" },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todoSlice.actions;

export default todoSlice.reducer;
