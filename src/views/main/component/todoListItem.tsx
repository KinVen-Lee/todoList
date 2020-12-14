import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  updateTodoAciton,
  delTodoAction,
  completeTodoAction,
} from "../actions";

interface IProp {
  item: ITask;
  isEditor: boolean;
  completeTodo: () => void;
  delTodo: () => void;
  updateTodo: (value: string) => void;
}
interface ITask {
  id: number;
  completed: boolean;
  value: string;
}
interface IOwnProp {
  item: ITask;
}
const TodoListItem = (prop: IProp) => {
  let todo = prop.item;
  let [isEditor, setIsEditor] = useState(false);
  let [value, setValue] = useState(prop.item.value);

  function handleIsEditor() {
    setIsEditor(!isEditor);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    prop.updateTodo(value);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    value = event.target.value;
    setValue(value);
  }
  return (
    <li className="todo">
      {isEditor ? (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={"todo-" + todo.id}>
              New name for{todo.value}
            </label>
            <input
              id={"todo-" + todo.id}
              className="todo-text"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn todo-cancel"
              onClick={handleIsEditor}
            >
              Cancel
              <span className="visually-hidden">renaming {todo.value}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">new name for {todo.value}</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="stack-small">
          <div className="c-cb">
            <input
              id={"todo-checkbox-" + todo.id}
              type="checkbox"
              checked={todo.completed}
              onChange={prop.completeTodo}
            />
            <label className="todo-label" htmlFor={"todo-checkbox-" + todo.id}>
              {todo.value}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn" onClick={handleIsEditor}>
              Edit
              <span className="visually-hidden"></span>
            </button>
            <button
              type="button"
              className="btn btn__danger"
              onClick={prop.delTodo}
            >
              Delete <span className="visually-hidden"></span>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
const mapStateToProps = () => ({
  isEditor: false,
});
const mapDispatchToProps = (dispatch: Dispatch, ownProp: IOwnProp) => ({
  updateTodo: (value: string) =>
    dispatch(updateTodoAciton(ownProp.item.id, value)),
  delTodo: () => dispatch(delTodoAction(ownProp.item.id)),
  completeTodo: () => dispatch(completeTodoAction(ownProp.item.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
