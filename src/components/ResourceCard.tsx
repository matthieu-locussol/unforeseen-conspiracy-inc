import type { ResourceStore } from '../store/ResourceStore';

import { observer } from 'mobx-react-lite';

interface ResourceCardProps {
   resourceStore: ResourceStore;
}

export const ResourceCard = observer(({ resourceStore }: ResourceCardProps) => {
   return (
      <div>
         <h2>
            {resourceStore.id}: {resourceStore.value.toFixed(0)}
         </h2>
      </div>
   );
});
