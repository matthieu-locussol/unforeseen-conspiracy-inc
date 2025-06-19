import { observer } from 'mobx-react-lite';

import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';
import { MenuButtons } from '../gameplay/MenuButtons';
import { MiniResourceCard } from '../gameplay/MiniResourceCard';

import { ExtractButton } from './ExtractButton';

interface NavbarProps {
   isVisible: boolean;
}

export const Navbar = observer(({ isVisible }: NavbarProps) => {
   const { t } = useI18n();
   const { gameStore } = useStore();

   return (
      <div
         className={`
            fixed top-0 left-0 right-0 z-50
            bg-green-900/20 backdrop-blur-sm border-b border-green-500/20
            transform transition-transform duration-300 ease-in-out
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
         `}
      >
         <div className="mx-auto px-4 py-3 flex flex-col gap-2 w-full max-w-5xl">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold font-orbitron tracking-wider text-green-400 [text-shadow:0_0_5px_rgba(0,255,0,0.3)] hidden md:block">
                  {t.game.title}
               </h2>
               <h2 className="text-lg font-bold font-orbitron tracking-wider text-green-400 [text-shadow:0_0_5px_rgba(0,255,0,0.3)] md:hidden">
                  U.C. Inc.
               </h2>
               <MenuButtons className="ml-0" />
            </div>
            <div className="flex items-center gap-2">
               <MiniResourceCard resourceStore={gameStore.proofs} />
               <MiniResourceCard resourceStore={gameStore.followers} />
               <MiniResourceCard isRed resourceStore={gameStore.paranoia} />
            </div>
            <ExtractButton className="w-full" onClick={() => gameStore.clickProofs()}>
               Extract proofs
            </ExtractButton>
         </div>
      </div>
   );
});
