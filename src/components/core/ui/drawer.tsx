'use client';

import * as React from 'react';
import { playSound } from 'react-sounds';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '../../../utils/cn';

function Drawer({ onOpenChange, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
   const prevOpenRef = React.useRef<boolean | undefined>(undefined);

   const handleOpenChange = (open: boolean) => {
      // Play sound when drawer closes (was open, now closed)
      if (prevOpenRef.current === true && open === false) {
         playSound('ui/window_close');
      }
      prevOpenRef.current = open;
      onOpenChange?.(open);
   };

   return <DrawerPrimitive.Root data-slot="drawer" onOpenChange={handleOpenChange} {...props} />;
}

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
   return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
   return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
   return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
   className,
   ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
   return (
      <DrawerPrimitive.Overlay
         className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/40',
            className,
         )}
         data-slot="drawer-overlay"
         {...props}
      />
   );
}

function DrawerContent({
   className,
   children,
   ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
   return (
      <DrawerPortal data-slot="drawer-portal">
         <DrawerOverlay />
         <DrawerPrimitive.Content
            className={cn(
               'group/drawer-content bg-gray-900 fixed z-50 flex h-auto flex-col border-gray-700',
               'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
               'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
               'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
               'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
               className,
            )}
            data-slot="drawer-content"
            {...props}
         >
            <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
            {children}
         </DrawerPrimitive.Content>
      </DrawerPortal>
   );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         className={cn(
            'flex flex-col gap-0.5 p-4 pt-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
            className,
         )}
         data-slot="drawer-header"
         {...props}
      />
   );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         className={cn('mt-auto flex flex-col gap-2 p-4', className)}
         data-slot="drawer-footer"
         {...props}
      />
   );
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
   return (
      <DrawerPrimitive.Title
         className={cn('text-foreground font-semibold', className)}
         data-slot="drawer-title"
         {...props}
      />
   );
}

function DrawerDescription({
   className,
   ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
   return (
      <DrawerPrimitive.Description
         className={cn('text-muted-foreground text-sm', className)}
         data-slot="drawer-description"
         {...props}
      />
   );
}

export {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerPortal,
   DrawerTitle,
   DrawerTrigger,
};
