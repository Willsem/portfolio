import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './fonts/Montserrat/Montserrat-Regular.ttf';

import { AppRouter } from './Router';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
