import type { GeneratorStore } from '../../store/GeneratorStore';

import { observer } from 'mobx-react-lite';

import { UpgradeCard } from './UpgradeCard';

interface UpgradesGridProps {
   generatorStore: GeneratorStore;
}

export const UpgradesGrid = observer(({ generatorStore }: UpgradesGridProps) => {
   if (generatorStore.upgrades.length === 0) {
      return null;
   }

   return (
      <div className="grid grid-cols-8 xs:grid-cols-12 md:grid-cols-10 gap-2 w-full border-t border-gray-700/70 pt-3">
         {generatorStore.upgrades.map((upgrade) => (
            <UpgradeCard key={upgrade.id} generatorStore={generatorStore} upgrade={upgrade} />
         ))}
      </div>
   );
});
