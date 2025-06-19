import type { ClickData } from '../../types/clicker';

import { useRef, useState } from 'react';

import { cn } from '../../utils/cn';

import { Button } from './ui/button';

interface FloatingText {
   id: number;
   value: number;
   isCritical: boolean;
   combo: number;
   x: number;
   y: number;
}

interface ExtractButtonProps
   extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
   > {
   onClick: () => ClickData;
}

export const ExtractButton = ({ onClick, children, ...rest }: ExtractButtonProps) => {
   const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
   const buttonRef = useRef<HTMLButtonElement>(null);
   const textIdRef = useRef(0);

   const handleExtract: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      if (event.clientX !== 0 && event.clientY !== 0) {
         // Call the original onClick to get the generated value
         const { value, isCritical, combo } = onClick();

         // If onClick returns a number (the generated value), create floating text
         if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();

            // Generate random position within and slightly around the button
            const randomX = Math.random() * (buttonRect.width + 40) - 20; // Add some margin around button
            const randomY = Math.random() * (buttonRect.height + 20) - 10;

            const newFloatingText: FloatingText = {
               id: textIdRef.current++,
               value,
               isCritical,
               combo,
               x: randomX,
               y: randomY,
            };

            setFloatingTexts((prev) => [...prev, newFloatingText]);

            // Remove the floating text after animation completes
            setTimeout(() => {
               setFloatingTexts((prev) => prev.filter((text) => text.id !== newFloatingText.id));
            }, 1000); // Animation duration
         }
      }
   };

   return (
      <div className="relative">
         <Button
            ref={buttonRef}
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
         >
            {children}
         </Button>

         {/* Floating text container */}
         <div className="absolute inset-0 pointer-events-none overflow-visible">
            {floatingTexts.map((text) => (
               <div
                  key={text.id}
                  className={cn([
                     'absolute font-mono text-white font-semibold text-lg animate-float-up',
                     text.isCritical &&
                        'text-2xl text-red-400 font-bold uppercase tracking-wider shadow-lg',
                  ])}
                  style={{
                     left: `${text.x}px`,
                     top: `${text.y}px`,
                     textShadow: '0 0 8px rgba(74, 222, 128, 0.8)',
                     scale: 0.8 + 0.3 * text.combo,
                  }}
               >
                  +{text.value.toFixed(1)}
                  <span className="text-amber-400 text-xs ml-0.5">
                     {text.combo > 1 && `×${text.combo.toFixed(1)}`}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};
