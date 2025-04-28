import type { ResourceStore } from '../store/ResourceStore';

interface ResourceCardProps {
   resourceStore: ResourceStore;
}

export const ResourceCard = ({ resourceStore }: ResourceCardProps) => {
   return (
      <div>
         <h2>
            {resourceStore.id}: {resourceStore.value.toFixed(0)}
         </h2>
      </div>
   );
};
