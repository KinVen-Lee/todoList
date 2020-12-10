interface ITodo {
  type: string;
  id: number;
  value: string;
}

let nextTodoId: number = 0;
export const addTodoAction = (inputValue: string) => {
  let addTodo: ITodo = {
    type: "ADD_TODO",
    id: nextTodoId++,
    value: inputValue,
  };
  return addTodo;
};

export const setVisibilityFilter = (filter: string) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id:number) => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
