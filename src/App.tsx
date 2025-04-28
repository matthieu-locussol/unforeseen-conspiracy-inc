import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import './App.css';

import { GeneratorCard } from './components/GeneratorCard';
import { LocaleSwitch } from './components/LocaleSwitch';
import { ResourceCard } from './components/ResourceCard';
import { useStore } from './store/StoreContext';

const App = observer(() => {
   const { gameStore, saveStore } = useStore();

   useEffect(() => {
      saveStore.load();
      saveStore.startAutosave();

      return () => {
         saveStore.stopAutosave();
      };
   }, []);

   useEffect(() => {
      gameStore.start();

      const tickInterval = window.setInterval(() => {
         gameStore.tick();
      }, 1000);

      return () => {
         gameStore.stop();
         clearInterval(tickInterval);
      };
   }, [gameStore]);

   const handleClickProofs = () => {
      gameStore.clickProofs();
   };

   return (
      <>
         <h1>Unforeseen Conspiracy Inc.</h1>
         <div className="card">
            <div className="resources">
               <ResourceCard resourceStore={gameStore.proofs} />
               <ResourceCard resourceStore={gameStore.followers} />
               <ResourceCard resourceStore={gameStore.paranoia} />
            </div>
            <button onClick={() => handleClickProofs()}>Extract proofs</button>
         </div>
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

export default App;
