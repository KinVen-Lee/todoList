import React from "react";
interface IProp {
  text: string;
}
export const TodoNavButton = (prop: IProp) => {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>{prop.text}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};
