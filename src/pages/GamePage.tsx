import { observer } from 'mobx-react-lite';

import { BulkBuyButtons } from '../components/BulkBuyButtons';
import { GeneratorCard } from '../components/GeneratorCard';
import { LocaleSwitch } from '../components/LocaleSwitch';
import { ResourceCard } from '../components/ResourceCard';
import { useGameLifecycle } from '../hooks/useGameLifecycle';
import { useStore } from '../store/StoreContext';

export const GamePage = observer(() => {
   const { gameStore } = useStore();

   // Update game state on every tick
   useGameLifecycle();

   return (
      <>
         <h1 className="text-3xl font-orbitron">Unforeseen Conspiracy Inc.</h1>
         <div className="card">
            <div className="resources">
               <ResourceCard resourceStore={gameStore.proofs} />
               <ResourceCard resourceStore={gameStore.followers} />
               <ResourceCard resourceStore={gameStore.paranoia} />
            </div>
            <button onClick={() => gameStore.clickProofs()}>Extract proofs</button>
         </div>
         <BulkBuyButtons />
         <div className="generators">
            {gameStore.generators.map((generator) => (
               <GeneratorCard key={generator.id} generatorStore={generator} />
            ))}
         </div>
         <LocaleSwitch />
         <div className="controls">
            <button
               onClick={() => {
                  if (gameStore.isRunning) {
                     gameStore.stop();
                  } else {
                     gameStore.start();
                  }
               }}
            >
               {gameStore.isRunning ? 'Pause' : 'Resume'}
            </button>
         </div>
      </>
   );
});
