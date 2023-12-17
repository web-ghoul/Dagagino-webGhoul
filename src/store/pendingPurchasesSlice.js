import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getPendingPurchases = createAsyncThunk("pendingPurchases/getPendingPurchases", async () => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  if (!token) {
    return null;
  }
  const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Invoices/BoughtPendingInvoices?id=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return res.data.data
})

const initialState = {
  isLoading: true,
  pendingPurchases: null
}

export const pendingPurchasesSlice = createSlice({
  name: 'pendingPurchases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPendingPurchases.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getPendingPurchases.fulfilled, (state, { payload }) => {
      state.pendingPurchases = payload
      state.isLoading = false
    })
    builder.addCase(getPendingPurchases.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})

export default pendingPurchasesSlice.reducer