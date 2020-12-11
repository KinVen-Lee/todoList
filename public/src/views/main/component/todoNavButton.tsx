import React, { MouseEvent } from "react";
import { Dispatch } from "redux";
import { setVisibilityFilter } from "../actions";
import { connect } from "react-redux";
interface IProp {
  text: string;
  filter: string;
  active: string;
  onClick:
    | ((
        event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      ) => void)
    | undefined;
}
const TodoNavButton = (prop: IProp) => {
  return (
    <button
      type="button"
      className={"btn toggle-btn " + prop.active}
      aria-pressed="true"
      onClick={prop.onClick}
    >
      <span className="visually-hidden">Show </span>
      <span>{prop.text}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};
interface IState {
  visibilityFilter: string;
}
interface IOwnProp {
  filter: string;
  text: string;
}
const mapStateToProps = (state: IState, ownProps: IOwnProp) => ({
  active: ownProps.filter === state.visibilityFilter ? "active" : "",
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProp) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoNavButton);
