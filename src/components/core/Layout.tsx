import { DotBackground } from '../design/DotBackground';

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
   return (
      <div className="min-h-screen">
         <DotBackground />
         {children}
      </div>
   );
};
