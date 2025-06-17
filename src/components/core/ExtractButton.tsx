import { cn } from '../../utils/cn';

import { Button } from './ui/button';

export const ExtractButton = ({
   onClick,
   ...rest
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
   const handleExtract: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      if (event.clientX !== 0 && event.clientY !== 0) {
         onClick?.(event);
      }
   };

   return (
      <Button
         className={cn([
            // Base styles with gradient background
            'cursor-pointer',
            'relative bg-gradient-to-br from-emerald-800 via-green-800 to-teal-900',
            'hover:from-emerald-700 hover:via-green-700 hover:to-teal-800',
            'active:from-emerald-800 active:via-green-800 active:to-teal-800',

            // Text and border
            'text-white font-semibold tracking-wide',
            'border border-emerald-600/40 hover:border-emerald-500/60',

            // Shape and spacing
            'rounded-md px-4 py-2',

            // Shadows and effects
            'shadow-sm shadow-emerald-900/30',
            'hover:shadow-md hover:shadow-emerald-800/40',

            // Transitions
            'transition-all duration-200 ease-out',

            // Disabled state
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
         ])}
         tabIndex={-1}
         {...rest}
         onClick={handleExtract}
      />
   );
};
