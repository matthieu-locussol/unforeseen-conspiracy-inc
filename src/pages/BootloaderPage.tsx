import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';

import { CustomIcon } from '../components/core/Icons';
import { Badge } from '../components/core/ui/badge';
import { Progress } from '../components/core/ui/progress';
import { CRTBackground } from '../components/design/CRTBackground';
import { useI18n } from '../i18n/i18n';
import { useStore } from '../store/StoreContext';
import { cn } from '../utils/cn';
import { getVersion } from '../utils/versionMgt';

export const BootloaderPage = observer(() => {
   const { routingStore } = useStore();
   const { t } = useI18n();
   const terminalRef = useRef<HTMLDivElement>(null);

   const [progress, setProgress] = useState(0);
   const [currentMessage, setCurrentMessage] = useState(t.bootloader.loadingMessages[0]);
   const [showError, setShowError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [terminalLines, setTerminalLines] = useState<string[]>([
      'System initialization started...',
      'Loading boot modules...',
      'Checking system integrity...',
   ]);
   const [bootPhase, setBootPhase] = useState(1);

   const addTerminalLine = (line: string) => {
      setTerminalLines((prev) => [...prev, line]);
   };

   useEffect(() => {
      if (progress < 100) {
         if (progress === 0) {
            addTerminalLine(t.bootloader.terminalMessages.bootloaderHeader);
            addTerminalLine(t.bootloader.terminalMessages.initializingSystem);
            addTerminalLine(t.bootloader.terminalMessages.checkingSecurity);
         }

         if (progress >= 25 && progress < 50 && bootPhase === 1) {
            setBootPhase(2);
            addTerminalLine(t.bootloader.terminalMessages.phase1Complete);
            addTerminalLine(t.bootloader.terminalMessages.neuralInterfaceCalibration);
         }

         if (progress >= 50 && progress < 75 && bootPhase === 2) {
            setBootPhase(3);
            addTerminalLine(t.bootloader.terminalMessages.phase2Complete);
            addTerminalLine(t.bootloader.terminalMessages.establishingConnections);
         }

         if (progress >= 75 && progress < 100 && bootPhase === 3) {
            setBootPhase(4);
            addTerminalLine(t.bootloader.terminalMessages.phase3Complete);
            addTerminalLine(t.bootloader.terminalMessages.finalizingSystem);
         }

         if (Math.random() < 0.1 && progress > 10 && !showError) {
            setShowError(true);
            const randomError =
               t.bootloader.errorMessages[
                  Math.floor(Math.random() * t.bootloader.errorMessages.length)
               ];

            setErrorMessage(randomError);
            addTerminalLine(`> ${randomError}`);
            addTerminalLine(t.bootloader.terminalMessages.applyingCountermeasures);

            setTimeout(() => {
               setShowError(false);
               addTerminalLine(t.bootloader.terminalMessages.countermeasuresSuccessful);
            }, 1500);
         }

         const timer = setTimeout(() => {
            const increment = Math.random() * 3 + 1;
            const newProgress = Math.min(progress + increment, 100);

            setProgress(newProgress);

            if (Math.random() < 0.3 || newProgress - progress > 2) {
               const newMessage =
                  t.bootloader.loadingMessages[
                     Math.floor(Math.random() * t.bootloader.loadingMessages.length)
                  ];

               setCurrentMessage(newMessage);
               addTerminalLine(`> ${newMessage}`);
            }

            if (newProgress === 100) {
               addTerminalLine(t.bootloader.terminalMessages.bootloaderComplete);
               addTerminalLine(t.bootloader.terminalMessages.launchingConspiracy);

               setTimeout(() => {
                  routingStore.transition('game');
               }, 1500);
            }
         }, Math.random() * 200 + 150);

         return () => {
            clearTimeout(timer);
         };
      }
   }, [
      progress,
      bootPhase,
      showError,
      t.bootloader.loadingMessages,
      t.bootloader.errorMessages,
      t.bootloader.terminalMessages,
      routingStore,
   ]);

   useEffect(() => {
      if (terminalRef.current) {
         terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
   }, [terminalLines]);

   return (
      <div className="fixed w-full min-h-screen bg-black/50 text-green-400 font-mono flex flex-col items-center justify-center">
         <CRTBackground />
         <div className={`absolute inset-0 bg-green-900/10 pointer-events-none animate-flicker`} />

         <div className="w-full max-w-3xl px-4 py-8 relative z-10 min-h-0">
            <div className="flex items-center justify-between mb-6">
               <h1 className="text-2xl font-bold font-orbitron tracking-wider flex items-center">
                  <CustomIcon className="mr-2 h-6 w-6" icon="terminal" />
                  {t.ui.bootloader}
               </h1>
               <div className="flex items-center gap-2">
                  <Badge className="bg-green-900/50 text-green-300 border-green-700/50">
                     {getVersion('v')}
                  </Badge>
                  <Badge className="bg-red-900/30 text-red-300 border-red-900/50 px-2 py-0.5 text-xs">
                     <CustomIcon className="h-3 w-3 mr-1" icon="alertTriangle" />
                     {t.ui.classified}
                  </Badge>
               </div>
            </div>

            <div
               ref={terminalRef}
               className="bg-black border border-green-900/50 rounded-md p-4 mb-6 h-[300px] overflow-y-auto font-mono text-sm flex-shrink-0"
            >
               <div className="space-y-1 min-h-full">
                  {terminalLines.map((line, index) => (
                     <div
                        key={index}
                        className={`${
                           line.includes('ERROR') ||
                           line.includes('WARNING') ||
                           line.includes('ALERT') ||
                           line.includes('CRITICAL') ||
                           line.includes('ERREUR') ||
                           line.includes('ATTENTION') ||
                           line.includes('ALERTE') ||
                           line.includes('CRITIQUE')
                              ? 'text-red-400'
                              : line.includes('COMPLETE') ||
                                line.includes('SUCCESSFUL') ||
                                line.includes('TERMINÉE') ||
                                line.includes('RÉUSSIES')
                              ? 'text-green-400'
                              : 'text-green-300'
                        }`}
                     >
                        {line}
                     </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
               <div className="bg-gray-900/50 p-2 rounded-md border border-green-900/30 flex items-center">
                  <CustomIcon className="h-4 w-4 mr-2 text-green-400" icon="shield" />
                  <div className="text-xs">
                     <div className="text-gray-400">{t.ui.security}</div>
                     <div className="font-bold text-green-400">{t.ui.active}</div>
                  </div>
               </div>
               <div className="bg-gray-900/50 p-2 rounded-md border border-green-900/30 flex items-center">
                  <CustomIcon className="h-4 w-4 mr-2 text-green-400" icon="database" />
                  <div className="text-xs">
                     <div className="text-gray-400">{t.ui.database}</div>
                     <div className="font-bold text-green-400">{t.ui.connected}</div>
                  </div>
               </div>
               <div className="bg-gray-900/50 p-2 rounded-md border border-green-900/30 flex items-center">
                  <CustomIcon className="h-4 w-4 mr-2 text-green-400" icon="lock" />
                  <div className="text-xs">
                     <div className="text-gray-400">{t.ui.encryption}</div>
                     <div className="font-bold text-green-400">{t.ui.quantum}</div>
                  </div>
               </div>
               <div className="bg-gray-900/50 p-2 rounded-md border border-green-900/30 flex items-center">
                  <CustomIcon
                     className={`h-4 w-4 mr-2 ${showError ? 'text-red-400' : 'text-green-400'}`}
                     icon="alertTriangle"
                  />
                  <div className="text-xs">
                     <div className="text-gray-400">{t.ui.status}</div>
                     <div className={`font-bold ${showError ? 'text-red-400' : 'text-green-400'}`}>
                        {showError ? t.ui.warning : t.ui.nominal}
                     </div>
                  </div>
               </div>
            </div>

            <div className="mb-2 flex justify-between items-center">
               <div className="text-sm font-orbitron">
                  {showError ? (
                     <span className="text-red-400 animate-pulse">{errorMessage}</span>
                  ) : (
                     <span>{currentMessage}</span>
                  )}
               </div>
               <div className="text-sm font-orbitron">{Math.floor(progress)}%</div>
            </div>

            <Progress
               className="h-2 bg-gray-800"
               indicatorClassName={cn([
                  'relative overflow-hidden',
                  showError ? 'bg-red-500' : 'bg-green-500',
               ])}
               value={progress}
            />

            <div className="mt-4 flex justify-center gap-2">
               {[1, 2, 3, 4].map((phase) => (
                  <div
                     key={phase}
                     className={cn([
                        'w-3 h-3 rounded-full border-2 transition-all duration-500',
                        bootPhase >= phase ? 'bg-green-500' : 'bg-gray-700',
                     ])}
                  />
               ))}
            </div>

            <div className="text-center text-xs text-gray-500 mt-8">
               <p>{t.bootloader.footer.initializingProtocols}</p>
               <p className="mt-1">{t.bootloader.footer.securityClearance}</p>
            </div>
         </div>
      </div>
   );
});
