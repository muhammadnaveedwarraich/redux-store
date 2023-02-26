import { createSlice } from "@reduxjs/toolkit";

// const initailState = [];
const CartSlce = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addProduct: (state, { payload }) => {
      state.push(payload);
    },
    removeProduct: (state, { payload }) => {
      return state.filter((state) => state.id !== payload.id);
    },
    removeAll: (state) => {
      return (state = []);
    },
  },
});
export const { addProduct, removeProduct, removeAll } = CartSlce.actions;
export default CartSlce.reducer;
