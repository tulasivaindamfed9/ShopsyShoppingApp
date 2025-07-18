import { createSlice } from '@reduxjs/toolkit'

const initialState={
    userName:"om",
    password:"namo"
}

export const LoginFormSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    testLoginDetails:(state,action)=>{
     state.userName=action.payload.username,
     state.password=action.payload.password
    }
  }
})

// Action creators are generated for each case reducer function
export const { testLoginDetails} = LoginFormSlice.actions

export default LoginFormSlice.reducer