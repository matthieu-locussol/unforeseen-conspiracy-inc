import type { Store } from './Store';

import { createContext, useContext } from 'react';

import { store } from './Store';

export const StoreContext = createContext<{ store: Store }>({ store });

export const useStore = () => {
   const storeObject = useContext(StoreContext);

   if (!storeObject.store) {
      throw new Error('useStore must be used within a StoreProvider.');
   }

   return storeObject.store;
};
