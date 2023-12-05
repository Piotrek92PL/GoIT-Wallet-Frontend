import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false,
    isModalLogoutOpen: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleModalLogout: state => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
  },
});

export const { setLoading, toggleModalLogout } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
