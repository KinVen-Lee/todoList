import React from "react";
import {TodoNavButton} from './index';
export const TodoNav = () => {
  return (
    <div className="filters btn-group stack-exception">
        <TodoNavButton text={'All'}/>
        <TodoNavButton text={'Active'}/>
        <TodoNavButton text={'Completed'}/>
    </div>
  );
};
