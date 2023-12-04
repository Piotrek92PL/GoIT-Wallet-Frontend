import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './thunk';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
    lastFetchDate: null,
  },
  reducers: {
    changeIsLoading: state => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: {
    [fetchCurrency.fulfilled](state, { payload }) {
      state.data = payload;
      state.lastFetchDate = Date.now();
      state.isLoading = false;
    },
    [fetchCurrency.pending](state, { payload }) {
      state.isLoading = true;
    },
    [fetchCurrency.rejected](state, { payload }) {
      state.isError = payload;
      state.isLoading = false;
    },
  },
});

export const { changeIsLoading } = currencySlice.actions;

export default currencySlice.reducer;