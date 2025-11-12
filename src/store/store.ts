import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice";

configureStore({
  reducer: cartSlice.reducer,
});
