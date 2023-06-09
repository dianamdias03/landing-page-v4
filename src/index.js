import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'

createRoot(
  document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

reportWebVitals();
