import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';

import { GeneratorCard } from './GeneratorCard';

export const GeneratorsGrid = observer(() => {
   const { gameStore } = useStore();

   return (
      <motion.div
         layout
         className="grid grid-cols-1 md:grid-cols-2 gap-4"
         transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
         <AnimatePresence mode="popLayout">
            {gameStore.visibleGenerators.map((generator, index) => (
               <motion.div
                  key={generator.id}
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
                     y: -50,
                     filter: 'blur(4px)',
                  }}
                  initial={{
                     opacity: 0,
                     scale: 0.8,
                     y: 50,
                     filter: 'blur(4px)',
                  }}
                  transition={{
                     duration: 0.6,
                     delay: generator.unlocked ? 0 : index * 0.1,
                     ease: [0.25, 0.46, 0.45, 0.94],
                     layout: {
                        duration: 0.4,
                        ease: 'easeInOut',
                     },
                  }}
                  whileHover={
                     generator.unlocked
                        ? {
                             scale: 1.02,
                             transition: { duration: 0.2 },
                          }
                        : undefined
                  }
               >
                  <GeneratorCard generatorStore={generator} />
               </motion.div>
            ))}
         </AnimatePresence>
      </motion.div>
   );
});
