import { DotBackground } from '../design/DotBackground';
import { ScanlineBackground } from '../design/ScanlineBackground';

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
   return (
      <div className="min-h-screen">
         <DotBackground />
         <ScanlineBackground />
         {children}
      </div>
   );
};
