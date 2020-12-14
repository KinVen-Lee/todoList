interface IAction {
  type: string;
  id: number;
  value: string;
}
interface ITodoLsitItem {
  id: number;
  completed: boolean;
  value: string;
}

export const todoList = (state: Array<ITodoLsitItem> = [], action: IAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          value: action.value,
          completed: false,
        },
      ];
    case "DEL_TODO":
      console.log("del_todo");
      return state.filter((todoListItem: ITodoLsitItem) =>
        todoListItem.id !== action.id ? todoListItem : null
      );
    case "UPDATE_TODO":
      console.log(1);
      
      console.log(
        state.map((todoListItem: ITodoLsitItem) =>
          todoListItem.id === action.id ? console.log(todoListItem) : ""
        )
      );

      return state.map((todoListItem: ITodoLsitItem) =>
        todoListItem.id === action.id
          ? { ...todoListItem, value: action.value }
          : todoListItem
      );
    case "COMPLETE_TODO":
      return state.map((todoListItem: ITodoLsitItem) =>
        todoListItem.id === action.id
          ? { ...todoListItem, completed: !todoListItem.completed }
          : todoListItem
      );

    default:
      return state;
  }
};
