import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './thunk';
import { setLoading } from '../global/slice';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    
    isError: false,
    data: [],
    lastFetchDate: null,
  },
  reducers: {
    changeIsLoading: state => {
      setLoading = !setLoading;
    },
  },
  extraReducers: {
    [fetchCurrency.fulfilled](state, { payload }) {
      state.data = payload;
      state.lastFetchDate = Date.now();
      setLoading = false;
    },
    [fetchCurrency.pending](setLoading, { payload }) {
      setLoading= true;
    },
    [fetchCurrency.rejected](state, { payload }) {
      state.isError = payload;
     setLoading = false;
    },
  },
});



export default currencySlice.reducer;