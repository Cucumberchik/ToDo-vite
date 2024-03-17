import { createSlice } from "@reduxjs/toolkit"

const initial = {
    product: JSON.parse(localStorage.getItem('product')) || [],
    favorites: JSON.parse(localStorage.getItem('favorite')) || [],
}
export const TodoSlices = createSlice({
    name: "todos",
    initialState: initial,
    reducers: {
        addTodo: (state, action) => {
            let product = [...state.product, action.payload];
            localStorage.setItem('product', JSON.stringify(product));
            state.product = product;
        },
        addFavorite: (state, action) => {
            let favorite = [...state.favorites, action.payload];
            localStorage.setItem('favorite', JSON.stringify(favorite));
            state.favorites = favorite;
        },
        deleteFavorite: (state, action) => {
            let favorite = state.favorites.filter((el)=> el.id!== action.payload);
            localStorage.setItem('favorite', JSON.stringify(favorite));
            state.favorites = favorite;
        },
        deleteTodo: (state, action) => {
            let product = state.product.filter((el)=> el.id !== action.payload);
            localStorage.setItem('product', JSON.stringify(product));
            state.product = product;
        },
        editTodo: (state, action) => {
            let product = state.product.map(el=> el.id === action.payload.id ? action.payload : el);
            localStorage.setItem('product', JSON.stringify(product));
            state.product = product;
        }
    }
})

export const { addTodo, deleteTodo, editTodo, addFavorite, deleteFavorite } = TodoSlices.actions;
export default TodoSlices.reducer;