import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axios.defaults.baseURL = 'http://localhost:3000/';

export const getFinance = createAsyncThunk(
	'finance/getFinancesData',
	async (_, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const token = state?.user?.token || '';

			if (!token)
				return thunkAPI.rejectWithValue('Valid token is not provided');
			setAuthHeader(token);

			const response = await axios.get('/transactions');

			return response.data.data.transactions;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getTransactions = createAsyncThunk(
	'transactions/getTransactionsByYearAndMonth',
	async (data, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const token = state?.user?.token || '';

			if (!token)
				return thunkAPI.rejectWithValue('Valid token is not provided');
			setAuthHeader(token);

			const response = await axios.get(
				`/transactions/stats/${data.selectedYear}/${data.selectedMonth}`
			);

			return response.data.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const postTransactions = createAsyncThunk(
	'transactions/postTransactions',
	async (credentials, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const token = state?.user?.token || '';

			if (!token)
				return thunkAPI.rejectWithValue('Valid token is not provided');
			setAuthHeader(token);

			const response = await axios.post('/transactions/', credentials);

			return response.data;
		} catch (e) {
			Notiflix.Notify.init({
				timeout: 5000,
			});
			Notiflix.Notify.failure(e.response.data.message);
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const editTransaction = createAsyncThunk(
	'transactions/editTransaction',
	async (credentials, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const token = state?.user?.token || '';

			if (!token)
				return thunkAPI.rejectWithValue('Valid token is not provided');
			setAuthHeader(token);

			const response = await axios.put(
				`/transactions/${credentials.id}`,
				credentials.data
			);

			return response.data;
		} catch (e) {
			Notiflix.Notify.init({
				timeout: 5000,
			});
			Notiflix.Notify.failure(e.response.data.message);
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
