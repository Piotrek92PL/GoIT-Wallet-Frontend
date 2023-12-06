import { createSlice } from '@reduxjs/toolkit';
import { addTransaction } from './operations';

const initialState = {
  transactions: [],
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
