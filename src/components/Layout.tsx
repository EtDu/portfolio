import React, { ReactNode } from 'react';
import Navbar from './Navbar'; // Import your Navbar component

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-opacity-80">
      <Navbar
      />
      <div className="w-full overflow-auto overflow-y-auto pt-20 lg:pt-12 lg:pt-0 bg-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;