import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

import rootStore from './store';
import { BrowserRouter } from 'react-router-dom';

const { store, persistor } = rootStore;

ReactDOM.render(
  <BrowserRouter>
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
  </BrowserRouter>,
  document.getElementById('root'),
);