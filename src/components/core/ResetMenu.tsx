'use client';

import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { toast } from 'sonner';

import { RESET_COUNTDOWN } from '../../data/constants';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { interpolate } from '../../utils/stringMgt';

import { Button } from './ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from './ui/dialog';
import {
   Drawer,
   DrawerContent,
   DrawerDescription,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from './ui/drawer';

interface ResetMenuProps {
   children: React.ReactNode;
}

export const ResetMenu = observer(({ children }: ResetMenuProps) => {
   const { hudStore } = useStore();
   const { t } = useI18n();
   const isDesktop = useMediaQuery('(min-width: 768px)');

   if (isDesktop) {
      return (
         <Dialog open={hudStore.isResetOpen} onOpenChange={() => hudStore.toggleReset()}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle className="text-red-400">{t.ui.resetData}</DialogTitle>
                  <DialogDescription
                     className="text-gray-400"
                     dangerouslySetInnerHTML={{ __html: t.ui.resetDescription }}
                  />
               </DialogHeader>
               <ResetContent onClose={() => hudStore.setIsResetOpen(false)} />
            </DialogContent>
         </Dialog>
      );
   }

   return (
      <Drawer open={hudStore.isResetOpen} onOpenChange={() => hudStore.toggleReset()}>
         <DrawerTrigger asChild>{children}</DrawerTrigger>
         <DrawerContent className="pb-4">
            <DrawerHeader className="text-left">
               <DrawerTitle className="text-red-400">{t.ui.resetData}</DrawerTitle>
               <DrawerDescription
                  className="text-gray-400"
                  dangerouslySetInnerHTML={{ __html: t.ui.resetDescription }}
               />
            </DrawerHeader>
            <ResetContent className="px-4" onClose={() => hudStore.setIsResetOpen(false)} />
         </DrawerContent>
      </Drawer>
   );
});

const ResetContent = observer(
   ({ onClose, className }: React.ComponentProps<'form'> & { onClose: () => void }) => {
      const { saveStore } = useStore();
      const { t } = useI18n();
      const [countdown, setCountdown] = React.useState(RESET_COUNTDOWN);
      const isDesktop = useMediaQuery('(min-width: 768px)');

      React.useEffect(() => {
         if (countdown > 0) {
            setTimeout(() => setCountdown(countdown - 1), 1_000);
         }
      }, [countdown]);

      const handleReset = () => {
         saveStore.deleteSave();
         toast.success(t.ui.resetSuccess);

         onClose();
      };

      return (
         <div className={cn('grid items-start gap-6', className)}>
            <div className={cn(['flex gap-2', isDesktop ? 'ml-auto' : 'flex-col'])}>
               <Button disabled={countdown > 0} variant="destructive" onClick={handleReset}>
                  {countdown > 0
                     ? interpolate(t.ui.resetCountdown, { seconds: countdown })
                     : t.ui.resetData}
               </Button>
               <Button variant="dark" onClick={() => onClose()}>
                  {t.ui.cancel}
               </Button>
            </div>
         </div>
      );
   },
);
