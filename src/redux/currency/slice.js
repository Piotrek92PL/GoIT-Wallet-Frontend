import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './thunk';


export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    
    isError: false,
    data: [],
    lastFetchDate: null,
  },
  reducers: {
  },
  extraReducers: {
    [fetchCurrency.fulfilled](state, { payload }) {
      state.data = payload;
      state.lastFetchDate = Date.now();
      
    },
    
    [fetchCurrency.rejected](state, { payload }) {
      state.isError = payload;
    
    },
  },
});



export default currencySlice.reducer;