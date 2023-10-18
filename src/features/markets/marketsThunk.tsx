import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export const getMarkets = createAsyncThunk('markets/getMarkets', async () => {
  const response = await axios.get(`${API_URL}/mkt/markets/`, {})
  return response.data
})
