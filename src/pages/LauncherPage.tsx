import { AlertTriangle, Download } from 'lucide-react';
import { observer } from 'mobx-react-lite';

import { Note, Title } from '../components/core/Typography';
import { Badge } from '../components/core/ui/badge';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '../components/core/ui/card';
import { Progress } from '../components/core/ui/progress';
import { VERSION_BUILD, VERSION_COMMIT, VERSION_DATE } from '../data/version';
import { useStore } from '../store/StoreContext';

export const LauncherPage = observer(() => {
   const { routingStore } = useStore();

   const isUpdating = false; // Placeholder for update status
   const updateProgress = 40; // Placeholder for update progress
   const updateStatus = 'No updates available'; // Placeholder for update status message

   return (
      <>
         <Title className="text-center">UNFORESEEN CONSPIRACY INC.</Title>
         <div className="flex items-center justify-center gap-3 my-4">
            <Badge className="bg-green-900/50 text-green-300 border-green-700/50">
               v{VERSION_BUILD}
            </Badge>
            <Badge className="bg-gray-900/50 text-gray-400 border-gray-700" variant="outline">
               BUILD {VERSION_COMMIT}
            </Badge>
            <Badge className="bg-red-900/50 text-red-300 border-red-900/50">
               <AlertTriangle className="h-3 w-3 mr-1" />
               CLASSIFIED
            </Badge>
         </div>
         <Note className="max-w-2xl mx-auto text-center mb-4">
            WARNING: This simulation contains classified information about covert operations, shadow
            governments, and quantum manipulation. Unauthorized access will be monitored.
         </Note>
         <Card shining className="mb-6 overflow-hidden">
            <CardHeader className="pb-2 relative">
               <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                     <Download className="h-5 w-5 mr-2" />
                     SYSTEM STATUS
                  </CardTitle>
                  <Badge
                     className={`${
                        isUpdating
                           ? 'bg-yellow-900/30 text-yellow-300'
                           : 'bg-green-900/30 text-green-300'
                     }`}
                     variant="outline"
                  >
                     {isUpdating ? 'UPDATING' : 'READY'}
                  </Badge>
               </div>
               <CardDescription>{updateStatus}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
               <div className="space-y-4">
                  <Progress
                     className="h-2 bg-gray-800"
                     indicatorClassName={`${
                        isUpdating ? 'bg-yellow-500' : 'bg-green-500'
                     } snappy-transition`}
                     value={updateProgress}
                  />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-500">
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">Status</div>
                        <div
                           className={`font-bold ${
                              isUpdating ? 'text-yellow-400' : 'text-green-400'
                           }`}
                        >
                           {isUpdating ? 'Updating...' : 'Ready to Launch'}
                        </div>
                     </div>
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">Version</div>
                        <div className="font-bold text-green-400">{VERSION_BUILD}</div>
                     </div>
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">Last Updated</div>
                        <div className="font-bold text-green-400">{VERSION_DATE}</div>
                     </div>
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">Security Level</div>
                        <div className="font-bold text-red-400">CLASSIFIED</div>
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>
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
