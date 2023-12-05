import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import currencyReducer from './currency/slice';
import { globalReducer } from './global/slice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data', 'lastFetchDate'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),

    currency: persistReducer(currencyPersistConfig, currencyReducer),

    global: globalReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
