//responible for creating initial state of the store
//as well as all of the reducers are collected here.
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isChecked: false, // Add isChecked property to track checkbox state
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleChecked: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isChecked = !todo.isChecked; // Toggle the isChecked property
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isChecked);
    },
    resetList: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, toggleChecked, clearCompleted, resetList } =
  todoSlice.actions;
export default todoSlice.reducer;
