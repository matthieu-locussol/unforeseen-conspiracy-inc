import { useEffect } from 'react';

import { useStore } from '../store/StoreContext';

export const useGameLifecycle = () => {
   const { gameStore, saveStore } = useStore();

   useEffect(() => {
      const loaded = saveStore.load();

      if (!loaded) {
         gameStore.start();
      }

      saveStore.startAutosave();

      const tickInterval = window.setInterval(() => {
         gameStore.tick();
      }, 1000);

      return () => {
         saveStore.stopAutosave();
         gameStore.stop();
         clearInterval(tickInterval);
      };
   }, [gameStore]);
};
