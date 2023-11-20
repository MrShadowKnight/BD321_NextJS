import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  item: any[];
}

const initialState: cartState = {
  item: [],
};

export const cartSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      state.item.push(action.payload);
      // set to LS
      localStorage.setItem("cart", JSON.stringify(state.item));
    },
    addDataFromLS: (state, action: PayloadAction<number>) => {
      state.item = [...state.item, action.payload];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
