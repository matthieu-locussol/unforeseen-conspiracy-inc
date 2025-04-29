import { observer } from 'mobx-react-lite';

import { useStore } from '../store/StoreContext';

export const LauncherPage = observer(() => {
   const { routingStore } = useStore();

   return (
      <>
         <h1 className="text-3xl font-orbitron">LAUNCHER</h1>
         <button
            onClick={() => {
               routingStore.setPage('game');
            }}
         >
            GO TO GAME
         </button>
      </>
   );
});
