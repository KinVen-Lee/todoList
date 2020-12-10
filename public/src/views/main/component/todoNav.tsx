import React from "react";
import { VisibilityFilters } from "../actions";
import { TodoNavButton } from "./index";
export const TodoNav = () => {
  return (
    <div className="filters btn-group stack-exception">
      <TodoNavButton text={"All"} filter={VisibilityFilters.SHOW_ALL} />
      <TodoNavButton text={"Active"} filter={VisibilityFilters.SHOW_ACTIVE} />
      <TodoNavButton
        text={"Completed"}
        filter={VisibilityFilters.SHOW_COMPLETED}
      />
    </div>
  );
};
