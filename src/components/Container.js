import { useSelector } from "react-redux";
import React from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { useDispatch } from "react-redux";
import { clearCompleted, resetList } from "../feature/Todo/todoSlice";

const Container = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleResetList = () => {
    dispatch(resetList());
  };

  return (
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto">
        <AddTodo />
        <Todos />

        <div className="mt-8">
          <button
            onClick={handleClearCompleted}
            className="border-2 border-red-500 p-2 text-red-500"
          >
            Clear Completed Task
          </button>
          <button
            onClick={handleResetList}
            className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
          >
            Reset Todo List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
