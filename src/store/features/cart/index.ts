import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: number[]; // Assuming you're storing numbers in the cart
}

const initialState: CartState = {
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
    addDataFromLS: (state, action: PayloadAction<number[]>) => {
      state.items = [...action.payload];
    },
  },
});

// export reducer
export default cartSlice.reducer;

// export actions
export const { addItemToCart, addDataFromLS } = cartSlice.actions;
