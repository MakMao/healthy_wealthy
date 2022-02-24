import React from 'react';
import ReactDOM from 'react-dom';
import {ProductProvider} from './context/Products_context'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



