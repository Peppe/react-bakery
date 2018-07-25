import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import orders from './reducers/orders';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const store = createStore(orders)
console.log("in index.js");
console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
