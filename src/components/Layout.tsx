interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
   return <div className="bg-red-500 h-screen">{children}</div>;
};
