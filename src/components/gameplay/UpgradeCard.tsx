import type { Upgrade } from '../../types/upgrades';

import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { stringifyStatsBoost } from '../../utils/stringMgt';
import { CustomIcon } from '../core/Icons';
import { Badge } from '../core/ui/badge';
import { Button } from '../core/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../core/ui/popover';

export interface UpgradeCardProps {
   upgrade: Upgrade;
}

export const UpgradeCard = observer(({ upgrade }: UpgradeCardProps) => {
   const i18n = useI18n();
   const { gameStore } = useStore();
   const [isOpen, setIsOpen] = useState(false);

   const canAfford = gameStore.canBuyUpgrade(upgrade.id);
   const isPurchased = gameStore.hasPurchasedUpgrade(upgrade.id);

   const handleUnlock = () => {
      const success = gameStore.buyUpgrade(upgrade.id);

      if (success) {
         setIsOpen(false);
      }
   };

   return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
         <PopoverTrigger asChild>
            <div className="relative">
               <Button
                  className={cn([
                     'h-8 w-8 p-0 transition-all duration-300 transform-gpu rounded-sm border-blue-900',
                     'hover:shadow-sm hover:shadow-blue-400/30',
                     isPurchased && 'opacity-30',
                  ])}
                  size="icon"
                  variant="outline"
               >
                  <CustomIcon className="h-4 w-4 text-blue-400" icon={upgrade.icon} />
               </Button>
               {isPurchased && (
                  <Badge className="border-green-700 bg-green-900 opacity-50" variant="icon">
                     <CustomIcon className="h-2 w-2 text-green-400" icon="check" />
                  </Badge>
               )}
               {!isPurchased && canAfford && (
                  <Badge className="border-amber-700 bg-amber-900" variant="icon">
                     <CustomIcon className="h-2 w-2 text-amber-400" icon="dollar" />
                  </Badge>
               )}
            </div>
         </PopoverTrigger>
         <PopoverContent className="w-70" side="top">
            <div className="space-y-4 rounded-sm">
               <div className="space-y-2">
                  <div className="flex items-center gap-2">
                     <CustomIcon className="h-5 w-5 text-green-400" icon={upgrade.icon} />
                     <h3 className="font-semibold font-orbitron text-green-400">{upgrade.name}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{upgrade.description}</p>
               </div>
               <div className="space-y-3">
                  <div className="border-t border-gray-700 pt-3">
                     <h4 className="text-sm font-medium text-gray-400 mb-2">Cost:</h4>
                     <div className="flex gap-3">
                        {upgrade.cost.proofs > 0 && (
                           <div className="flex items-center gap-1">
                              <CustomIcon className="h-4 w-4 text-green-400" icon="searchCheck" />
                              <span className="text-sm text-green-400">{upgrade.cost.proofs}</span>
                           </div>
                        )}
                        {upgrade.cost.followers > 0 && (
                           <div className="flex items-center gap-1">
                              <CustomIcon className="h-4 w-4 text-blue-400" icon="usersRound" />
                              <span className="text-sm text-blue-400">
                                 {upgrade.cost.followers}
                              </span>
                           </div>
                        )}
                     </div>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                     <h4 className="text-sm font-medium text-gray-400 mb-2">Effects:</h4>
                     <div className="space-y-1">
                        {upgrade.boosts.map((boost, index) => (
                           <div key={index} className="text-xs text-gray-300">
                              {stringifyStatsBoost(boost, i18n)}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <Button
                  className="w-full font-orbitron"
                  disabled={!canAfford}
                  size="sm"
                  onClick={handleUnlock}
               >
                  {isPurchased ? 'Unlocked!' : canAfford ? 'UNLOCK' : 'INSUFFICIENT RESOURCES'}
               </Button>
            </div>
         </PopoverContent>
      </Popover>
   );
});
