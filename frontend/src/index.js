import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);