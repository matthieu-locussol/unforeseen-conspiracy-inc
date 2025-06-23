import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { useSound } from 'react-sounds';

import { cn } from '../../../utils/cn';

import { buttonVariants } from './button-variants';

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
   sound?: string | null;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   (
      { className, variant, size, asChild = false, sound = 'ui/button_medium', onClick, ...props },
      ref,
   ) => {
      const { play } = useSound(sound || 'ui/button_medium');

      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
         if (sound !== null) {
            play();
         }
         onClick?.(event);
      };

      const Comp = asChild ? Slot : 'button';

      return (
         <Comp
            ref={ref}
            className={cn(buttonVariants({ variant, size, className }))}
            onClick={handleClick}
            {...props}
         />
      );
   },
);

Button.displayName = 'Button';

export { Button };
