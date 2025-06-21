import type { ResourceStore } from '../../store/ResourceStore';

import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { AnimatedNumber } from '../core/AnimatedNumber';
import { CustomIcon } from '../core/Icons';
import { Card } from '../core/ui/card';

interface MiniResourceCardProps {
   isRed?: boolean;
   resourceStore: ResourceStore;
}

export const MiniResourceCard = observer(({ isRed, resourceStore }: MiniResourceCardProps) => {
   const { gameStore } = useStore();

   return (
      <Card
         className={cn([
            'flex items-center w-full p-2 gap-2 relative transition-all duration-300 hover:shadow-amber-400/20 border border-amber-400/40',
            isRed && 'border-red-400/40 hover:shadow-red-400/20',
         ])}
      >
         <div
            className={cn([
               'absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,209,95,0.1),transparent_70%)] rounded-md',
               isRed &&
                  'bg-[radial-gradient(ellipse_at_top_right,_rgba(219,132,107,0.1),transparent_70%)]',
            ])}
         />
         <div
            className={cn([
               'p-1.5 rounded-lg bg-gray-800 text-amber-400 snappy-transition transform hover:scale-110',
               isRed && 'text-red-400',
            ])}
         >
            <CustomIcon className="h-4 w-4" icon={resourceStore.icon} />
         </div>
         <div>
            <p
               className={cn([
                  'text-sm font-bold text-amber-400 font-orbitron tracking-wider [text-shadow:0_0_5px_rgba(255,209,95,0.3)]',
                  isRed && 'text-red-400 [text-shadow:0_0_5px_rgba(219,132,107,0.3)]',
               ])}
            >
               <AnimatedNumber value={resourceStore.value} />
            </p>
         </div>
         {gameStore.totalProduction[resourceStore.id].greaterThan(0) && (
            <div
               className={cn([
                  'absolute flex items-center gap-1 border-t border-l border-amber-400/40 bg-amber-700/30 bottom-0 right-0 rounded-tl-md rounded-br-md px-2 text-[0.5em] sm:text-xs text-amber-200',
                  isRed && 'border-red-400/40 bg-red-700/30 text-red-200',
               ])}
            >
               {gameStore.totalProduction[resourceStore.id].toFixed(1)}/s{' '}
               <CustomIcon className="w-2.5 h-2.5" icon="trendingUp" />
            </div>
         )}
      </Card>
   );
});
