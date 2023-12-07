import { createSlice } from '@reduxjs/toolkit';
// import { fetchCurrency } from './thunk';
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
