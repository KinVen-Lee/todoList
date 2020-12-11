
interface IAction{
  type: string;
  id: number;
  value: string;
}
interface ITodoLsitItem{
  id:number,
  completed:boolean,
  value:string,
}
export const todos = (state:Array<ITodoLsitItem> = [], action:IAction ) => {
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
    case 'TOGGLE_TODO':  
      return state.map((todo:ITodoLsitItem) =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state;
  }
}
