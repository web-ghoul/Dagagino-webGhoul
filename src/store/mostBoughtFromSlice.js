"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getMostBoughtFrom = createAsyncThunk("mostBoughtFromSlice/getMostBoughtFrom", async (args) => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  if (!token) {
    return null;
  }
  const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
  const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/AnalysisReports/MostBoughtFrom?id=${userId}`, args.values, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data.data
})

const initialState = {
  isLoading: true,
  sellers: null
}

export const mostBoughtFromSlice = createSlice({
  name: 'mostBoughtFrom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMostBoughtFrom.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getMostBoughtFrom.fulfilled, (state, { payload }) => {
      state.sellers = payload
      state.isLoading = false
    })
    builder.addCase(getMostBoughtFrom.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})


export default mostBoughtFromSlice.reducer