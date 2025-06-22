import type { GeneratorStore } from '../../store/GeneratorStore';

import { observer } from 'mobx-react-lite';

import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { formatDecimal } from '../../utils/numberMgt';
import { interpolate } from '../../utils/stringMgt';
import { CategoryIcon, CustomIcon } from '../core/Icons';
import { Badge } from '../core/ui/badge';
import { Button } from '../core/ui/button';
import { Card } from '../core/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../core/ui/tooltip';

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
            'flex flex-col items-center w-full p-4 gap-3 relative h-full',
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
                     'font-orbitron border rounded-sm transition-all duration-300 text-nowrap mb-auto',
                     generatorStore.unlocked
                        ? 'bg-blue-700/10 text-blue-400/90 border-blue-400/30'
                        : 'bg-gray-700/10 text-gray-400/90 border-gray-400/30',
                  ])}
               >
                  {t.ui.level} {formatDecimal(generatorStore.level).split('.')[0]}
               </Badge>
            </div>
            <div className="flex justify-between w-full">
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
                        dangerouslySetInnerHTML={{
                           __html: generatorStore.unlocked
                              ? `${formatDecimal(
                                   generatorStore.effectiveProduction.proofs,
                                   (suffix: string) =>
                                      `<b class="text-amber-600 text-shadow-black text-shadow">${suffix}</b>`,
                                )}/sec`
                              : '???',
                        }}
                        className={cn([
                           'text-sm transition-colors duration-300',
                           generatorStore.unlocked ? 'text-gray-200' : 'text-gray-400',
                        ])}
                     />
                  </div>
                  {generatorStore.effectiveProduction.followers.greaterThan(0) && (
                     <div className="flex items-center gap-1.5">
                        <CustomIcon className="h-4 w-4 text-amber-400" icon="usersRound" />
                        <p
                           dangerouslySetInnerHTML={{
                              __html: `${formatDecimal(
                                 generatorStore.effectiveProduction.followers,
                                 (suffix: string) =>
                                    `<b class="text-amber-600 text-shadow-black text-shadow">${suffix}</b>`,
                              )}/sec`,
                           }}
                           className="text-sm text-gray-200"
                        />
                     </div>
                  )}
                  {generatorStore.effectiveProduction.paranoia.greaterThan(0) && (
                     <div className="flex items-center gap-1.5">
                        <CustomIcon className="h-4 w-4 text-red-400" icon="eye" />
                        <p
                           dangerouslySetInnerHTML={{
                              __html: `${formatDecimal(
                                 generatorStore.effectiveProduction.paranoia,
                                 (suffix: string) =>
                                    `<b class="text-red-600 text-shadow-black text-shadow">${suffix}</b>`,
                              )}/sec`,
                           }}
                           className="text-sm text-red-200"
                        />
                     </div>
                  )}
               </div>
               {generatorStore.unlocked && (
                  <div className="flex ml-auto justify-center items-center gap-2">
                     {generatorStore.categories.map((category) => (
                        <Tooltip key={category}>
                           <TooltipTrigger className="hover:opacity-70">
                              <CategoryIcon category={category} className="text-cyan-300 w-4 h-4" />
                           </TooltipTrigger>
                           <TooltipContent>{t.categories[category]}</TooltipContent>
                        </Tooltip>
                     ))}
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
               : t.ui.youNeedToDigDeeper}
         </p>
         <div
            className={cn([
               'grid grid-cols-2 w-full gap-2',
               !generatorStore.unlocked && 'grid-cols-1',
            ])}
         >
            {generatorStore.unlocked && (
               <Card className="p-2 bg-green-800/30 border-green-900 rounded-sm transition-all duration-200 hover:bg-green-800/40">
                  <h2 className="text-sm text-gray-400">{t.ui.cost}</h2>
                  <p
                     dangerouslySetInnerHTML={{
                        __html: `${formatDecimal(
                           generatorStore.getCost(
                              hudStore.bulkBuy,
                              gameStore.getGeneratorCostReduction(generatorStore.id),
                           ).proofs,
                           (suffix: string) =>
                              `<b class="text-green-600 text-shadow-black text-shadow">${suffix}</b>`,
                        )} ${t.resources.proofs.name.toLowerCase()}`,
                     }}
                     className="text-sm"
                  />
               </Card>
            )}
            {generatorStore.unlocked ? (
               <Card className="p-2 bg-blue-800/30 border-blue-900 rounded-sm transition-all duration-200 hover:bg-blue-800/40">
                  <h2 className="text-sm text-gray-400">{t.ui.nextLevel}</h2>
                  <p className="text-sm text-blue-200 flex items-center">
                     <CustomIcon
                        className="inline-flex h-4 w-4 mr-1 text-amber-400"
                        icon="searchCheck"
                     />
                     {' → '}
                     <span
                        dangerouslySetInnerHTML={{
                           __html: `${formatDecimal(
                              generatorStore.getEffectiveProduction(
                                 generatorStore.level.add(hudStore.bulkBuy),
                              ).proofs,
                              (suffix: string) =>
                                 `<b class="text-blue-500 text-shadow-black text-shadow">${suffix}</b>`,
                           )}/sec (+${formatDecimal(
                              generatorStore.getProductionIncrease(hudStore.bulkBuy).proofs,
                              (suffix: string) =>
                                 `<b class="text-blue-500 text-shadow-black text-shadow">${suffix}</b>`,
                           )})`,
                        }}
                     />
                  </p>
               </Card>
            ) : (
               <Card className="p-2 bg-gray-600/30 border-gray-900 rounded-sm flex justify-center items-center transition-all duration-300">
                  <span className="text-gray-500 my-2">???</span>
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
            {interpolate(t.ui.upgradeMultiplier, { multiplier: formatDecimal(hudStore.bulkBuy) })}
         </Button>
      </Card>
   );
});
