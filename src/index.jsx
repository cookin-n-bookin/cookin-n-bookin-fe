import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Toaster } from 'react-hot-toast'

render(
  <React.StrictMode>
    <Router>
      <Toaster />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
