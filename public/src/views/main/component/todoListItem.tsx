import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { updateTodoAciton, delTodoAction ,completeTodoAction} from "../actions";
interface IProp {
  item: ITask;
  isEditor: boolean;
  completeTodo:((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  updateTodo: ((event: React.FormEvent<HTMLButtonElement>) => void) | undefined;
  delTodo:
    | ((
        event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      ) => void)
    | undefined;
}
interface ITask {
  id: number;
  completed: boolean;
  value: string;
}
const TodoListItem = (prop: IProp) => {
  let isEditor = prop.isEditor;
  let todo = prop.item;
  return (
    <li className="todo">
      {isEditor ? (
        <form className="stack-small">
          <div className="form-group">
            <label className="todo-label" htmlFor="todo-0">
              New name for{todo.value}
            </label>
            <input id="todo-0" className="todo-text" type="text" />
          </div>
          <div className="btn-group">
            <button type="button" className="btn todo-cancel">
              Cancel
              <span className="visually-hidden">renaming {todo.value}</span>
            </button>
            <button
              type="submit"
              className="btn btn__primary todo-edit"
              onSubmit={prop.updateTodo}
            >
              Save
              <span className="visually-hidden">new name for {todo.value}</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="stack-small">
          <div className="c-cb">
            <input id="todo-z5NV6DA-uIKEiABCoJrXB" type="checkbox" onChange={prop.completeTodo}/>
            <label className="todo-label" htmlFor="todo-z5NV6DA-uIKEiABCoJrXB">
              {todo.value}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
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

const mapDispatchToProps = (dispatch: Dispatch, ownProp: IProp) => ({
  updateTodo: () =>
    dispatch(updateTodoAciton(ownProp.item.id,ownProp.item.value)),
  delTodo: () => dispatch(delTodoAction(ownProp.item.id)),
  completeTodo:()=>dispatch(completeTodoAction(ownProp.item.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
