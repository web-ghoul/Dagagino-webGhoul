import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getProduct = createAsyncThunk("product/getProduct", async (args) => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  if (!token) {
    return null;
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Products/GetProductByID?id=${args.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return res.data.data
})

const initialState = {
  isLoading: true,
  product: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.product = payload
      state.isLoading = false
    })
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})


export default productSlice.reducer