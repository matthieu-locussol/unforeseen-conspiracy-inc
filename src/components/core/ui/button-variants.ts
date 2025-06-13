import { cva } from 'class-variance-authority';

import { cn } from '../../../utils/cn';

export const buttonVariants = cva(
   // Common properties organized in an array for better readability
   cn([
      // Basic button styling
      'hover:cursor-pointer inline-flex items-center justify-center gap-2',
      'whitespace-nowrap text-sm font-medium rounded-lg',
      'border relative overflow-hidden',

      // Focus and disabled states
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1',
      'disabled:pointer-events-none disabled:opacity-50',

      // SVG handling
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',

      // Animation properties
      'transition-all duration-200',
      'active:translate-y-[1px]',
   ]),
   {
      variants: {
         variant: {
            // Conspiracy-themed default variant
            default: cn([
               'bg-green-700/10 text-green-500/90 border-green-500/30',
               'shadow-[0_0_2px_rgba(0,255,0,0.2)]',
               'hover:bg-green-700/20 hover:shadow-[0_0_5px_rgba(0,255,0,0.4)]',
               'active:bg-green-700/30 active:shadow-[0_0_5px_rgba(0,255,0,0.4)]',
            ]),

            // Adapted destructive variant with red theme
            destructive: cn([
               'bg-red-700/10 text-red-500/90 border-red-500/30',
               'shadow-[0_0_2px_rgba(255,0,0,0.2)]',
               'hover:bg-red-700/20 hover:shadow-[0_0_5px_rgba(255,0,0,0.4)]',
               'active:bg-red-700/30 active:shadow-[0_0_5px_rgba(255,0,0,0.4)]',
            ]),

            // Adapted outline variant
            outline: cn([
               'bg-transparent text-green-500/90 border-green-500/50',
               'shadow-[0_0_2px_rgba(0,255,0,0.1)]',
               'hover:bg-gray-800/30 hover:shadow-[0_0_5px_rgba(0,255,0,0.3)]',
               'active:bg-gray-700/30 active:shadow-[0_0_5px_rgba(0,255,0,0.3)]',
            ]),

            // Adapted secondary variant with blue theme
            secondary: cn([
               'bg-blue-700/10 text-blue-400/90 border-blue-400/30',
               'shadow-[0_0_2px_rgba(0,100,255,0.2)]',
               'hover:bg-blue-700/20 hover:shadow-[0_0_5px_rgba(0,100,255,0.4)]',
               'active:bg-blue-700/30 active:shadow-[0_0_5px_rgba(0,100,255,0.4)]',
            ]),

            // Ghost variant with subtle effect
            ghost: cn([
               'bg-transparent border-transparent text-green-500/90',
               'hover:bg-gray-800/30 hover:border-green-500/20',
               'hover:shadow-[0_0_5px_rgba(0,255,0,0.2)]',
               'active:bg-gray-700/30 active:shadow-[0_0_5px_rgba(0,255,0,0.2)]',
            ]),

            // Link variant with underline effect
            link: cn([
               'bg-transparent border-transparent text-green-500',
               'underline-offset-4 hover:underline',
               'hover:text-green-400 active:text-green-600',
               'hover:translate-y-0 active:translate-y-0 before:hidden',
            ]),

            dark: cn([
               'bg-green-700/10 text-green-500/90 border-green-500/30',
               'shadow-[0_0_2px_rgba(0,255,0,0.2)]',
               'hover:bg-green-700/20 hover:shadow-[0_0_5px_rgba(0,255,0,0.4)]',
               'active:bg-green-700/30 active:shadow-[0_0_5px_rgba(0,255,0,0.4)]',
               'bg-gray-900/40 hover:bg-gray-800/50',
            ]),
         },
         size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   },
);
