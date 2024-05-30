import { ReactNode } from "react";

import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
