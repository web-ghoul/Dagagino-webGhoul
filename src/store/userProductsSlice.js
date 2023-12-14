"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getUserProducts = createAsyncThunk("userProducts/getUserProducts", async () => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  const userType = Cookies.get(`${process.env.NEXT_PUBLIC_USERTYPE_NAME}`)
  const userTypeId = Cookies.get(`${process.env.NEXT_PUBLIC_USERTYPEID_NAME}`)
  if (userType === "client") {
    return []
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Users/${userType === "farm" ? "GetFarmProducts" : "GetSupplierProducts"}?id=${userTypeId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data.data
})

const initialState = {
  isLoading: true,
  userProducts: null,
}

export const userProductsSlice = createSlice({
  name: 'userProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUserProducts.fulfilled, (state, { payload }) => {
      state.userProducts = payload
      state.isLoading = false
    })
    builder.addCase(getUserProducts.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})


export default userProductsSlice.reducer