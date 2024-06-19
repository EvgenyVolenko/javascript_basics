import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({

    name: 'products',
    initialState: {
        array: []
    },
    reducers: {
        addProduct: (state, action) => {
            if (state.array.some((item) => item.id === action.payload.id)) {
                return;
            }
            state.array.push(action.payload);
        },
        deleteProduct: (state, { payload: product }) => {
            state.array = state.array.filter((item) => {
                return item.id !== product.id;
            });
        }
    }
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;