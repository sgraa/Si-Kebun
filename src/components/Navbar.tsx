import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) 
      ? "text-emerald-600 font-bold" 
      : "text-gray-600 hover:text-emerald-600 font-medium transition-colors";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2">
          {/* ... (Kode Logo biarkan sama) ... */}
          <span className="text-xl font-bold text-gray-800 tracking-tight">Si-Kebun</span>
        </Link>

        {/* --- MENU TENGAH --- */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={isActive('/')}>Home</Link>
          
          <Link to="/profil-tanaman" className={isActive('/profil-tanaman')}>Profil Tanaman</Link>
          
          {/* Punya Affan (Biarkan/Placeholder) */}
          <Link to="/tutorial" className={isActive('/tutorial')}>Tutorial</Link>

          {/* --- PUNYA HARYO (BARU) --- */}
          <Link to="/modul" className={isActive('/modul')}>
            Modul Praktik
            <span className="ml-1 px-1.5 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full">New</span>
          </Link>
          {/* -------------------------- */}

          <Link to="/forum" className={isActive('/forum')}>Forum</Link>
        </div>

        {/* ... (Tombol Kanan Login biarkan sama) ... */}

      </div>
    </nav>
  );
};

export default Navbar;