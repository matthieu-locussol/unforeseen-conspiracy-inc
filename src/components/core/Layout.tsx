interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
   return (
      <div className="flex flex-col justify-center relative z-10 mx-auto min-h-screen max-w-5xl px-4 py-8">
         {children}
      </div>
   );
};
