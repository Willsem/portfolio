import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import './fonts/Montserrat/Montserrat-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
