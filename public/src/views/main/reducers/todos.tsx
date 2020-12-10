
interface IAction{
  type: string;
  id: number;
  value: string;
}
export const todos = (state = [], action:IAction ) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          value: action.value,
          completed: false,
          isEditor:false,
        },
      ];
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state;
  }
};
