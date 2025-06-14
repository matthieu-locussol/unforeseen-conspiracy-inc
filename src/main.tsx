import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

import App from './App.tsx';
import { StoreProvider } from './store/index.tsx';

import './styles/fonts.css';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <StoreProvider>
         <Toaster
            closeButton
            richColors
            duration={3000}
            position="bottom-right"
            theme="dark"
            visibleToasts={1}
         />
         <App />
      </StoreProvider>
   </StrictMode>,
);
