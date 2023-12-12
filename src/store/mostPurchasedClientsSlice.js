"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getMostPurchasedClients = createAsyncThunk("mostPurchasedClient/getMostPurchasedClients",async (args)=>{
    const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
    const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/AnalysisReports/MostPurchasedClients?id=${userId}`,args.values,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    return res.data.data
})

const initialState = {
  isLoading: true,
  clients:null
}

export const mostPurchasedClientsSlice = createSlice({
  name: 'mostPurchasedClients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMostPurchasedClients.fulfilled, (state, { payload }) => {
      state.clients = payload
      state.isLoading = false
    })
    builder.addCase(getMostPurchasedClients.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage,"error")
      } else {
        handleAlert(action.error,"error")
      }
    })
  },
})


export default mostPurchasedClientsSlice.reducer