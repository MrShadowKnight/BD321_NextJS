import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
<<<<<<< HEAD
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
=======
  items: any[];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
      // set to LS
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    addDataFromLS: (state, action: PayloadAction<[]>) => {
      state.items = [...action.payload];
>>>>>>> c75980f1e1539cb3f30c36142554364a36d4d214
    },
  },
});

<<<<<<< HEAD
export const { addItemToCart } = cartSlice.actions;

=======
// export reducer
export const { addItemToCart, addDataFromLS } = cartSlice.actions;
// export slice
>>>>>>> c75980f1e1539cb3f30c36142554364a36d4d214
export default cartSlice.reducer;
