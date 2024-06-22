import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from '../data/data';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve({ data: tasksData }), 1000);
        setTimeout(() => reject(new Error('Данные не удалось считать')), 3000);
    });
    return promise;
});

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        array: [],
        loading: false
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.array = action.payload.data;
                state.loading = false;
            })
    }
});

export default tasksSlice.reducer;
