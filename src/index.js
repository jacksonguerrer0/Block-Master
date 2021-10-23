import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import { Provider } from 'react-redux'
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <Provider store={store}>
        <Routes />
  </Provider>,
  document.getElementById('root')
);