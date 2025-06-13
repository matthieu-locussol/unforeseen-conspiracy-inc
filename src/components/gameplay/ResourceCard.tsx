import type { ResourceStore } from '../../store/ResourceStore';

import { observer } from 'mobx-react-lite';

import { toUpperCaseFirst } from '../../utils/stringMgt';
import { CustomIcon } from '../core/Icons';
import { Card } from '../core/ui/card';

interface ResourceCardProps {
   resourceStore: ResourceStore;
}

export const ResourceCard = observer(({ resourceStore }: ResourceCardProps) => {
   return (
      <Card className="flex items-center w-full p-4 gap-4 relative transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-green-400/20">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,255,0,0.1),transparent_70%)] rounded-md" />
         <div className="p-2 rounded-lg bg-gray-800 text-green-400 snappy-transition transform hover:scale-110">
            <CustomIcon className="h-6 w-6" icon="searchCheck" />
         </div>
         <div>
            <h2 className="text-xl">{toUpperCaseFirst(resourceStore.id)}</h2>
            <p className="text-2xl font-bold text-green-400 font-orbitron tracking-wider [text-shadow:0_0_5px_rgba(0,255,0,0.3)]">
               {resourceStore.value.toFixed(0)}
            </p>
         </div>
      </Card>
   );
});
