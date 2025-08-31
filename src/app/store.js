import { configureStore } from "@reduxjs/toolkit";
import { reviewSlice } from "../features/reviews/reviewSlice";
import { apiSlice } from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [reviewSlice.reducerPath]: reviewSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    reviewSlice.middleware,
    apiSlice.middleware,
  ],
});
