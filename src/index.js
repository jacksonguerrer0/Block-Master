import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Routes from './routes/Routes';
import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
        <Routes />
  </Provider>,
  document.getElementById('root')
);