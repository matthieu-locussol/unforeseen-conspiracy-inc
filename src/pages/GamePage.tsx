import { observer } from 'mobx-react-lite';

import { ExtractButton } from '../components/core/ExtractButton';
import { CustomIcon } from '../components/core/Icons';
import { Button } from '../components/core/ui/button';
import { BulkBuyButtons } from '../components/gameplay/BulkBuyButtons';
import { GeneratorCard } from '../components/gameplay/GeneratorCard';
import { ResourceCard } from '../components/gameplay/ResourceCard';
import { LocaleSwitch } from '../components/LocaleSwitch';
import { useGameLifecycle } from '../hooks/useGameLifecycle';
import { useStore } from '../store/StoreContext';

export const GamePage = observer(() => {
   const { gameStore } = useStore();

   // Update game state on every tick
   useGameLifecycle();

   return (
      <div className="flex flex-col gap-4">
         <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl font-bold z-10 font-orbitron tracking-wider text-green-400 [text-shadow:0_0_5px_rgba(0,255,0,0.3)] mb-4">
               Unforeseen Conspiracy Inc.
            </h1>
            <div className="flex items-center gap-2 ml-auto">
               <Button className="px-3" variant="dark" onClick={() => gameStore.togglePlay()}>
                  <CustomIcon className="w-4 h-4" icon={gameStore.isRunning ? 'pause' : 'play'} />
               </Button>
               <Button className="px-3" variant="dark">
                  <CustomIcon className="w-4 h-4" icon="settings" />
               </Button>
            </div>
         </div>
         <div className="flex gap-4">
            <ResourceCard resourceStore={gameStore.proofs} />
            <ResourceCard resourceStore={gameStore.followers} />
            <ResourceCard resourceStore={gameStore.paranoia} />
         </div>
         <div className="flex justify-between">
            <ExtractButton onClick={() => gameStore.clickProofs()}>Extract proofs</ExtractButton>
            <BulkBuyButtons />
         </div>
         <div className="generators">
            {gameStore.generators.map((generator) => (
               <GeneratorCard key={generator.id} generatorStore={generator} />
            ))}
         </div>
         <LocaleSwitch />
         <div className="border-t border-dashed border-green-500/20 pt-2 text-xs text-green-500/40 text-center mt-8">
            <p>CLASSIFIED INFORMATION - AUTHORIZED ACCESS ONLY - LEVEL 1 CLEARANCE REQUIRED</p>
            <p>MAJESTIC-12 OVERSIGHT COMMITTEE - PROJECT QUANTUM - {new Date().toISOString()}</p>
         </div>
      </div>
   );
});
