import React from "react";
import { TodoList, TodoNav, AddTodo } from "./component/index";
export const Main = () => {
  return (
    <div className="todoapp stack-large">
      <AddTodo />
      <TodoNav />
      <TodoList />
    </div>
  );
};
