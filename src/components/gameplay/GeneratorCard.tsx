import type { GeneratorStore } from '../../store/GeneratorStore';

import { observer } from 'mobx-react-lite';

import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { CustomIcon } from '../core/Icons';
import { Badge } from '../core/ui/badge';
import { Button } from '../core/ui/button';
import { Card } from '../core/ui/card';

import { UpgradesGrid } from './UpgradesGrid';

export interface GeneratorCardProps {
   generatorStore: GeneratorStore;
}

export const GeneratorCard = observer(({ generatorStore }: GeneratorCardProps) => {
   const { gameStore, hudStore } = useStore();
   const { t } = useI18n();

   return (
      <Card
         className={cn([
            'flex flex-col items-center w-full p-4 gap-3 relative',
            'border-green-900/50 hover:shadow-lg hover:shadow-green-900/30',
            'transition-all duration-300 ease-out',
            'transform-gpu will-change-transform',
            `${
               !generatorStore.unlocked &&
               !gameStore.canBuyGenerator(generatorStore.id, hudStore.bulkBuy) &&
               'opacity-75 pointer-events-none bg-gray-900/40'
            }`,
         ])}
      >
         <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between w-full">
               <h2
                  className={cn([
                     'text-lg font-semibold font-orbitron transition-colors duration-300',
                     generatorStore.unlocked ? 'text-gray-200' : 'text-gray-400',
                  ])}
               >
                  {generatorStore.unlocked ? t['generators'][generatorStore.id]['name'] : '???'}
               </h2>
               <Badge
                  className={cn([
                     'font-orbitron border rounded-sm transition-all duration-300',
                     generatorStore.unlocked
                        ? 'bg-blue-700/10 text-blue-400/90 border-blue-400/30'
                        : 'bg-gray-700/10 text-gray-400/90 border-gray-400/30',
                  ])}
               >
                  LVL {generatorStore.level}
               </Badge>
            </div>
            <div className="grid grid-cols-3 gap-3 mr-auto">
               <div className="flex items-center gap-1.5">
                  <CustomIcon
                     className={cn([
                        'h-4 w-4 transition-colors duration-300',
                        generatorStore.unlocked ? 'text-amber-400' : 'text-gray-400',
                     ])}
                     icon="searchCheck"
                  />
                  <p
                     className={cn([
                        'text-sm transition-colors duration-300',
                        generatorStore.unlocked ? 'text-gray-200' : 'text-gray-400',
                     ])}
                  >
                     {generatorStore.unlocked
                        ? `${generatorStore.effectiveProduction.proofs}/sec`
                        : '???'}
                  </p>
               </div>
               {generatorStore.effectiveProduction.followers > 0 && (
                  <div className="flex items-center gap-1.5">
                     <CustomIcon className="h-4 w-4 text-amber-400" icon="usersRound" />
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
         <p
            className={cn([
               'text-xs italic mb-auto transition-all duration-300',
               generatorStore.unlocked ? 'text-gray-400' : 'text-gray-500 w-full',
            ])}
         >
            {generatorStore.unlocked
               ? t['generators'][generatorStore.id]['description']
               : 'You need to dig deeper...'}
         </p>
         <div className="grid grid-cols-2 w-full gap-2">
            <Card className="p-2 bg-green-800/30 border-green-900 rounded-sm transition-all duration-200 hover:bg-green-800/40">
               <h2 className="text-sm text-gray-400">Cost:</h2>
               <p className="text-sm">
                  {
                     generatorStore.getCost(
                        hudStore.bulkBuy,
                        gameStore.getGeneratorCostReduction(generatorStore.id),
                     ).proofs
                  }{' '}
                  proofs
               </p>
            </Card>
            {generatorStore.unlocked ? (
               <Card className="p-2 bg-blue-800/30 border-blue-900 rounded-sm transition-all duration-200 hover:bg-blue-800/40">
                  <h2 className="text-sm text-gray-400">Next level:</h2>
                  <p className="text-sm text-blue-200 flex items-center">
                     <CustomIcon
                        className="inline-flex h-4 w-4 mr-1 text-amber-400"
                        icon="searchCheck"
                     />{' '}
                     →{' '}
                     {
                        generatorStore.getEffectiveProduction(
                           generatorStore.level + hudStore.bulkBuy,
                        ).proofs
                     }
                     /sec (+
                     {generatorStore.getProductionIncrease(hudStore.bulkBuy).proofs}/sec)
                  </p>
               </Card>
            ) : (
               <Card className="p-2 bg-gray-600/30 border-gray-900 rounded-sm flex justify-center items-center transition-all duration-300">
                  <span className="text-gray-500">???</span>
               </Card>
            )}
         </div>
         <UpgradesGrid generatorStore={generatorStore} />
         <Button
            className="w-full font-orbitron transition-all duration-300 transform-gpu"
            disabled={!gameStore.canBuyGenerator(generatorStore.id, hudStore.bulkBuy)}
            size="sm"
            onClick={() => gameStore.buyGenerator(generatorStore.id, hudStore.bulkBuy)}
         >
            Upgrade ×{hudStore.bulkBuy}
         </Button>
      </Card>
   );
});
