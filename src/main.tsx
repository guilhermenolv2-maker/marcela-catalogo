import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { CartProvider } from './context/CartContext';
import { AppRoutes } from './routes/AppRoutes';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </HelmetProvider>
  </StrictMode>,
);
