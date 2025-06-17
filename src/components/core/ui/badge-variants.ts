import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
   'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
   {
      variants: {
         variant: {
            default: 'border-transparent bg-primary text-primary-foreground',
            secondary: 'border-transparent bg-secondary text-secondary-foreground',
            destructive: 'border-transparent bg-destructive text-destructive-foreground',
            outline: 'text-foreground',
            icon: 'absolute -top-1.25 right-0.25 h-3 w-3 p-0 flex items-center justify-center',
         },
      },
      defaultVariants: {
         variant: 'default',
      },
   },
);
