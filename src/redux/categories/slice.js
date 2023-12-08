import { createSlice } from '@reduxjs/toolkit';
import { getListOfCategories } from './operations';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isError: null,
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getListOfCategories.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isError = null;
      })
      .addCase(getListOfCategories.rejected, (state, { payload }) => {
        state.isError = payload;
      });
  },
});

export const { categoriesAreLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
