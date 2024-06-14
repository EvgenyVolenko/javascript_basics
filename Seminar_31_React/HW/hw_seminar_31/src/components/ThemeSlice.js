import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: 'switch',
    initialState: {
        value: false
    },
    reducers: {
        TOGGLE_THEME: (state) => {
            state.value = !state.value;
        }
    }
});

export const { TOGGLE_THEME } = ThemeSlice.actions;

export default ThemeSlice.reducer;