import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import { CartProvider } from './context/CartContext'; // Εισαγωγή του CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/*  Τύλιξε το App */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
