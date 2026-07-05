import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ServicesProvider } from './context/ServicesContext';
import './base.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicesProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ServicesProvider>
  </React.StrictMode>
);
