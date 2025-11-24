import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TanamanList from './pages/TanamanList';
import TanamanDetail from './pages/TanamanDetail';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
        {/* Navigation Header - Modern Design */}
        <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Link to="/" className="flex items-center space-x-2 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">🌿</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Si-Kebun
                    </h1>
                  </div>
                  <div className="sm:hidden">
                    <h1 className="text-xl font-bold text-emerald-600">Si-Kebun</h1>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="relative text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 group"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-emerald-50 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                </Link>
                <Link
                  to="/profil-tanaman"
                  className="relative text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 group"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-1">🌿</span>
                    Profil Tanaman
                  </span>
                  <div className="absolute inset-0 bg-emerald-50 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                </Link>
              </nav>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari tanaman..."
                      className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-emerald-400 focus:bg-white transition-all duration-200"
                    />
                    <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* User Menu */}
                <div className="hidden sm:block">
                  <button className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-100 bg-white">
                <div className="px-4 py-3 space-y-2">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1zm-6 0h6" />
                      </svg>
                      Home
                    </span>
                  </Link>
                  <Link
                    to="/profil-tanaman"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <span className="mr-2">🌿</span>
                      Profil Tanaman
                    </span>
                  </Link>
                </div>

                {/* Mobile Search */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari tanaman..."
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-emerald-400 focus:bg-white transition-all duration-200"
                    />
                    <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil-tanaman" element={<TanamanList />} />
            <Route path="/profil-tanaman/:category" element={<TanamanList />} />
            <Route path="/profil-tanaman/:category/:plantId" element={<TanamanDetail />} />

            {/* 404 Route */}
            <Route
              path="*"
              element={
                <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                  <div className="bg-white rounded-2xl shadow-xl p-12">
                    <div className="text-emerald-500 mb-6">
                      <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-3v6m5.657-5.657a8 8 0 111.414 1.414L6.343 20.485a8 8 0 01-1.414-1.414l12.728-12.728z" />
                      </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      Halaman Tidak Ditemukan
                    </h1>
                    <p className="text-gray-600 mb-8 text-lg">
                      Maaf, halaman yang Anda cari tidak tersedia di Si-Kebun.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Home
                      </Link>
                      <Link
                        to="/profil-tanaman"
                        className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 font-bold rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <span className="mr-2">🌿</span>
                        Jelajahi Tanaman
                      </Link>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer - Modern Design */}
        <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Newsletter Section */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  🌱 Dapatkan Tips Berkebun Gratis
                </h3>
                <p className="text-emerald-200 mb-6">
                  Bergabung dengan komunitas 1000+ pecinta tanaman dan dapatkan panduan eksklusif setiap minggu
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="px-6 py-3 bg-white bg-opacity-20 border border-emerald-400 rounded-full text-white placeholder-emerald-300 focus:outline-none focus:bg-opacity-30 transition-all duration-200"
                  />
                  <button className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Berlangganan
                  </button>
                </div>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* About */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">🌿</span>
                  </div>
                  <h4 className="text-xl font-bold">Si-Kebun</h4>
                </div>
                <p className="text-emerald-300 mb-4 leading-relaxed">
                  Platform edukasi berkebun terlengkap untuk para pecinta tanaman Indonesia.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.491 1.06-1.168l-2.778 12.745 4.444-4.441 7.111-7.11 12.748-2.777z"/>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12"/>
                    </svg>
                  </a>
                  <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-7.547H8.29zM11.75 8.75H9V16h2.75v-7.25z"/>
                      <path d="M12 2.252A8.014 8.014 0 0022 10h2.748A9.746 9.746 0 0112 2.252z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-6">Menu Cepat</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">🏠</span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/profil-tanaman" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">🌿</span>
                      Profil Tanaman
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorial" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">📚</span>
                      Tutorial
                    </Link>
                  </li>
                  <li>
                    <Link to="/forum" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">💬</span>
                      Forum
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-lg font-bold mb-6">Kategori</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/profil-tanaman/hias" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">🌿</span>
                      Tanaman Hias
                    </Link>
                  </li>
                  <li>
                    <Link to="/profil-tanaman/hortikultura" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">🥬</span>
                      Hortikultura
                    </Link>
                  </li>
                  <li>
                    <Link to="/profil-tanaman/obat" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">🌱</span>
                      Tanaman Obat
                    </Link>
                  </li>
                  <li>
                    <Link to="/profil-tanaman/perkebunan" className="text-emerald-300 hover:text-white transition-colors duration-200 flex items-center">
                      <span className="mr-2">🌾</span>
                      Perkebunan
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
                <ul className="space-y-3 text-emerald-300">
                  <li className="flex items-center">
                    <span className="mr-2">📧</span>
                    info@sikebun.id
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📱</span>
                    +62 812-3456-789
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    Jakarta, Indonesia
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-emerald-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-emerald-400 text-sm mb-4 md:mb-0">
                  &copy; {new Date().getFullYear()} Si-Kebun. Dibangun dengan ❤️ untuk para pecinta tanaman di Indonesia.
                </div>
                <div className="flex space-x-6">
                  <Link to="/privacy" className="text-emerald-400 hover:text-white transition-colors duration-200 text-sm">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-emerald-400 hover:text-white transition-colors duration-200 text-sm">
                    Terms of Service
                  </Link>
                  <Link to="/sitemap" className="text-emerald-400 hover:text-white transition-colors duration-200 text-sm">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;