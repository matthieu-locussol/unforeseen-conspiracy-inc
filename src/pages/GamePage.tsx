import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { ExtractButton } from '../components/core/ExtractButton';
import { Navbar } from '../components/core/Navbar';
import { BulkBuyButtons } from '../components/gameplay/BulkBuyButtons';
import { GeneratorsGrid } from '../components/gameplay/GeneratorsGrid';
import { MenuButtons } from '../components/gameplay/MenuButtons';
import { ResourceCard } from '../components/gameplay/ResourceCard';
import { useGameLifecycle } from '../hooks/useGameLifecycle';
import { useScrollNavbar } from '../hooks/useScrollNavbar';
import { useI18n } from '../i18n/i18n';
import { useStore } from '../store/StoreContext';
import { setDiscordRichPresence } from '../utils/discordMgt';
import { formatDecimal } from '../utils/numberMgt';

export const GamePage = observer(() => {
   const { gameStore } = useStore();
   const { t } = useI18n();

   useEffect(() => {
      setDiscordRichPresence({
         details: `Has ${formatDecimal(
            gameStore.statistics.totalProofsGenerated,
            (s) => s,
         )} proofs`,
         state: 'In Game',
         large_image: 'default',
         large_text: `Unforeseen Conspiracy Inc.`,
         timestamp: gameStore.statistics.startTime,
      });
   }, [gameStore.statistics.totalProofsGenerated]);

   useGameLifecycle();

   const isNavbarVisible = useScrollNavbar('scroll-threshold');

   return (
      <div className="flex flex-col gap-4">
         <Navbar isVisible={isNavbarVisible} />
         <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-bold z-10 font-orbitron tracking-wider text-green-400 [text-shadow:0_0_5px_rgba(0,255,0,0.3)] mb-4">
               {t.game.title}
            </h1>
            <MenuButtons className="ml-auto" />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResourceCard resourceStore={gameStore.proofs} />
            <ResourceCard resourceStore={gameStore.followers} />
            <ResourceCard isRed resourceStore={gameStore.paranoia} />
         </div>
         <div className="flex justify-between gap-4">
            <ExtractButton onClick={() => gameStore.clickProofs()}>
               {t.ui.extractProofs}
            </ExtractButton>
            <BulkBuyButtons />
         </div>
         <div className="h-px" id="scroll-threshold" />
         <GeneratorsGrid />
         <div className="border-t border-dashed border-green-500/20 pt-2 text-xs text-green-500/40 text-center mt-4">
            <p>{t.game.classifiedFooter}</p>
            <p>
               {t.game.projectFooter} - {new Date().toISOString()}
            </p>
         </div>
      </div>
   );
});
