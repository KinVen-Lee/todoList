import { combineReducers } from "redux";
import {todos,visibilityFilter} from '../views/main/reducers/index';
export default combineReducers({
    visibilityFilter,
    todos,
})

