import React, { ReactNode } from 'react';
import Navbar from './Navbar'; // Import your Navbar component

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-white bg-opacity-80 overflow-hidden">
      <Navbar
      />
      <div className="w-full h-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;