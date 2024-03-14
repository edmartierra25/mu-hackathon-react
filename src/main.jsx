import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@manulife/mux/core/typography/assets/fonts/fonts.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
