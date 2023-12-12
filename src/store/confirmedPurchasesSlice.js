import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getConfirmedPurchases = createAsyncThunk("confirmedPurchases/getConfirmedInvoices",async ()=>{
    const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
    const userId = Cookies.get(`${process.env.NEXT_PUBLIC_USERID_NAME}`)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Invoices/BoughtConfirmedInvoices?id=${userId}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    )
    return res.data.data
})

const initialState = {
  isLoading: true,
  confirmedPurchases:null
}

export const confirmedPurchasesSlice = createSlice({
  name: 'confirmedPurchases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConfirmedPurchases.fulfilled, (state, { payload }) => {
      state.confirmedPurchases = payload
      state.isLoading = false
    })
    builder.addCase(getConfirmedPurchases.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage,"error")
      } else {
        handleAlert(action.error,"error")
      }
    })
  },
})

export default confirmedPurchasesSlice.reducer