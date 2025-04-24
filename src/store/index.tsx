import { observer } from 'mobx-react-lite';

import { store } from './Store';
import { StoreContext } from './StoreContext';

interface StoreProviderProps {
   children: React.ReactNode;
}

export const StoreProvider = observer(({ children }: StoreProviderProps) => (
   <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
));
