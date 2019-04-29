import allReducers from './reducers/allReducers';
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap-grid.min.css';

const store = createStore(allReducers);
console.log(store.getState());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
