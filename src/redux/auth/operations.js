import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from '../global/slice';
axios.defaults.baseURL = 'http://localhost:3000';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const token = localStorage.getItem('token');
if (token) {
  setAuthHeader(token);
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const res = await axios.post('/api/users/signup', credentials);

      setAuthHeader(res.data.token);
      localStorage.setItem('token', res.data.token);
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

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const res = await axios.post('/api/users/login', credentials);

      setAuthHeader(res.data.token);
      localStorage.setItem('token', res.data.token);
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

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  thunkAPI.dispatch(setLoading(true));
  try {
    await axios.get('/api/users/logout');

    clearAuthHeader();
    localStorage.removeItem('token');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
