import type { GeneratorStore } from '../../store/GeneratorStore';

import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';

import { UpgradeCard } from './UpgradeCard';

interface UpgradesGridProps {
   generatorStore: GeneratorStore;
}

export const UpgradesGrid = observer(({ generatorStore }: UpgradesGridProps) => {
   const { gameStore } = useStore();

   // Get upgrades that are related to this generator
   const generatorUpgrades = gameStore.visibleUpgrades.filter((upgrade) => {
      return upgrade.boosts.some((boost) => {
         // Show upgrades that target this specific generator
         if (boost.target.type === 'generator' && boost.target.id === generatorStore.id) {
            return true;
         }
         // Show upgrades that target categories this generator belongs to
         if (
            boost.target.type === 'category' &&
            generatorStore.categories.includes(boost.target.id)
         ) {
            return true;
         }
         // Show global upgrades
         if (boost.target.type === 'all_generators' || boost.target.type === 'global') {
            return true;
         }

         return false;
      });
   });

   if (generatorUpgrades.length === 0) {
      return null;
   }

   return (
      <div className="grid grid-cols-8 xs:grid-cols-12 md:grid-cols-10 gap-2 w-full border-t border-gray-700/70 pt-3">
         {generatorUpgrades.map((upgradeStore) => (
            <UpgradeCard key={upgradeStore.id} upgrade={upgradeStore.upgradeData} />
         ))}
      </div>
   );
});
