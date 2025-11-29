// src/app/layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // <--- IMPORT INI PENTING

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Pasang Navbar di paling atas */}
      <Navbar /> 

      {/* Outlet adalah tempat halaman (Home, Modul, Profil) berganti-ganti */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer bisa ditaruh di sini nanti */}
      <footer className="bg-gray-800 text-white py-8 text-center mt-auto">
        <p>© 2025 Si-Kebun Indonesia</p>
      </footer>
    </div>
  );
};

export default Layout;