import type { GeneratorStore } from '../../store/GeneratorStore';

import { observer } from 'mobx-react-lite';

import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { CustomIcon } from '../core/Icons';
import { Badge } from '../core/ui/badge';
import { Button } from '../core/ui/button';
import { Card } from '../core/ui/card';

export interface GeneratorCardProps {
   generatorStore: GeneratorStore;
}

export const GeneratorCard = observer(({ generatorStore }: GeneratorCardProps) => {
   const { gameStore } = useStore();
   const { t } = useI18n();

   return (
      <Card
         className={cn([
            'flex flex-col items-center w-full p-4 gap-3 relative',
            'border-green-900/50 hover:shadow-lg hover:shadow-green-900/30',
            'transition-all duration-300 hover:transform hover:scale-[1.01]',
            `${!generatorStore.unlocked && 'opacity-75 pointer-events-none bg-gray-900/40'}`,
         ])}
      >
         <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between w-full">
               <h2 className="text-lg font-semibold font-orbitron">
                  {t['generators'][generatorStore.id]['name']}
               </h2>
               <Badge className="font-orbitron bg-[rgba(0,50,0,0.8)] text-[#00ff00] border border-[rgba(0,255,0,0.5)] rounded-sm">
                  LVL {generatorStore.level}
               </Badge>
            </div>
            <div className="grid grid-cols-3 gap-3 mr-auto">
               {generatorStore.effectiveProduction.proofs > 0 && (
                  <div className="flex items-center gap-1.5">
                     <CustomIcon className="h-4 w-4 text-green-400" icon="searchCheck" />
                     <p className="text-sm">{generatorStore.effectiveProduction.proofs}/sec</p>
                  </div>
               )}
               {generatorStore.effectiveProduction.followers > 0 && (
                  <div className="flex items-center gap-1.5">
                     <CustomIcon className="h-4 w-4 text-green-400" icon="usersRound" />
                     <p className="text-sm">{generatorStore.effectiveProduction.followers}/sec</p>
                  </div>
               )}
               {generatorStore.effectiveProduction.paranoia > 0 && (
                  <div className="flex items-center gap-1.5">
                     <CustomIcon className="h-4 w-4 text-red-400" icon="eye" />
                     <p className="text-sm text-red-200">
                        {generatorStore.effectiveProduction.paranoia}/sec
                     </p>
                  </div>
               )}
            </div>
         </div>
         <p className="text-xs italic text-gray-400">
            {t['generators'][generatorStore.id]['description']}
         </p>
         <div className="grid grid-cols-2 w-full gap-2">
            <Card className="p-2 bg-gray-800/30 rounded-sm">
               <h2 className="text-sm text-gray-400">Cost:</h2>
               <p className="text-sm">{generatorStore.getCost(1).proofs} proofs</p>
               <p className="text-xs text-gray-500">Available</p>
            </Card>
            <Card className="p-2 bg-gray-800/30 rounded-sm">
               <h2 className="text-sm text-gray-400">Next level:</h2>
               <p className="text-sm">11 → 11.1/sec</p>
               <p className="text-xs text-green-400">Increase: +0.1/sec</p>
            </Card>
         </div>
         <Button
            className="w-full font-orbitron"
            onClick={() => gameStore.buyGenerator(generatorStore.id, 1)}
         >
            UPGRADE x1
         </Button>
      </Card>
   );
});
