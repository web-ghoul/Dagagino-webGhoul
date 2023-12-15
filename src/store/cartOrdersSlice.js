import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getCartOrders = createAsyncThunk("cartOrders/getCartOrders", async () => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Cart/GetMyCart?id=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return res.data.data
})

const initialState = {
  isLoading: true,
  cartOrders: null
}

export const cartOrdersSlice = createSlice({
  name: 'cartOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartOrders.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCartOrders.fulfilled, (state, { payload }) => {
      state.cartOrders = payload
      state.isLoading = false
    })
    builder.addCase(getCartOrders.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})

export default cartOrdersSlice.reducer