import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromiseMiddleware from 'redux-promise-middleware';

import './index.css';
import App from './App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromiseMiddleware())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
