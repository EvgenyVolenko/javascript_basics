import { combineReducers } from "redux";
import todoListReducer from './TodoLisSlice';
import favoritesReducer from './FavoritesSlice';
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
    todoList: todoListReducer,
    favorites: favoritesReducer,
    users: usersReducer
});

export default rootReducer;
