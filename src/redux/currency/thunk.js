import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CurrencySchema from 'validations/CurrencySchema';
import { setLoading } from '../global/slice';

export const fetchCurrency = createAsyncThunk(
  'currency/fetch',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const axiosInstance = axios.create({
        baseURL: 'https://api.nbp.pl/api/',
      });
      const response = await axiosInstance.get(`exchangerates/tables/c`);
      try {
        await CurrencySchema.validate(response.data[0].rates);
        return response.data[0].rates;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.errors);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
