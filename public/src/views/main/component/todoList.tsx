import React from "react";
import {TodoListItem} from './index'
export const TodoList = () => {
  return (
    <>
      <h2 id="list-heading">4 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
      </ul>
    </>
  );
};
