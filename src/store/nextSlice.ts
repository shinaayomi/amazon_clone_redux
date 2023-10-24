import { createSlice } from "@reduxjs/toolkit";
import { StoreProducts } from "../../type";

interface NextState {
  productData: StoreProducts[];
  favouriteData: StoreProducts[];
  allProducts: StoreProducts[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favouriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.productData = action.payload
      const existingProduct = state.productData.find(
        (item: StoreProducts) => item._id === action.payload._id
      );
      if(existingProduct) {
        existingProduct.quantity += action.payload.quantity
      }else{
        state.productData.push(action.payload)
      }
    },
  },
  
});

export const { addToCart } = nextSlice.actions;
export default nextSlice.reducer;
