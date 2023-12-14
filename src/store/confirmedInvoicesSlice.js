import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getConfirmedInvoices = createAsyncThunk("confirmedInvoices/getConfirmedInvoices", async () => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Invoices/SoldConfirmedInvoices?id=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return res.data.data
})

const initialState = {
  isLoading: true,
  confirmedInvoices: null
}

export const confirmedInvoicesSlice = createSlice({
  name: 'confirmedInvoices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConfirmedInvoices.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getConfirmedInvoices.fulfilled, (state, { payload }) => {
      state.confirmedInvoices = payload
      state.isLoading = false
    })
    builder.addCase(getConfirmedInvoices.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})

export default confirmedInvoicesSlice.reducer