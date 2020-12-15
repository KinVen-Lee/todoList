import React from "react";
import { connect } from "react-redux";
import { VisibilityFilters } from "../actions";
import { TodoListItem } from "./index";
interface IState {
  visibilityFilter: string;
  todoList: Array<ITodoListItem>;
}
interface ITodoListItem {
  id: number;
  completed: boolean;
  value: string;
}
interface IProp {
  todoList: Array<ITodoListItem>;
}
const TodoList = (prop: IProp) => {
  let todoList = prop.todoList;
  return (
    <>
      <h2 id="list-heading">{ todoList.length + " tasks remaining"}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todoList.map((listItem) => {
          return <TodoListItem key={listItem.id} item={listItem} />;
        })}
      </ul>
    </>
  );
};

const getVisibleTodoList = (todoList: Array<ITodoListItem>, filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todoList;
    case VisibilityFilters.SHOW_COMPLETED:
      return todoList.filter((listItem) => listItem.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todoList.filter((listItem) => !listItem.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
const mapStateToProps = (state: IState) => ({
  todoList: getVisibleTodoList(state.todoList, state.visibilityFilter),
});
export default connect(mapStateToProps)(TodoList);