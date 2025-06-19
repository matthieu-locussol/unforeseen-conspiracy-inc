import { observer } from 'mobx-react-lite';

import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';

import { CustomIcon } from './Icons';
import { SettingsMenu } from './SettingsMenu';
import { Button } from './ui/button';

interface NavbarProps {
   isVisible: boolean;
}

export const Navbar = observer(({ isVisible }: NavbarProps) => {
   const { gameStore } = useStore();
   const { t } = useI18n();

   return (
      <div
         className={`
            fixed top-0 left-0 right-0 z-50 
            bg-black/90 backdrop-blur-sm border-b border-green-500/20
            transform transition-transform duration-300 ease-in-out
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
         `}
      >
         <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold font-orbitron tracking-wider text-green-400 [text-shadow:0_0_5px_rgba(0,255,0,0.3)]">
                  {t.game.title}
               </h2>
               <div className="flex items-center gap-2">
                  <Button className="px-3" variant="dark" onClick={() => gameStore.togglePlay()}>
                     <CustomIcon
                        className="w-4 h-4"
                        icon={gameStore.isRunning ? 'pause' : 'play'}
                     />
                  </Button>
                  <SettingsMenu>
                     <Button className="px-3" variant="dark">
                        <CustomIcon className="w-4 h-4" icon="settings" />
                     </Button>
                  </SettingsMenu>
               </div>
            </div>
         </div>
      </div>
   );
});
