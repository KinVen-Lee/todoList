
interface IOwnState{
  type: string;
  id: number;
  value: string;
}
export const todos = (state = [], ownState:IOwnState ) => {
  switch (ownState.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: ownState.id,
          value: ownState.value,
          completed: false,
          isEditor:false,
        },
      ];
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === ownState.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state;
  }
};
