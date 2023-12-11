import { createSlice } from '@reduxjs/toolkit';
import { getAllTransactions } from '../transactions/operations';

const initialState = {
  totalBalance: 0,
  totalExpese: 0,
  totalIncome: 0,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      // Obliczenie salda na podstawie transakcji
      let income = 0;
      let expense = 0;
      console.log(
        'fincance reducer - action.payload.data',
        action.payload.data
      );
      const balance = action.payload.data.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
          income += transaction.amount;
          return acc + transaction.amount;
        }
        expense += transaction.amount;
        return acc - transaction.amount;
      }, 0);
      state.totalIncome = income;
      state.totalExpese = expense;
      state.totalBalance = balance;
    });
  },
});

export const financeReducer = financeSlice.reducer;
