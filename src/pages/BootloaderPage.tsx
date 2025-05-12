import { AlertTriangle, Database, Lock, Shield, Terminal } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { Badge } from '../components/core/ui/badge';
import { Progress } from '../components/core/ui/progress';
import { CRTBackground } from '../components/design/CRTBackground';
import { ERROR_MESSAGES, LOADING_MESSAGES } from '../data/bootloader';
import { VERSION_BUILD } from '../data/version';
import { useStore } from '../store/StoreContext';
import { cn } from '../utils/cn';

export const BootloaderPage = observer(() => {
   const { routingStore } = useStore();

   const [progress, setProgress] = useState(0);
   const [currentMessage, setCurrentMessage] = useState(LOADING_MESSAGES[0]);
   const [showError, setShowError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const [terminalLines, setTerminalLines] = useState<string[]>([]);
   const [bootPhase, setBootPhase] = useState(1);

   const addTerminalLine = (line: string) => {
      setTerminalLines((prev) => [...prev, line]);
   };

   useEffect(() => {
      if (progress < 100) {
         if (progress === 0) {
            addTerminalLine('> UNFORESEEN CONSPIRACY BOOTLOADER v3.7.2');
            addTerminalLine('> INITIALIZING SYSTEM...');
            addTerminalLine('> CHECKING SECURITY PROTOCOLS...');
         }

         if (progress >= 25 && progress < 50 && bootPhase === 1) {
            setBootPhase(2);
            addTerminalLine('> PHASE 1 COMPLETE');
            addTerminalLine('> BEGINNING NEURAL INTERFACE CALIBRATION...');
         }

         if (progress >= 50 && progress < 75 && bootPhase === 2) {
            setBootPhase(3);
            addTerminalLine('> PHASE 2 COMPLETE');
            addTerminalLine('> ESTABLISHING SECURE CONNECTIONS...');
         }

         if (progress >= 75 && progress < 100 && bootPhase === 3) {
            setBootPhase(4);
            addTerminalLine('> PHASE 3 COMPLETE');
            addTerminalLine('> FINALIZING SYSTEM INITIALIZATION...');
         }

         if (Math.random() < 0.1 && progress > 10 && !showError) {
            setShowError(true);
            const randomError = ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];

            setErrorMessage(randomError);
            addTerminalLine(`> ${randomError}`);
            addTerminalLine('> APPLYING COUNTERMEASURES...');

            setTimeout(() => {
               setShowError(false);
               addTerminalLine('> COUNTERMEASURES SUCCESSFUL');
            }, 1500);
         }

         const timer = setTimeout(() => {
            const increment = Math.random() * 3 + 1;
            const newProgress = Math.min(progress + increment, 100);

            setProgress(newProgress);

            if (Math.random() < 0.3 || newProgress - progress > 2) {
               const newMessage =
                  LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];

               setCurrentMessage(newMessage);
               addTerminalLine(`> ${newMessage}`);
            }

            if (newProgress === 100) {
               addTerminalLine('> BOOTLOADER SEQUENCE COMPLETE');
               addTerminalLine('> LAUNCHING UNFORESEEN CONSPIRACY...');

               setTimeout(() => {
                  routingStore.transition('game');
               }, 1500);
            }
         }, Math.random() * 200 + 150);

         return () => {
            clearTimeout(timer);
         };
      }
   }, [progress, bootPhase, showError]);

   return (
      <div className="min-h-screen bg-black/50 text-green-400 font-mono flex flex-col items-center justify-center relative overflow-hidden">
         <CRTBackground />
         <div className={`absolute inset-0 bg-green-900/10 pointer-events-none animate-flicker`} />

         <div className="w-full max-w-3xl px-4 py-8 relative z-10">
            <div className="flex items-center justify-between mb-6">
               <h1 className="text-2xl font-bold font-orbitron tracking-wider flex items-center">
                  <Terminal className="mr-2 h-6 w-6" />
                  BOOTLOADER
               </h1>
               <div className="flex items-center gap-2">
                  <Badge className="bg-green-900/50 text-green-300 border-green-700/50">
                     v{VERSION_BUILD}
                  </Badge>
                  <Badge className="bg-red-900/30 text-red-300 border-red-900/50 px-2 py-0.5 text-xs">
                     <AlertTriangle className="h-3 w-3 mr-1" />
                     CLASSIFIED
                  </Badge>
               </div>
            </div>

            <div className="bg-black border border-green-900/50 rounded-md p-4 mb-6 h-[300px] overflow-y-auto font-mono text-sm">
               <div className="space-y-1">
                  {terminalLines.map((line, index) => (
                     <div
                        key={index}
                        className={`${
                           line.includes('ERROR') ||
                           line.includes('WARNING') ||
                           line.includes('ALERT') ||
                           line.includes('CRITICAL')
                              ? 'text-red-400'
                              : line.includes('COMPLETE') || line.includes('SUCCESSFUL')
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
                  <Shield className="h-4 w-4 mr-2 text-green-400" />
                  <div className="text-xs">
                     <div className="text-gray-400">Security</div>
                     <div className="font-bold text-green-400">ACTIVE</div>
                  </div>
               </div>
               <div className="bg-gray-900/50 p-2 rounded-md border border-green-900/30 flex items-center">
                  <Database className="h-4 w-4 mr-2 text-green-400" />
                  <div className="text-xs">
                     <div className="text-gray-400">Database</div>
                     <div className="font-bold text-green-400">CONNECTED</div>
                  </div>
               </div>
               <div className="bg-gray-900/50 p-2 rounded-md border border-green-900/30 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-green-400" />
                  <div className="text-xs">
                     <div className="text-gray-400">Encryption</div>
                     <div className="font-bold text-green-400">QUANTUM</div>
                  </div>
               </div>
               <div className="bg-gray-900/50 p-2 rounded-md border border-green-900/30 flex items-center">
                  <AlertTriangle
                     className={`h-4 w-4 mr-2 ${showError ? 'text-red-400' : 'text-green-400'}`}
                  />
                  <div className="text-xs">
                     <div className="text-gray-400">Status</div>
                     <div className={`font-bold ${showError ? 'text-red-400' : 'text-green-400'}`}>
                        {showError ? 'WARNING' : 'NOMINAL'}
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
                        'w-3 h-3 rounded-full',
                        bootPhase >= phase ? 'bg-green-500' : 'bg-gray-700',
                     ])}
                  />
               ))}
            </div>

            <div className="text-center text-xs text-gray-500 mt-8">
               <p>UNFORESEEN CONSPIRACY BOOTLOADER v3.7.2 © 2025</p>
               <p className="mt-1">
                  UNAUTHORIZED ACCESS WILL BE PROSECUTED UNDER INTERDIMENSIONAL LAW
               </p>
            </div>
         </div>
      </div>
   );
});
