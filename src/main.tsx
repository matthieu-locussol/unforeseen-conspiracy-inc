import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { StoreProvider } from './store/index.tsx';

import './styles/fonts.css';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <StoreProvider>
         <App />
      </StoreProvider>
   </StrictMode>,
);
