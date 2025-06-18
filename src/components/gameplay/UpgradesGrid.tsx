import type { GeneratorStore } from '../../store/GeneratorStore';

import { observer } from 'mobx-react-lite';

import { CustomIcon } from '../core/Icons';

import { UpgradeCard } from './UpgradeCard';

interface UpgradesGridProps {
   generatorStore: GeneratorStore;
}

export const UpgradesGrid = observer(({ generatorStore }: UpgradesGridProps) => {
   if (generatorStore.upgrades.length === 0) {
      return null;
   }

   if (!generatorStore.unlocked) {
      return (
         <div className="flex justify-center items-center w-full border-t border-gray-700/70 pt-3">
            <CustomIcon className="text-gray-600 h-8 w-8" icon="eye" />
         </div>
      );
   }

   return (
      <div className="grid grid-cols-8 xs:grid-cols-12 md:grid-cols-10 gap-2 w-full border-t border-gray-700/70 pt-3">
         {generatorStore.upgrades.map((upgradeStore) => (
            <UpgradeCard key={upgradeStore.id} upgrade={upgradeStore.upgradeData} />
         ))}
      </div>
   );
});
