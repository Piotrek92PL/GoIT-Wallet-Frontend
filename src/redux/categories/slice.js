import { createSlice } from '@reduxjs/toolkit';
import { addTransaction } from './operations';
import { getListOfCategories } from './operations';


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isLoading: false,
    isError: null,
    data: [],
  },
  reducers: {
    categoriesAreLoading: state => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: {
    [getListOfCategories.fulfilled](state, { payload }) {
      state.data = payload;
      state.isLoading = false;
      state.isError = null;
    },
    [getListOfCategories.pending](state, { payload }) {
      state.isLoading = true;
    },
    [getListOfCategories.rejected](state, { payload }) {
      state.isError = payload;
      state.isLoading = false;
    },
  },
});

export const { categoriesAreLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;

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
