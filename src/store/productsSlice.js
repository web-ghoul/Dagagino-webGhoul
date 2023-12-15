"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getProducts = createAsyncThunk("products/getProducts", async (args) => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  let url;
  let b = args.hasOwnProperty("categoryId")
  if (b) {
    url = `/Products/GetCategoryProducts?id=${args.categoryId}&start=${args.index}&count=10`
  } else {
    url = `/Products/GetAllProducts?start=${args.index}&count=10`
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (b) {
    return res.data.data
  }
  return { data: res.data.data, index: args.index, last: res.data.data.length < 10 }
})

const initialState = {
  isLoading: true,
  products: null,
  index: 0,
  last: false
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      if (payload.hasOwnProperty("data")) {
        if (payload.index > 0) {
          state.products.push(...payload.data)
        } else {
          state.products = payload.data
        }
        state.index = payload.index
        state.last = payload.last
      } else {
        state.products = payload
      }
      state.isLoading = false
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})

export default productsSlice.reducer