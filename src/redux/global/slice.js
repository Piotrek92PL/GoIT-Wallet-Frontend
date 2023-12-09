import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false,
    isModalLogoutOpen: false,
    isModalAddTransaction: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleModalLogout: state => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
    toggleModalAddTransaction: state => {
      state.isModalAddTransaction = !state.isModalAddTransaction;
    },
  },
});

export const { setLoading, toggleModalLogout, toggleModalAddTransaction } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
