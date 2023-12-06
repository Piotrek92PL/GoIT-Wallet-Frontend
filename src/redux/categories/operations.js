import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from '../global/slice';

axios.defaults.baseURL = 'http://localhost:3000';

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (transactionData, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const res = await axios.post('/api/transactions', transactionData);
      return res.data;
    } catch (error) {
      if (!error.response) {
        return thunkAPI.rejectWithValue(
          'Problem with connecting to the server'
        );
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
