import { combineReducers } from "redux";
import { todoList, visibilityFilter } from '../views/main/reducers/index';
export default combineReducers({
    visibilityFilter,
    todoList,
})

