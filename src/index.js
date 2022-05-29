import React from 'react';
import './index.scss';
import App from './App';
import { createRoot } from 'react-dom/client';
import Context from './context/Context';
const containerRoot = document.getElementById('root');
const root = createRoot(containerRoot);

root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
