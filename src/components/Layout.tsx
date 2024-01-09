import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-opacity-80 bg-white">
      <Navbar
      />
      <div className="w-full overflow-auto overflow-y-auto pt-16 lg:pt-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;