'use client';

import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useI18n } from '../../i18n/i18n';
import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { LocaleSwitch } from '../LocaleSwitch';

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

interface SettingsMenuProps {
   children: React.ReactNode;
}

export const SettingsMenu = observer(({ children }: SettingsMenuProps) => {
   const { hudStore } = useStore();
   const { t } = useI18n();
   const isDesktop = useMediaQuery('(min-width: 768px)');

   if (isDesktop) {
      return (
         <Dialog open={hudStore.isSettingsOpen} onOpenChange={() => hudStore.toggleSettings()}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle className="text-green-400">{t.ui.settingsTitle}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                     {t.ui.settingsDescription}
                  </DialogDescription>
               </DialogHeader>
               <SettingsContent onClose={() => hudStore.setIsSettingsOpen(false)} />
            </DialogContent>
         </Dialog>
      );
   }

   return (
      <Drawer open={hudStore.isSettingsOpen} onOpenChange={() => hudStore.toggleSettings()}>
         <DrawerTrigger asChild>{children}</DrawerTrigger>
         <DrawerContent className="pb-4">
            <DrawerHeader className="text-left">
               <DrawerTitle className="text-green-400">{t.ui.settingsTitle}</DrawerTitle>
               <DrawerDescription className="text-gray-400">
                  {t.ui.settingsDescription}
               </DrawerDescription>
            </DrawerHeader>
            <SettingsContent className="px-4" onClose={() => hudStore.setIsSettingsOpen(false)} />
         </DrawerContent>
      </Drawer>
   );
});

const SettingsContent = ({
   onClose,
   className,
}: React.ComponentProps<'form'> & { onClose: () => void }) => {
   const { t } = useI18n();
   const isDesktop = useMediaQuery('(min-width: 768px)');

   return (
      <div className={cn('grid items-start gap-6', className)}>
         <LocaleSwitch />
         <Button
            className={cn(isDesktop ? 'ml-auto' : '')}
            variant="dark"
            onClick={() => onClose()}
         >
            {t.ui.close}
         </Button>
      </div>
   );
};
