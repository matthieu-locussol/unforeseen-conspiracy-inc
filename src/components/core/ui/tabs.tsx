import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';
import { playSound } from 'react-sounds';

import { cn } from '../../../utils/cn';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
   React.ComponentRef<typeof TabsPrimitive.List>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.List
      ref={ref}
      className={cn(
         'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground gap-1',
         className,
      )}
      {...props}
   />
));

TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
   React.ComponentRef<typeof TabsPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, onClick, ...props }, ref) => {
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      playSound('ui/tab_open');
      onClick?.(event);
   };

   return (
      <TabsPrimitive.Trigger
         ref={ref}
         className={cn(
            'hover:cursor-pointer',
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
            'data-[state=active]:bg-green-950 data-[state=active]:text-green-300 font-orbitron tracking-wide',
            'hover:bg-green-950/30',
            className,
         )}
         onClick={handleClick}
         {...props}
      />
   );
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
   React.ComponentRef<typeof TabsPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.Content
      ref={ref}
      className={cn(
         'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
         className,
      )}
      {...props}
   />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
