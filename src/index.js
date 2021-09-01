import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>      
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>       
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();