import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'


const initialState = {
  token: null,
  userId:null,
  userType:null,
  userTypeId:null,
  signed:false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action)=>{
        Cookies.set(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`,action.payload.token,{ expires: 30 })
        Cookies.set(`${process.env.NEXT_PUBLIC_USERID_NAME}`,action.payload.userId,{ expires: 30 })
        Cookies.set(`${process.env.NEXT_PUBLIC_USERTYPEID_NAME}`,action.payload.userTypeId,{ expires: 30 })
        Cookies.set(`${process.env.NEXT_PUBLIC_USERTYPE_NAME}`,action.payload.userType,{ expires: 30 })
        state.token = action.payload.token
        state.userId = action.payload.userId
        state.userType = action.payload.userType
        state.userTypeId = action.payload.userTypeId
        state.signed = true
    },
    logout: (state)=>{
        Cookies.remove(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
        Cookies.remove(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
        Cookies.remove(`${process.env.NEXT_PUBLIC_USERTYPE_NAME}`)
        Cookies.remove(`${process.env.NEXT_PUBLIC_USERTYPEID_NAME}`)
        state.token = null
        state.userId = null
        state.userType = null
        state.userTypeId = null
        state.signed = false
    },
    setAuth:(state,action)=>{
      state.userId = action.payload.userId
      state.userType= action.payload.userType
      state.userTypeId= action.payload.userTypeId
      state.token= action.payload.token
      if(action.payload.token && action.payload.userId && action.payload.userTypeId && action.payload.userType){
        state.signed = true
      }
    }
  }
})


export const {login, logout,setAuth} = authSlice.actions
export default authSlice.reducer