import { observer } from 'mobx-react-lite';

import { Layout } from './components/core/Layout';
import { DotBackground } from './components/design/DotBackground';
import { ScanlineBackground } from './components/design/ScanlineBackground';
import { BootloaderPage } from './pages/BootloaderPage';
import { GamePage } from './pages/GamePage';
import { LauncherPage } from './pages/LauncherPage';
import { useStore } from './store/StoreContext';
import { cn } from './utils/cn';

const App = observer(() => {
   const { routingStore } = useStore();

   return (
      <div
         className={cn([
            'transition-opacity duration-750',
            routingStore.fadingOut ? 'opacity-0' : 'opacity-100',
         ])}
      >
         <DotBackground />
         <ScanlineBackground />
         {routingStore.page === 'bootloader' && <BootloaderPage />}
         <Layout>
            {routingStore.page === 'launcher' && <LauncherPage />}
            {routingStore.page === 'game' && <GamePage />}
         </Layout>
      </div>
   );
});

export default App;
