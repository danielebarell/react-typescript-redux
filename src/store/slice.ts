import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};
type CartState = {
  items: CartItem[];
};
const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      //se l'item esiste già nello store allora aumenta di 1 la quantità di quell'item.
      //se l'item non esiste allora aggiungilo con quantità 1.
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.items[index].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state: CartState, action: PayloadAction<string>) {
      //il payload dell'action corrisponde all'id dell'item
      //se l'item ha quantità>1 allora diminuisci di 1 la quantità
      //altrimenti elimina l'item
      const index = state.items.findIndex((itm) => itm.id === action.payload);
      const item = state.items[index];
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.items.slice(index, 1);
      }
    },
  },
});
