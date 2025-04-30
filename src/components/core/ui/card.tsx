import * as React from 'react';

import { cn } from '../../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
   shining?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
   ({ className, children, shining, ...props }, ref) => (
      <div
         ref={ref}
         className={cn(
            'rounded-lg border bg-card text-card-foreground shadow',
            'bg-gray-900 border-green-900/50 shadow-lg shadow-green-900/10',
            shining && 'relative overflow-hidden',
            className,
         )}
         {...props}
      >
         {shining && (
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent z-10" />
         )}
         {shining && (
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent z-10" />
         )}
         {children}
      </div>
   ),
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div
         ref={ref}
         className={cn('flex flex-col space-y-1.5 p-6', 'pb-2 relative', className)}
         {...props}
      />
   ),
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div
         ref={ref}
         className={cn(
            'text-2xl font-semibold leading-none tracking-tight',
            'text-green-300 font-orbitron tracking-wide flex items-center',
            className,
         )}
         {...props}
      />
   ),
);

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div
         ref={ref}
         className={cn('text-sm text-muted-foreground', 'text-gray-400', className)}
         {...props}
      />
   ),
);

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
   ),
);

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
   ),
);

CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
