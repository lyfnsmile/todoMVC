import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';


const store = configureStore();
store.getState()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
