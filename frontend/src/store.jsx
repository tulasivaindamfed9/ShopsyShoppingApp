import { configureStore } from '@reduxjs/toolkit'
import  LoginFormSlice  from './Redux_toolkit/Reducers/LoginFormSlice'
import  SignupSlice from './Redux_toolkit/Reducers/SignupSlice'
import ProductsReduxThunkSlice from './Redux_toolkit/Reducers/ProductsReduxThunkSlice'
import  CartSlice  from './Redux_toolkit/Reducers/CartSLice'

export default configureStore({
  reducer: {
    login:LoginFormSlice,
   signup:SignupSlice,
   beauty:ProductsReduxThunkSlice,
   cart:CartSlice
  },
   devTools: true // Explicitly enable Redux DevTools (optional but recommended)
})