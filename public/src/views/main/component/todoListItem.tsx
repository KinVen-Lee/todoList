import React from "react";
interface IProp {
  id: number;
  value: string;
  completed: boolean;
}
export const TodoListItem = (prop: IProp) => {
  return (
    <li className="todo">
      <div className="stack-small">
        <div className="c-cb">
          <input id="todo-z5NV6DA-uIKEiABCoJrXB" type="checkbox" />
          <label
            className="todo-label"
            htmlFor="todo-z5NV6DA-uIKEiABCoJrXB"
          ></label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit
            <span className="visually-hidden"></span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden"></span>
          </button>
        </div>
      </div>
      <form className="stack-small">
        <div className="form-group">
          <label className="todo-label" htmlFor="todo-0">
            New name for Eat
          </label>
          <input id="todo-0" className="todo-text" type="text" />
        </div>
        <div className="btn-group">
          <button type="button" className="btn todo-cancel">
            Cancel<span className="visually-hidden">renaming Eat</span>
          </button>
          <button type="submit" className="btn btn__primary todo-edit">
            Save<span className="visually-hidden">new name for Eat</span>
          </button>
        </div>
      </form>
    </li>
  );
};
