import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false,
    isModalLogoutOpen: false,
    isModalAddTransaction: false,
    isModalEditTransaction: false,
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
    toggleModalEditTransaction: state => {
      state.isModalEditTransaction = !state.isModalEditTransaction;
    },
  },
});

export const {
  setLoading,
  toggleModalLogout,
  toggleModalAddTransaction,
  toggleModalEditTransaction,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
