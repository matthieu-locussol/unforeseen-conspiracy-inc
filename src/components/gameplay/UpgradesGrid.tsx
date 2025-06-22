import type { GeneratorStore } from '../../store/GeneratorStore';

import { AnimatePresence, motion } from 'framer-motion';
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
      <motion.div
         layout
         className="grid grid-cols-8 xs:grid-cols-12 md:grid-cols-10 gap-2 w-full border-t border-gray-700/70 pt-3"
         transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
         <AnimatePresence mode="popLayout" />
         {generatorStore.upgrades.map((upgradeStore, index) => (
            <motion.div
               key={upgradeStore.id}
               layout
               animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: 'blur(0px)',
               }}
               exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: -10,
                  filter: 'blur(4px)',
               }}
               initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 10,
                  filter: 'blur(4px)',
               }}
               transition={{
                  duration: 0.6,
                  delay: upgradeStore.unlocked ? 0 : index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  layout: {
                     duration: 0.4,
                     ease: 'easeInOut',
                  },
               }}
            >
               <UpgradeCard upgrade={upgradeStore.upgradeData} />
            </motion.div>
         ))}
      </motion.div>
   );
});
