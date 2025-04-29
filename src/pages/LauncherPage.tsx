import { observer } from 'mobx-react-lite';

import { Progress } from '../components/core/ui/progress';
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
         <Progress max={100} value={30} />
      </>
   );
});
