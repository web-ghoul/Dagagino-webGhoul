"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getSystemProducts = createAsyncThunk("systemProducts/getSystemProducts", async (args) => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  const userType = Cookies.get(`${process.env.NEXT_PUBLIC_USERTYPE_NAME}`)
  if (userType === "client") {
    return { data: [], index: 0, last: true }
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Products/${userType === "farm" ? "GetFarmProducts" : "GetSupplierProducts"}?start=${args.index}&count=10`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return { data: res.data.data, index: args.index, last: res.data.data.length < 10 }
})

const initialState = {
  isLoading: true,
  systemProducts: null,
  index: 0,
  last: false
}

export const systemProductsSlice = createSlice({
  name: 'systemProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSystemProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getSystemProducts.fulfilled, (state, { payload }) => {
      if (payload.index > 0) {
        state.systemProducts.push(...payload.data)
      } else {
        state.systemProducts = payload.data
      }
      state.index = payload.index
      state.isLoading = false
      state.last = payload.last
    })
    builder.addCase(getSystemProducts.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})


export default systemProductsSlice.reducer