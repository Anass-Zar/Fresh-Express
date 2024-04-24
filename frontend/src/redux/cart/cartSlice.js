import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { list: [] },
    reducers: {
        addToCart(state, action) {
            const existingProductIndex = state.list.findIndex(product => product._id === action.payload._id);
            if (existingProductIndex !== -1) {
                state.list[existingProductIndex].quantity += action.payload.quantity;
            } else {
                state.list.push(action.payload);
            }
        },
        updateQuantity(state, action) {
            const check = state.list.findIndex(product => product._id === action.payload._id)
            if (check !== -1) {
                state.list[check].quantity = action.payload.quantity 
            }
        },
        removeItem(state, action) {
            state.list = state.list.filter(product => product._id !== action.payload._id)
        }
    }
})

const { actions, reducer } = cartSlice

export const { addToCart, updateQuantity, removeItem } = actions

export default reducer