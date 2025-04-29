import { observer } from 'mobx-react-lite';

import { Layout } from './components/Layout';
import { GamePage } from './pages/GamePage';
import { LauncherPage } from './pages/LauncherPage';
import { useStore } from './store/StoreContext';

const App = observer(() => {
   const { routingStore } = useStore();

   return (
      <Layout>
         {routingStore.page === 'launcher' && <LauncherPage />}
         {routingStore.page === 'game' && <GamePage />}
      </Layout>
   );
});

export default App;
