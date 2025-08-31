import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIitems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exixtingItem = state.cartIitems.find(
                (cartIitem) => cartIitem.id === item.id
            )

            if (exixtingItem) {
                
                exixtingItem.quantity += item.quantity
            } else {
                state.cartIitems.push(item);
            }
        },
        removeItem: (state, action) => {
            state.cartIitems = state.cartIitems.filter(
                (cartIitem) => cartIitem.id !== action.payload
            );
        }
    }
})

export const {addToCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;