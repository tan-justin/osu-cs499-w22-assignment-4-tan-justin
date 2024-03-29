import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';


ReactDOM.render(

  <BrowserRouter>
      <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
      </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
