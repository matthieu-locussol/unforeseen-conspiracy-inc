import { observer } from 'mobx-react-lite';

import reactLogo from './assets/react.svg';

import './App.css';
import viteLogo from '/vite.svg';

import { RESOURCES } from './data/resources';
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
   const { t } = useI18n();
   const { gameStore } = useStore();

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
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={() => gameStore.increment()}>count is {gameStore.count}</button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">Click on the Vite and React logos to learn more ent</p>
         <p className="read-the-docs">{t.resources[RESOURCES[0].i18nKey].name}</p>
         <LanguageSwitcherButtons />
      </>
   );
});

export default App;
