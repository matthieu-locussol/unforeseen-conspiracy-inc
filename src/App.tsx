import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import reactLogo from './assets/react.svg';

import './App.css';
import viteLogo from '/vite.svg';

import { useI18n } from './i18n/i18n';
import { useStore } from './store/StoreContext';

interface LanguageSwitcherProps {
   className?: string;
}

export const LanguageSwitcherButtons: React.FC<LanguageSwitcherProps> = ({ className }) => {
   const i18n = useI18n();
   const currentLanguage = i18n.getLanguage();

   return (
      <div className={className}>
         <button
            aria-pressed={currentLanguage === 'en'}
            disabled={currentLanguage === 'en'}
            onClick={() => i18n.setLanguage('en')}
         >
            English
         </button>
         <button
            aria-pressed={currentLanguage === 'fr'}
            disabled={currentLanguage === 'fr'}
            onClick={() => i18n.setLanguage('fr')}
         >
            Français
         </button>
      </div>
   );
};

const App = observer(() => {
   const { gameStore, saveStore } = useStore();

   useEffect(() => {
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
         <div>
            <a href="https://vite.dev" target="_blank">
               <img alt="Vite logo" className="logo" src={viteLogo} />
            </a>
            <a href="https://react.dev" target="_blank">
               <img alt="React logo" className="logo react" src={reactLogo} />
            </a>
         </div>
         <h1>Unforeseen Conspiracy Inc.</h1>
         <div className="card">
            <div className="resources">
               <div>
                  <h2>Proofs: {gameStore.proofs.value.toFixed(0)}</h2>
               </div>
               <div>
                  <h2>Followers: {gameStore.followers.value.toFixed(0)}</h2>
               </div>
               <div>
                  <h2>Paranoia: {gameStore.paranoia.value.toFixed(0)}</h2>
               </div>
            </div>
            <button onClick={() => handleClickProofs()}>Extract proofs</button>
         </div>
         <div className="generators">
            {gameStore.generators.map((generator) => (
               <fieldset key={generator.id}>
                  <h2>
                     {generator.id} - Level: {generator.level}
                  </h2>
                  <p>
                     Cost: {generator.getCost(1).proofs} proofs, {generator.getCost(1).followers}{' '}
                     followers
                  </p>
                  <p>
                     Production: {generator.effectiveProduction.proofs} proofs,{' '}
                     {generator.effectiveProduction.followers} followers,{' '}
                     {generator.effectiveProduction.paranoia} paranoia
                  </p>
                  <button onClick={() => gameStore.buyGenerator(generator.id, 1)}>Buy 1</button>
               </fieldset>
            ))}
         </div>
         <LanguageSwitcherButtons />
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
