interface ITodo {
  type: string;
  id: number;
  value: string;
  isEditor: boolean;
}

let nextTodoId: number = 0;
export const addTodoAction = (inputValue: string) => {
  let addTodo: ITodo = {
    type: "ADD_TODO",
    id: nextTodoId++,
    value: inputValue,
    isEditor: false,
  };
  return addTodo
};
