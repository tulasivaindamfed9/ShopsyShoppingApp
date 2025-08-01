import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  beautyProducts: [],
  isLoading: false,
};

// api call using create async thunk fun
// https://fakestoreapi.com/products
// http://localhost:8000/products
export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data)
    return response.data; // Return just the products array
  }
);

export const ProductsReduxThunk = createSlice({
  name: "products_thunk",
  initialState,
  extraReducers:(builder)=> {
    builder.addCase(getProducts.pending, (state)=>{
        state.isLoading=true
    }),
    builder.addCase(getProducts.fulfilled, (state,action)=>{
        state.beautyProducts=action.payload.products,
        state.isLoading=false

    })
  },
});

// Action creators are generated for each case reducer function
// export const { testLoginDetails } = ProductsReduxThunk.actions;

export default ProductsReduxThunk.reducer;
