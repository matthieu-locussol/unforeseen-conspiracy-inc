import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';
import { Button } from '../core/ui/button';

export const BulkBuyButtons = observer(() => {
   const { hudStore } = useStore();

   return (
      <div className="flex items-center justify-center gap-4">
         <Button
            disabled={hudStore.bulkBuy === 1}
            variant="dark"
            onClick={() => hudStore.setBulkBuy(1)}
         >
            x1
         </Button>
         <Button
            disabled={hudStore.bulkBuy === 10}
            variant="dark"
            onClick={() => hudStore.setBulkBuy(10)}
         >
            x10
         </Button>
         <Button
            disabled={hudStore.bulkBuy === 100}
            variant="dark"
            onClick={() => hudStore.setBulkBuy(100)}
         >
            x100
         </Button>
      </div>
   );
});
