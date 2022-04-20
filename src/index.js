import React from 'react';
import ReactDOM from 'react-dom';
import {ProductProvider} from './context/Products_context'
import {FilterProvider} from './context/Filters_context';
import { CartProvider } from './context/cart_context';
import {UserProvider} from './context/user_context'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



