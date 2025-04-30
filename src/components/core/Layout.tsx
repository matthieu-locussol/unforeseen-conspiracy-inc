interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
   return <div className="mx-auto min-h-screen max-w-4xl py-8">{children}</div>;
};
