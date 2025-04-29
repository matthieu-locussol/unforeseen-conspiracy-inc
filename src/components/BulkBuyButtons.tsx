import { observer } from 'mobx-react-lite';

import { useStore } from '../store/StoreContext';

export const BulkBuyButtons = observer(() => {
   const { hudStore } = useStore();

   return (
      <div className="flex items-center justify-center gap-4">
         <p>Bulk buy:</p>
         <button disabled={hudStore.bulkBuy === 1} onClick={() => hudStore.setBulkBuy(1)}>
            1
         </button>
         <button disabled={hudStore.bulkBuy === 10} onClick={() => hudStore.setBulkBuy(10)}>
            10
         </button>
         <button disabled={hudStore.bulkBuy === 100} onClick={() => hudStore.setBulkBuy(100)}>
            100
         </button>
      </div>
   );
});
