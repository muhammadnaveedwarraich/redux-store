import { createSlice } from "@reduxjs/toolkit";

// const initailState = [];
export const STATUSES = {
  IDEL: "Idel",
  PADDING: "Padding",
  ERROE: "Error",
};

const ProductSlcie = createSlice({
  name: "cartSlice",
  initialState: {
    data: [],
    status: STATUSES,
  },
  reducers: {
    setProduct: (state, { payload }) => {
      state.data = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});
export const { setProduct, setStatus } = ProductSlcie.actions;
export default ProductSlcie.reducer;

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch(setStatus(STATUSES.PADDING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProduct(data));
      dispatch(setStatus(STATUSES.IDEL));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROE));
    }
  };
};
