import { configureStore } from '@reduxjs/toolkit';
import switchReducer from './ThemeSlice.js';

export const store = configureStore({
    reducer: {
        switch: switchReducer
    },
});