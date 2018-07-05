/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import reducers from './reducers';

import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

import { apiUrl } from './config';

axios.defaults.baseURL = apiUrl;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);

registerServiceWorker();
