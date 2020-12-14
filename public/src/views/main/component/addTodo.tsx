import React, { ChangeEvent, FormEvent } from "react";
import { addTodoAction } from "../actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
interface IState{
  dispatch:Dispatch
}
export const addTodo = (state:IState) => {
  let inputValue: string;
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputValue);
    inputValue ? state.dispatch(addTodoAction(inputValue)) : "";
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
export const AddTodo = connect()(addTodo);
