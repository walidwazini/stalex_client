import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './index.css';
import App from './App';

const history = createBrowserHistory({ window })
console.log(history)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);