import { createSlice } from '@reduxjs/toolkit';

import {
  addTransaction,
  getAllTransactions,
  getTransactionById,
  deleteTransaction,
  updateTransaction,
} from './operations';

const initialState = {
  transactions: [],
  error: null,
  currentTransaction: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions = [...state.transactions, action.payload];
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getTransactionById.fulfilled, (state, action) => {
        state.currentTransaction = action.payload;
      })
      .addCase(getTransactionById.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          transaction => transaction._id !== action.payload._id
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.map(transaction =>
          transaction._id === action.payload._id ? action.payload : transaction
        );
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
