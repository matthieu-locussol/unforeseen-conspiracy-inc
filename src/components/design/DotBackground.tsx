import { twMerge } from 'tailwind-merge';

export const DotBackground = () => {
   return (
      <div
         className={twMerge(
            'absolute w-full h-full pointer-events-none -z-1',
            'bg-[rgba(25,30,35,0.95)]',
         )}
         style={{
            backgroundImage:
               'radial-gradient(rgba(0,255,0,0.05) 1px, transparent 1px), radial-gradient(rgba(0,255,0,0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
         }}
      />
   );
};
