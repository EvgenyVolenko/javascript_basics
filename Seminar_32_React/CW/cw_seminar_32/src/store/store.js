import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../reducers/TodoLisSlice.js";
import favoritesReducer from '../reducers/FavoritesSlice.js';

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        favorites: favoritesReducer
    }
});