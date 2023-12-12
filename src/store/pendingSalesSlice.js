import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getPendingSales = createAsyncThunk("pendingSales/getPendingSales",async ()=>{
    const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
    const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Invoices/SoldPendingInvoices?id=${userId}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    )
    return res.data.data
})

const initialState = {
  isLoading: true,
  pendingSales:null
}

export const pendingSalesSlice = createSlice({
  name: 'pendingSales',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPendingSales.fulfilled, (state, { payload }) => {
      state.pendingSales = payload
      state.isLoading = false
    })
    builder.addCase(getPendingSales.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage,"error")
      } else {
        handleAlert(action.error,"error")
      }
    })
  },
})

export default pendingSalesSlice.reducer