import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlics from "./productSlics";
const store = configureStore({
  reducer: {
    Cart: cartSlice,
    ProductList: productSlics,
  },
});
export default store;
