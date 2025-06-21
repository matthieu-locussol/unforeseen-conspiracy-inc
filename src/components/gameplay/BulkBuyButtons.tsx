import Decimal from 'decimal.js';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';
import { Button } from '../core/ui/button';

export const BulkBuyButtons = observer(() => {
   const { hudStore } = useStore();

   return (
      <div className="flex items-center justify-center gap-2 md:gap-4">
         <Button
            disabled={hudStore.bulkBuy.equals(1)}
            variant="dark"
            onClick={() => hudStore.setBulkBuy(Decimal(1))}
         >
            x1
         </Button>
         <Button
            disabled={hudStore.bulkBuy.equals(10)}
            variant="dark"
            onClick={() => hudStore.setBulkBuy(Decimal(10))}
         >
            x10
         </Button>
         <Button
            disabled={hudStore.bulkBuy.equals(25)}
            variant="dark"
            onClick={() => hudStore.setBulkBuy(Decimal(25))}
         >
            x25
         </Button>
      </div>
   );
});
