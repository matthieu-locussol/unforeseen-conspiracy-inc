interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
   return <div className="relative z-10 mx-auto min-h-screen max-w-4xl py-8">{children}</div>;
};
