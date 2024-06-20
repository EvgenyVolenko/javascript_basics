import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({

    name: 'products',
    initialState: {
        array: []
    },
    reducers: {
        addProduct: (state, { payload: product }) => {
            let check = false;
            state.array.forEach(elem => {
                if (elem.id === Number(product.id)) {
                    elem.name = product.name;
                    elem.description = product.description;
                    elem.price = product.price;
                    elem.available = product.available;
                    console.log(elem.id);
                    check = true;
                }
            });
            if (!check) {
                state.array.push(product);
            }
        },
        deleteProduct: (state, { payload: product }) => {
            state.array = state.array.filter((item) => {
                 return item.id !== product.id;
            });
        },
        changeAvailable: (state, { payload: product }) => {
            state.array.forEach(elem => {
                if (elem.id === product.id) {
                    elem.available = !elem.available;
                }
            });
        },
    }
});

export const { addProduct, deleteProduct, changeAvailable } = productsSlice.actions;
export default productsSlice.reducer;