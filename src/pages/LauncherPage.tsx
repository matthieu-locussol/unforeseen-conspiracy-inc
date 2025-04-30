import { AlertTriangle } from 'lucide-react';
import { observer } from 'mobx-react-lite';

import { Note, Title } from '../components/core/Typography';
import { Badge } from '../components/core/ui/badge';
import { Progress } from '../components/core/ui/progress';
import { useStore } from '../store/StoreContext';

export const LauncherPage = observer(() => {
   const { routingStore } = useStore();

   return (
      <>
         <Title className="text-center">Unforeseen Conspiracy Inc.</Title>
         <div className="flex items-center justify-center gap-3 my-4">
            <Badge className="bg-green-900/50 text-green-300 border-green-700/50">v0.9.2</Badge>
            <Badge className="bg-gray-900/50 text-gray-400 border-gray-700" variant="outline">
               BUILD 20200101
            </Badge>
            <Badge className="bg-red-900/50 text-red-300 border-red-900/50">
               <AlertTriangle className="h-3 w-3 mr-1" />
               CLASSIFIED
            </Badge>
         </div>
         <Note className="max-w-2xl mx-auto text-center">
            WARNING: This simulation contains classified information about covert operations, shadow
            governments, and quantum manipulation. Unauthorized access will be monitored.
         </Note>
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
