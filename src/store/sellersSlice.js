"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getSellers = createAsyncThunk("sellers/getSellers",async (args)=>{
    const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Users/GetProductSellers?id=${args.id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res.data.data
})

const initialState = {
  isLoading: true,
  sellers:null,
  type:null
}

export const sellersSlice = createSlice({
  name: 'sellers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSellers.fulfilled, (state, { payload }) => {
        if(payload && payload.length > 0){
            if(payload[0].hasOwnProperty("supplier")){
                state.type = "supplier"
            }else{
                state.type = "farm"
            }
        }
        state.sellers = payload
        state.isLoading = false
    })
    builder.addCase(getSellers.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage,"error")
      } else {
        handleAlert(action.error,"error")
      }
    })
  },
})


export default sellersSlice.reducer