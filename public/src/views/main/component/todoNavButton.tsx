import React, { MouseEvent } from "react";
import {Dispatch} from 'redux'
import { setVisibilityFilter } from '../actions'
interface IProp {
  text: string;
  filter: string;
}
interface IState{
  dispatch:Dispatch,
}
export const TodoNavButton = (prop: IProp,state:IState,) => {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    state.dispatch(setVisibilityFilter(prop.filter))
  }
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed="true"
      onClick={handleClick}
    >
      <span className="visually-hidden">Show </span>
      <span>{prop.text}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};
