import { observer } from 'mobx-react-lite';

import './App.css';

import { GeneratorCard } from './components/GeneratorCard';
import { LocaleSwitch } from './components/LocaleSwitch';
import { ResourceCard } from './components/ResourceCard';
import { useGameLifecycle } from './hooks/useGameLifecycle';
import { useStore } from './store/StoreContext';

const App = observer(() => {
   useGameLifecycle();

   const { gameStore } = useStore();

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
