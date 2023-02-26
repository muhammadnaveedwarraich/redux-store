import { configureStore } from "@reduxjs/toolkit";
import ParoductSlice from "./CartSlice";
const store = configureStore({
  reducer: {
    Productscart: ParoductSlice,
  },
});
export default store;
