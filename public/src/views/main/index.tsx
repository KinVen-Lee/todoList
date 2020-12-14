import React from "react";
import { TodoList, TodoNav} from "./component/index";
import {AddTodo} from "./component/index";

export const Main = () => {
  return (
    <div className="todoapp stack-large">
      <AddTodo />
      <TodoNav />
      <TodoList />
    </div>
  );
};
