import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SoundProvider } from 'react-sounds';
import { Toaster } from 'sonner';

import App from './App.tsx';
import { StoreProvider } from './store/index.tsx';

import './styles/fonts.css';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <StoreProvider>
         <SoundProvider
            initialEnabled={true}
            preload={['game/hit', 'ui/submit', 'ui/button_medium', 'ui/window_close']}
         >
            <Toaster
               closeButton
               richColors
               duration={3000}
               position="bottom-right"
               theme="dark"
               visibleToasts={1}
            />
            <App />
         </SoundProvider>
      </StoreProvider>
   </StrictMode>,
);
