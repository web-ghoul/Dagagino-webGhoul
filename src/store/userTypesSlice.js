"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { handleAlert } from "@/functions/handleAlert";

export const getUserTypes = createAsyncThunk("userTypes/getUserTypes", async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/LookUp/GetUsersTypes`)
  return res.data.data
})

const initialState = {
  isLoading: true,
  userTypes: null
}

export const userTypesSlice = createSlice({
  name: 'userTypes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserTypes.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUserTypes.fulfilled, (state, { payload }) => {
      state.userTypes = payload[0].subTypes
      state.isLoading = false
    })
    builder.addCase(getUserTypes.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})


export default userTypesSlice.reducer