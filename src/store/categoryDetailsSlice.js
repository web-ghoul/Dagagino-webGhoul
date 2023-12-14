import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getCategoryDetails = createAsyncThunk("categoryDetails/getCategoryDetails", async (args) => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Products/GetCategoryDetails?id=${args.categoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return res.data.data
})

const initialState = {
  isLoading: true,
  categoryDetails: null
}

export const categoryDetailsSlice = createSlice({
  name: 'categoryDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryDetails.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCategoryDetails.fulfilled, (state, { payload }) => {
      state.categoryDetails = payload
      state.isLoading = false
    })
    builder.addCase(getCategoryDetails.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})

export default categoryDetailsSlice.reducer