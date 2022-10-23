import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/reset.css";

import { FotoContextProvider } from './context/FotoContext';
import { ProgressbarContextProvider } from './context/ProgressbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FotoContextProvider>
      <ProgressbarContextProvider>
        <App />
      </ProgressbarContextProvider>
    </FotoContextProvider>
  </React.StrictMode>
)

