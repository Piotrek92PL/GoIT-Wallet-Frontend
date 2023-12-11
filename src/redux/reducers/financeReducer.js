import { createSlice } from '@reduxjs/toolkit';
import { getAllTransactions } from '../transactions/operations';

const initialState = {
  totalBalance: 0,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      // Obliczenie salda na podstawie transakcji
      const balance = action.payload.data.reduce((acc, transaction) => {
        return transaction.type === 'income'
          ? acc + transaction.amount
          : acc - transaction.amount;
      }, 0);
      state.totalBalance = balance;
    });
  },
});

export const financeReducer = financeSlice.reducer;
