import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  items: [],
  temporaryItems: [],
  totalPrice: 0,
};

export const CartSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // alert:("product added to cart")
      // ckecking if item is alredy added, increase the quantity by 1 else add the item to cart
      const existingItem = state.items.find(
        (each) => each.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); //hardcoding quantity to 1
      }
      state.temporaryItems = [...state.items];

      // updating the price
      state.totalPrice = state.items.reduce((sum, eachItem) => {
        return sum + eachItem.price * eachItem.quantity;
      }, 0);
    },

    removeItem: (state, action) => {
      // in this reducer , setting the state items with only those whose id is not equal to the id passed from cart component
      state.items = state.items.filter((each) => {
        return each.id !== action.payload;
      });
      // now setting all items present after filtering to temp items
      state.temporaryItems = [...state.items];
      // Recalculate the total price
      state.totalPrice = state.items.reduce((sum, eachItem) => {
        return sum + eachItem.price * eachItem.quantity;
      }, 0);
    },

    //reducer for updating the quantity of the product
    updateTempIitem: (state, action) => {
      const tempItem = state.temporaryItems.find((temp) => {
        return temp.id === action.payload.id;
      });
      if (tempItem) {
        tempItem.quantity = action.payload.quantity;
      }
    },

    applyTempUpdate: (state, action) => {
      const tempItem = state.temporaryItems.find(
        (temp) => temp.id === action.payload
      );
      const cartItem = state.items.find((item) => item.id === action.payload);
      if (tempItem && cartItem) {
        cartItem.quantity = tempItem.quantity;
      }
      // Recalculate the total price
      state.totalPrice = state.items.reduce((sum, eachItem) => {
        return sum + eachItem.price * eachItem.quantity;
      }, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, updateTempIitem, applyTempUpdate } =
  CartSlice.actions;

export default CartSlice.reducer;
