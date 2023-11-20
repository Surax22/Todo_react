// import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, toggleChecked } from "../feature/Todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // const [checkbox, setCheckbox] = useState(false);
  // const toggleCheckbox = () => {
  //     setCheckbox(!checkbox);
  // }
  // const cleareChecked = () => {

  // }
  return (
    <>
      <div className="mt-8">
        <ul>
          {todos.map((todo) => (
            <li className="p-2 rounded-lg" key={todo.id}>
              <div className="flex align-middle flex-row justify-between">
                <div className="p-2">
                  <input
                    type="checkbox"
                    className="h-6 w-6 "
                    checked={todo.isChecked}
                    onChange={() => dispatch(toggleChecked(todo.id))}
                  />
                </div>
                <div className="p-2">
                  <p
                    className={`text-lg text-gray-400  ${
                      todo.isChecked ? "line-through" : ""
                    }`}
                    key={todo.id}
                  >
                    {todo.text}
                  </p>
                </div>

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
                >
                  <svg
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <circle cx="12" cy="12" r="10" />{" "}
                    <line x1="15" y1="9" x2="9" y2="15" />{" "}
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <span>Remove</span>
                </button>
              </div>
              <hr className="mt-2" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
