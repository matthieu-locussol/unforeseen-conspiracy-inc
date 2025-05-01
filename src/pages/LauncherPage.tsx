import {
   AlertTriangle,
   Download,
   FileWarning,
   Info,
   MessageSquare,
   Play,
   Settings,
   Sparkles,
   XIcon,
   Zap,
} from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { Note, Title } from '../components/core/Typography';
import { Badge } from '../components/core/ui/badge';
import { Button } from '../components/core/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '../components/core/ui/card';
import { Progress } from '../components/core/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/core/ui/tabs';
import { CHANGELOG } from '../data/changelog';
import { VERSION_BUILD, VERSION_COMMIT, VERSION_DATE } from '../data/version';
import { useStore } from '../store/StoreContext';

export const LauncherPage = observer(() => {
   const { routingStore } = useStore();

   const isUpdating = false; // Placeholder for update status
   const updateProgress = 40; // Placeholder for update progress
   const updateStatus = 'No updates available'; // Placeholder for update status message
   const [activeTab, setActiveTab] = useState('changelog');

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
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
               <Tabs className="w-full" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-green-900/50">
                     <TabsTrigger className="snappy-transition" value="changelog">
                        <FileWarning className="h-4 w-4 mr-1" />
                        CHANGELOG
                     </TabsTrigger>
                     <TabsTrigger className="snappy-transition" value="about">
                        <Info className="h-4 w-4 mr-1" />
                        ABOUT
                     </TabsTrigger>
                  </TabsList>
                  <TabsContent
                     className="mt-4 border border-green-900/30 rounded-lg bg-gray-900/50 p-4 h-[300px] overflow-y-auto"
                     value="changelog"
                  >
                     <h3 className="text-lg font-orbitron text-green-300 mb-4">
                        DECLASSIFIED UPDATES
                     </h3>
                     <div className="space-y-6">
                        {CHANGELOG.map((release) => (
                           <div key={release.version} className="space-y-2">
                              <div className="flex items-center gap-2">
                                 <Badge
                                    className={`
                          ${
                             release.type === 'major'
                                ? 'bg-purple-900/50 text-purple-300'
                                : release.type === 'update'
                                ? 'bg-green-900/50 text-green-300'
                                : 'bg-yellow-900/50 text-yellow-300'
                          }
                        `}
                                 >
                                    {release.version}
                                 </Badge>
                                 <span className="text-gray-400 text-sm">{release.date}</span>
                                 <Badge className="text-xs capitalize" variant="outline">
                                    {release.type}
                                 </Badge>
                              </div>
                              <ul className="space-y-1 pl-5 list-disc text-gray-300 text-sm">
                                 {release.changes.map((change, i) => (
                                    <li key={i}>{change}</li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                  </TabsContent>
                  <TabsContent
                     className="mt-4 border border-green-900/30 rounded-lg bg-gray-900/50 p-4 h-[300px] overflow-y-auto"
                     value="about"
                  >
                     <h3 className="text-lg font-orbitron text-green-300 mb-4">PROJECT DETAILS</h3>
                     <div className="space-y-4 text-gray-300">
                        <p>
                           <span className="text-green-400 font-bold">
                              Project: Quantum Conspiracy
                           </span>{' '}
                           is an incremental game where you uncover the secrets of shadow
                           governments, alien technology, and quantum manipulation.
                        </p>
                        <p>
                           Build your network of classified projects, research forbidden
                           technologies, and ascend through prestige systems to gain influence over
                           the world's hidden power structures.
                        </p>
                        <p>
                           This simulation is based on{' '}
                           <span className="text-red-400 font-bold">REDACTED</span> documents and
                           should be treated as{' '}
                           <span className="text-red-400 font-bold">CLASSIFIED</span> information.
                        </p>
                        <div className="bg-gray-800/50 p-3 rounded-md border border-green-900/30 mt-4">
                           <h4 className="text-green-400 font-orbitron mb-2 text-sm">
                              DEVELOPMENT TEAM
                           </h4>
                           <p className="text-sm">
                              Lead Developer: <span className="text-green-300">REDACTED</span>
                           </p>
                           <p className="text-sm">
                              Art Direction: <span className="text-green-300">REDACTED</span>
                           </p>
                           <p className="text-sm">
                              Narrative Design: <span className="text-green-300">REDACTED</span>
                           </p>
                           <p className="text-sm">
                              Quantum Algorithms: <span className="text-green-300">REDACTED</span>
                           </p>
                        </div>
                     </div>
                  </TabsContent>
               </Tabs>
            </div>

            <div className="flex flex-col gap-4">
               <Button
                  className="w-full h-24 bg-gradient-to-r from-green-900 to-green-700 hover:from-green-800 hover:to-green-600 text-green-100 border border-green-600/50 shadow-lg shadow-green-900/30 font-orbitron tracking-wider text-xl rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  disabled={isUpdating}
                  onClick={() => routingStore.setPage('game')}
               >
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent transform -translate-x-full animate-[shimmer_2s_infinite]" />
                  </div>
                  <Play className="h-6 w-6 mr-2" />
                  LAUNCH
               </Button>

               <Card shining>
                  <CardHeader className="pb-2">
                     <CardTitle className="text-sm flex items-center">
                        <Zap className="h-4 w-4 mr-2" />
                        SOCIAL NETWORKS
                     </CardTitle>
                     <CardDescription className="text-xs">
                        Connect with other operatives
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     <Button
                        className="w-full justify-start text-sm bg-gray-800 hover:bg-gray-700 border-blue-900/30 text-blue-400"
                        variant="outline"
                     >
                        <XIcon className="h-4 w-4 mr-2" />
                        Follow on X
                     </Button>
                     <Button
                        className="w-full justify-start text-sm bg-gray-800 hover:bg-gray-700 border-blue-900/30 text-blue-400"
                        variant="outline"
                     >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Join on Bluesky
                     </Button>
                     <Button
                        className="w-full justify-start text-sm bg-gray-800 hover:bg-gray-700 border-purple-900/30 text-purple-400"
                        variant="outline"
                     >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Join Discord
                     </Button>
                  </CardContent>
               </Card>

               <Button
                  className="w-full justify-start text-sm bg-gray-800 hover:bg-gray-700 border-green-900/30 text-green-400"
                  variant="outline"
               >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
               </Button>
            </div>
         </div>
         <div className="text-center text-xs text-gray-500 mt-8">
            <p>© {new Date().getFullYear()} Unforeseen Conspiracy Inc. All rights reserved.</p>
            <p className="mt-1">
               This simulation is for entertainment purposes only. Any resemblance to actual
               conspiracies is purely... coincidental.
            </p>
         </div>
      </>
   );
});
