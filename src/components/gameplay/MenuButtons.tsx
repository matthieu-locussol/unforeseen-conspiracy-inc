import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { CustomIcon } from '../core/Icons';
import { SettingsMenu } from '../core/SettingsMenu';
import { Button } from '../core/ui/button';

interface MenuButtonsProps {
   className?: string;
}

export const MenuButtons = observer(({ className }: MenuButtonsProps) => {
   const { gameStore } = useStore();

   return (
      <div className={cn('flex items-center gap-2', className)}>
         <Button className="px-3" variant="dark" onClick={() => gameStore.togglePlay()}>
            <CustomIcon className="w-4 h-4" icon={gameStore.isRunning ? 'pause' : 'play'} />
         </Button>
         <SettingsMenu>
            <Button className="px-3" variant="dark">
               <CustomIcon className="w-4 h-4" icon="settings" />
            </Button>
         </SettingsMenu>
      </div>
   );
});
