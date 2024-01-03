import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6">
        <Navbar />
      </div>
      <div className="w-5/6 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;