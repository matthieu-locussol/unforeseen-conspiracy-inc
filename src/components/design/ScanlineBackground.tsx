export const ScanlineBackground = () => {
   return (
      <div
         className="fixed top-0 left-0 w-full h-full pointer-events-none -z-1"
         style={{
            background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
            backgroundSize: '100% 4px',
         }}
      />
   );
};
