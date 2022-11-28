import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const foundedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (foundedProduct) {
         foundedProduct.quantity += 1
      } else {
        const producCopy = { ...action.payload, quantity: 1 };
        state.push(producCopy);
      }
    },

    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },

    clearAllProducts: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearAllProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
