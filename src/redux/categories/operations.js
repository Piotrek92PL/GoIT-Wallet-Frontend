import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from '../global/slice';
import { BACKEND_BASE_URL } from 'redux/global/constants';
axios.defaults.baseURL = BACKEND_BASE_URL;

export const getListOfCategories = createAsyncThunk(
  'category/getList',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const res = await axios.get('/api/category');
      return res.data.data;
    } catch (error) {
      if (!error.response) {
        return thunkAPI.rejectWithValue('Could not connect with the server');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

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
