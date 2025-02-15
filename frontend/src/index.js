import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { GlobalValueProvider } from './GlobalContext/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalValueProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalValueProvider>
);