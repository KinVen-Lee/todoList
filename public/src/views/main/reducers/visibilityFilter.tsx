import { VisibilityFilters } from '../actions'
interface IAction{
    type:string,
    filter:string
    value: string;
}
export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action:IAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

