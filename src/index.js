import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import { Loader } from './components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter basename="/GoIT-Wallet-Frontend">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
