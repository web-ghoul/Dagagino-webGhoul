import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { handleAlert } from "@/functions/handleAlert";

export const getProfile = createAsyncThunk("profile/getProfile", async (args) => {
  const token = Cookies.get(`${process.env.NEXT_PUBLIC_TOKEN_NAME}`)
  if (!token) {
    return null;
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/Users/GetProfile?id=${args.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return res.data.data
})

const initialState = {
  isLoading: true,
  profile: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload
      state.isLoading = false
    })
    builder.addCase(getProfile.rejected, (state, action) => {
      state.isLoading = true
      if (action.payload) {
        handleAlert(action.payload.errorMessage, "error")
      } else {
        handleAlert(action.error, "error")
      }
    })
  },
})


export default profileSlice.reducer