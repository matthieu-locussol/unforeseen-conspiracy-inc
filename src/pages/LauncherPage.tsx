import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { CustomIcon } from '../components/core/Icons';
import { PlayButton } from '../components/core/PlayButton';
import { ResetMenu } from '../components/core/ResetMenu';
import { SettingsMenu } from '../components/core/SettingsMenu';
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

export const LauncherPage = observer(() => {
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
               <CustomIcon className="h-3 w-3 mr-1" icon="alertTriangle" />
               CLASSIFIED
            </Badge>
         </div>
         <Note className="max-w-2xl mx-auto text-center mb-6">
            WARNING: This simulation contains classified information about covert operations, shadow
            governments, and quantum manipulation. Unauthorized access will be monitored.
         </Note>
         <Card shining className="mb-4 overflow-hidden">
            <CardHeader className="pb-2 relative">
               <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                     <CustomIcon className="h-5 w-5 mr-2" icon="download" />
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
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div className="md:col-span-2">
               <Tabs className="w-full" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-green-900/50">
                     <TabsTrigger className="snappy-transition" value="changelog">
                        <CustomIcon className="h-4 w-4 mr-1" icon="fileWarning" />
                        CHANGELOG
                     </TabsTrigger>
                     <TabsTrigger className="snappy-transition" value="about">
                        <CustomIcon className="h-4 w-4 mr-1" icon="info" />
                        ABOUT
                     </TabsTrigger>
                  </TabsList>
                  <TabsContent
                     className="mt-2 border border-green-900/30 rounded-lg bg-gray-900/50 p-4 h-[170px] overflow-y-auto"
                     value="changelog"
                  >
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
                     className="mt-2 border border-green-900/30 rounded-lg bg-gray-900/50 p-4 h-[170px] overflow-y-auto"
                     value="about"
                  >
                     <div className="space-y-4 text-gray-300">
                        <p>
                           Welcome, truth-seeker. Think you know what's really going on? Well, think
                           again.
                        </p>
                        <p>
                           Click your way through layers of lies, generating undeniable{' '}
                           <span className="text-green-400 font-bold">Proofs</span> that expose
                           everything – from chemtrails to questionable celebrity "retirements".
                           Gather <span className="text-green-400 font-bold">Proofs</span>, amass{' '}
                           <span className="text-green-400 font-bold">Followers</span> who
                           understand, and manage that creeping{' '}
                           <span className="text-red-400 font-bold">Paranoia</span> (is your
                           webcam... watching you?).
                        </p>
                        <p>
                           Unravel conspiracies both mundane and monstrous, from government
                           cover-ups to why pigeons seem so... shifty. Click onward, the rabbit hole
                           awaits!
                        </p>
                        <p className="italic">
                           And don't forget to check behind you from time to time...
                        </p>
                     </div>
                  </TabsContent>
               </Tabs>
            </div>
            <div className="flex flex-col gap-4">
               <PlayButton />
               <SettingsMenu>
                  <Button className="w-full justify-start text-sm mt-auto" variant="outline">
                     <CustomIcon className="h-4 w-4 mr-2" icon="settings" />
                     Settings
                  </Button>
               </SettingsMenu>
               <ResetMenu>
                  <Button className="w-full justify-start text-sm" variant="destructive">
                     <CustomIcon className="h-4 w-4 mr-2" icon="databaseBackup" />
                     Reset data
                  </Button>
               </ResetMenu>
            </div>
         </div>
         <div className="text-center text-xs text-gray-500 mt-2">
            <p>© {new Date().getFullYear()} Unforeseen Conspiracy Inc. All rights reserved.</p>
            <p className="mt-1">
               This simulation is for entertainment purposes only. Any resemblance to actual
               conspiracies is purely... coincidental.
            </p>
         </div>
      </>
   );
});
