import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import AdminNavbar from './AdminNavbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-gray-50">
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <main className={isAdminRoute ? 'ml-0 lg:ml-64' : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
