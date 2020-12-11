import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { VisibilityFilters, toggleTodo } from "../actions";
import { TodoListItem } from "./index";
interface IProp {
  todoList: Array<ITodoListItem>;
}
export const TodoList = (prop: IProp) => {
  return (
    <>
      <h2 id="list-heading">4 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          prop.todoList.map((listItem:ITodoListItem)=>{
            return(
              <TodoListItem key={listItem.id} item={listItem}/>
            )
          })
        }
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
interface IState {
  visibilityFilter: string;
  todoList: Array<ITodoListItem>;
}
interface ITodoListItem {
  id: number;
  completed: boolean;
  value: string;
}

const mapStateToProps = (state: IState) => ({
  todoList: getVisibleTodoList(state.todoList, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
