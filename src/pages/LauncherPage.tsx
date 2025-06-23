import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { About } from '../components/core/About';
import { Changelog } from '../components/core/Changelog';
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
import { VERSION_COMMIT, VERSION_DATE } from '../data/version';
import { useI18n } from '../i18n/i18n';
import { useStore } from '../store/StoreContext';
import { cn } from '../utils/cn';
import { getVersion } from '../utils/versionMgt';

export const LauncherPage = observer(() => {
   const { t } = useI18n();
   const { updaterStore } = useStore();
   const updateStatus = updaterStore.isCheckingUpdate
      ? t.ui.checkingUpdates
      : updaterStore.shouldUpdate
      ? t.ui.updatesAvailable
      : t.ui.noUpdatesAvailable;
   const [activeTab, setActiveTab] = useState('changelog');

   useEffect(() => {
      updaterStore.checkUpdate();
   }, []);

   return (
      <>
         <Title className="text-center">{t.launcher.title}</Title>
         <div className="flex items-center justify-center gap-3 my-4">
            <Badge
               className={cn([
                  'bg-green-900/50 text-green-300 border-green-700/50',
                  updaterStore.shouldUpdate && 'bg-amber-900/50 text-amber-300 border-amber-700/50',
               ])}
            >
               {getVersion('v')}
            </Badge>
            <Badge className="bg-gray-900/50 text-gray-400 border-gray-700" variant="outline">
               BUILD {VERSION_COMMIT}
            </Badge>
            <Badge className="bg-red-900/50 text-red-300 border-red-900/50">
               <CustomIcon className="h-3 w-3 mr-1" icon="alertTriangle" />
               {t.ui.classified}
            </Badge>
         </div>
         <Note className="max-w-2xl mx-auto text-center mb-6">{t.launcher.warningMessage}</Note>
         <Card shining className="mb-4 overflow-hidden">
            <CardHeader className="pb-2 relative">
               <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                     <CustomIcon className="h-5 w-5 mr-2" icon="download" />
                     {t.ui.systemStatus}
                  </CardTitle>
                  <Badge
                     className={cn([
                        'bg-green-900/30 text-green-300',
                        updaterStore.updating ||
                           (updaterStore.isCheckingUpdate && 'bg-yellow-900/30 text-yellow-300'),
                        updaterStore.shouldUpdate && 'bg-red-900/30 text-red-300',
                     ])}
                     variant="outline"
                  >
                     {updaterStore.shouldUpdate
                        ? t.ui.outOfDate
                        : updaterStore.updating || updaterStore.isCheckingUpdate
                        ? t.ui.updating
                        : t.ui.ready}
                  </Badge>
               </div>
               <CardDescription>{updateStatus}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
               <div className="space-y-4">
                  <Progress
                     className="h-2 bg-gray-800"
                     indicatorClassName={cn([
                        'snappy-transition bg-green-500',
                        updaterStore.updating && 'bg-yellow-500',
                        updaterStore.isCheckingUpdate && 'animate-pulse bg-green-900/70',
                     ])}
                     value={updaterStore.progress}
                  />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-500">
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">{t.ui.status}</div>
                        <div
                           className={cn([
                              'font-bold text-green-400',
                              updaterStore.updating ||
                                 (updaterStore.isCheckingUpdate && 'text-yellow-400'),
                              updaterStore.shouldUpdate && 'text-red-400',
                           ])}
                        >
                           {updaterStore.shouldUpdate
                              ? t.ui.updateNeeded
                              : updaterStore.isCheckingUpdate
                              ? t.ui.fetchingUpdates
                              : updaterStore.updating
                              ? t.ui.updating + '...'
                              : t.ui.readyToLaunch}
                        </div>
                     </div>
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">{t.ui.version}</div>
                        <div className={cn(['font-bold text-green-400'])}>
                           {updaterStore.shouldUpdate &&
                           updaterStore.updateManifest !== undefined ? (
                              <span>
                                 <span className="text-amber-400">{getVersion()}</span> →{' '}
                                 {updaterStore.updateManifest.version}
                              </span>
                           ) : (
                              getVersion()
                           )}
                        </div>
                     </div>
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">{t.ui.lastUpdated}</div>
                        <div className="font-bold text-green-400">{VERSION_DATE}</div>
                     </div>
                     <div className="bg-gray-800/50 p-2 rounded-md">
                        <div className="text-gray-400">{t.ui.securityLevel}</div>
                        <div className="font-bold text-red-400">{t.ui.classified}</div>
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
                        {t.ui.changelog}
                     </TabsTrigger>
                     <TabsTrigger className="snappy-transition" value="about">
                        <CustomIcon className="h-4 w-4 mr-1" icon="info" />
                        {t.ui.about}
                     </TabsTrigger>
                  </TabsList>
                  <TabsContent
                     className="mt-2 border border-green-900/30 rounded-lg bg-gray-900/50 p-4 h-[170px] overflow-y-auto"
                     value="changelog"
                  >
                     <Changelog />
                  </TabsContent>
                  <TabsContent
                     className="mt-2 border border-green-900/30 rounded-lg bg-gray-900/50 p-4 h-[170px] overflow-y-auto"
                     value="about"
                  >
                     <About />
                  </TabsContent>
               </Tabs>
            </div>
            <div className="flex flex-col gap-4">
               <PlayButton />
               <SettingsMenu>
                  <Button className="w-full justify-start text-sm mt-auto" variant="outline">
                     <CustomIcon className="h-4 w-4 mr-2" icon="settings" />
                     {t.ui.settings}
                  </Button>
               </SettingsMenu>
               <ResetMenu>
                  <Button className="w-full justify-start text-sm" variant="destructive">
                     <CustomIcon className="h-4 w-4 mr-2" icon="databaseBackup" />
                     {t.ui.resetData}
                  </Button>
               </ResetMenu>
            </div>
         </div>
         <div className="text-center text-xs text-gray-500 mt-2">
            <p>
               {t.launcher.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
            </p>
            <p className="mt-1">{t.launcher.footer.disclaimer}</p>
         </div>
      </>
   );
});
