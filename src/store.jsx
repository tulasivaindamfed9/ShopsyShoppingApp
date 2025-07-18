import { configureStore } from '@reduxjs/toolkit'
import  LoginFormSlice  from './Redux_toolkit/Reducers/LoginFormSlice'
import  SignupSlice from './Redux_toolkit/Reducers/SignupSlice'

export default configureStore({
  reducer: {
    login:LoginFormSlice,
   signup:SignupSlice
  },
   devTools: true // Explicitly enable Redux DevTools (optional but recommended)
})