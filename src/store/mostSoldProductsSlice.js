"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getMostSoldProducts = createAsyncThunk("mostSoldProducts/getMostSoldProducts", async (args) => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  if (!token) {
    return null;
  }
  const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
  const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/AnalysisReports/MostSoldProduct?id=${userId}`, args.values, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data.data
})

const initialState = {
  isLoading: true,
  products: null
}

export const mostSoldProductsSlice = createSlice({
  name: 'mostSoldProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMostSoldProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getMostSoldProducts.fulfilled, (state, { payload }) => {
      state.products = payload
      state.isLoading = false
    })
    builder.addCase(getMostSoldProducts.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})


export default mostSoldProductsSlice.reducer