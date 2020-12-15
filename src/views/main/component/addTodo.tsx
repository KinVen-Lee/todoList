import React, { ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTodoAction } from "../actions";
interface IProp {
  dispatch: Dispatch;
}
const AddTodo = (prop: IProp) => {
  let inputValue: string;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputValue) {
      prop.dispatch(addTodoAction(inputValue));
      console.log("Todo add success");
    } else {
      console.log("Todo add error,because inputValue is null");
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    inputValue = event.target.value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};
export default connect()(AddTodo);
