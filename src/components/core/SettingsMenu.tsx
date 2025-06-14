'use client';

import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useStore } from '../../store/StoreContext';
import { cn } from '../../utils/cn';
import { LocaleSwitch } from '../LocaleSwitch';

import { CustomIcon } from './Icons';
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

export const SettingsMenu = observer(() => {
   const { hudStore } = useStore();
   const isDesktop = useMediaQuery('(min-width: 768px)');

   if (isDesktop) {
      return (
         <Dialog open={hudStore.isSettingsOpen} onOpenChange={() => hudStore.toggleSettings()}>
            <DialogTrigger asChild>
               <Button className="px-3" variant="dark">
                  <CustomIcon className="w-4 h-4" icon="settings" />
               </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle className="text-green-400">Settings</DialogTitle>
                  <DialogDescription className="text-gray-400">
                     Make changes to your settings here.
                  </DialogDescription>
               </DialogHeader>
               <SettingsContent onClose={() => hudStore.setIsSettingsOpen(false)} />
            </DialogContent>
         </Dialog>
      );
   }

   return (
      <Drawer open={hudStore.isSettingsOpen} onOpenChange={() => hudStore.toggleSettings()}>
         <DrawerTrigger asChild>
            <Button className="px-3" variant="dark">
               <CustomIcon className="w-4 h-4" icon="settings" />
            </Button>
         </DrawerTrigger>
         <DrawerContent className="pb-4">
            <DrawerHeader className="text-left">
               <DrawerTitle className="text-green-400">Settings</DrawerTitle>
               <DrawerDescription className="text-gray-400">
                  Make changes to your settings here.
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
   const isDesktop = useMediaQuery('(min-width: 768px)');

   return (
      <div className={cn('grid items-start gap-6', className)}>
         <LocaleSwitch />
         <Button
            className={cn(isDesktop ? 'ml-auto' : '')}
            variant="dark"
            onClick={() => onClose()}
         >
            Close
         </Button>
      </div>
   );
};
