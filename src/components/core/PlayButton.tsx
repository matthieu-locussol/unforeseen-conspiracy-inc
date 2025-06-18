import { observer } from 'mobx-react-lite';

import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';

import { CustomIcon } from './Icons';
import { Button } from './ui/button';

export const PlayButton = observer(() => {
   const { routingStore } = useStore();
   const { t } = useI18n();

   return (
      <Button
         className="w-full h-24 bg-gradient-to-r from-green-900 to-green-700 hover:bg-green-800 text-green-100 border border-green-600/50 shadow-lg shadow-green-900/30 font-orbitron tracking-wider text-xl rounded-lg transition-all duration-300 hover:scale-103 relative overflow-hidden"
         onClick={() => routingStore.transition('bootloader')}
      >
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent transform -translate-x-full animate-shimmer" />
         </div>
         <CustomIcon className="h-6 w-6 mr-2" icon="play" />
         {t.ui.launch}
      </Button>
   );
});
