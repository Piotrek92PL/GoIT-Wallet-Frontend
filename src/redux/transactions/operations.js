import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from '../global/slice';
import { BACKEND_BASE_URL } from 'redux/global/constants';
axios.defaults.baseURL = BACKEND_BASE_URL;

export const getAllTransactions = createAsyncThunk(
  'transactions/getAll',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const res = await axios.get('/api/transactions');
      return res.data;
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
  async (transaction, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const formattedTransaction = {
        ...transaction,
        category: parseInt(transaction.category, 10),
        date: new Date(transaction.date),
        amount: parseFloat(transaction.amount),
      };

      const res = await axios.post('/api/transactions', formattedTransaction);
      return res.data;
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

export const getTransactionById = createAsyncThunk(
  'transactions/getById',
  async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const res = await axios.get(`/api/transactions/${id}`);
      return res.data;
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

export const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const res = await axios.delete(`/api/transactions/${id}`);
      return res.data;
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

export const updateTransaction = createAsyncThunk(
  'transactions/update',
  async (transaction, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const formattedTransaction = {
        ...transaction,
        category: parseInt(transaction.category, 10),
        date: new Date(transaction.date),
        amount: parseFloat(transaction.amount),
      };
      const res = await axios.put(
        `/api/transactions/${transaction.id}`,
        formattedTransaction
      );
      return res.data;
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

export const getUserStatisticsByDate = createAsyncThunk(
  'transactions/getUserStatisticsByDate',
  async ({ year, month }, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const url = `/api/transactions/stats/${userId}/${year}/${month}`;
      const res = await axios.get(url);
      return res.data;
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
