import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type CartRootState = ReturnType<typeof store.getState>; //getState returns cart:CartState
