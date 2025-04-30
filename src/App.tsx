import { observer } from 'mobx-react-lite';

import { Layout } from './components/core/Layout';
import { DotBackground } from './components/design/DotBackground';
import { ScanlineBackground } from './components/design/ScanlineBackground';
import { GamePage } from './pages/GamePage';
import { LauncherPage } from './pages/LauncherPage';
import { useStore } from './store/StoreContext';

const App = observer(() => {
   const { routingStore } = useStore();

   return (
      <div>
         <DotBackground />
         <ScanlineBackground />
         <Layout>
            {routingStore.page === 'launcher' && <LauncherPage />}
            {routingStore.page === 'game' && <GamePage />}
         </Layout>
      </div>
   );
});

export default App;
