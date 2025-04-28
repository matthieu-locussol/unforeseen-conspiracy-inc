import type { GeneratorStore } from '../store/GeneratorStore';

import { observer } from 'mobx-react-lite';

import { useStore } from '../store/StoreContext';

export interface GeneratorCardProps {
   generatorStore: GeneratorStore;
}

export const GeneratorCard = observer(({ generatorStore }: GeneratorCardProps) => {
   const { gameStore } = useStore();

   return (
      <fieldset>
         <h2>
            {generatorStore.id} - Level: {generatorStore.level}
         </h2>
         <p>
            Cost: {generatorStore.getCost(1).proofs} proofs, {generatorStore.getCost(1).followers}{' '}
            followers
         </p>
         <p>
            Production: {generatorStore.effectiveProduction.proofs} proofs,{' '}
            {generatorStore.effectiveProduction.followers} followers,{' '}
            {generatorStore.effectiveProduction.paranoia} paranoia
         </p>
         <button onClick={() => gameStore.buyGenerator(generatorStore.id, 1)}>Buy 1</button>
      </fieldset>
   );
});
