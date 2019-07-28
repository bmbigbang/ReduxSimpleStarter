import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

let createStoreWithMiddleware = applyMiddleware(...[ReduxPromise, thunkMiddleware])(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
