import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      title: 'Profil Tanaman',
      description: 'Database lengkap tanaman dengan informasi perawatan dan manfaat',
      icon: '🌿',
      link: '/profil-tanaman'
    },
    {
      title: 'Tutorial Berkebun',
      description: 'Panduan langkah demi langkah dari pemula hingga ahli',
      icon: '📚',
      link: '/tutorial'
    },
    {
      title: 'Forum Komunitas',
      description: 'Bergabung dengan ribuan pecinta tanaman dan berbagi pengalaman',
      icon: '💬',
      link: '/forum'
    },
    {
      title: 'Toko & Supplier',
      description: 'Temukan perlengkapan berkualitas dan supplier terpercaya',
      icon: '🛒',
      link: '/toko'
    },
    {
      title: 'Modul Praktik',  // INI PUNYA ANDA
      description: 'Simulasi belajar menanam interaktif dengan kuis',
      icon: '🎓',
      link: '/modul'
    }
  ];

  const stats = [
    { label: 'Jenis Tanaman', value: '19+' },
    { label: 'Kategori', value: '4' },
    { label: 'Tutorial', value: '50+' },
    { label: 'Anggota', value: '1000+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - NodeBB Clean Design */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            {/* Simple Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
            </div>

            {/* Clean Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Si-Kebun
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Platform edukasi berkebun untuk pemula dan profesional
            </p>

            {/* Clean CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/profil-tanaman"
                className="btn btn-primary px-8 py-3 text-base"
              >
                Jelajahi Tanaman
              </Link>

              <Link
                to="/tutorial"
                className="btn btn-secondary px-8 py-3 text-base"
              >
                Mulai Belajar
              </Link>
            </div>

            {/* Simple Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Gratis
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539 1.118l1.07 3.292a1 1 0 00.364 1.118L2.98 8.72c-.783.57-.38 1.81.588 1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Expert Verified
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Community Driven
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - NodeBB Style */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fitur Si-Kebun
            </h2>
            <p className="text-gray-600">
              Semua yang Anda butuhkan untuk memulai perjalanan berkebun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card card-interactive p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="text-primary text-sm font-medium hover:text-primary-hover transition-colors"
                >
                  Pelajari lebih lanjut →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section className="bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Memulai Perjalanan Berkebun?
          </h2>
          <p className="text-primary-light mb-8 text-lg">
            Bergabung dengan ribuan pecinta tanaman dan mulai budidaya impian Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/profil-tanaman"
              className="btn bg-white text-primary hover:bg-gray-50 px-8 py-3 text-base"
            >
              Mulai Sekarang
            </Link>

            <Link
              to="/forum"
              className="btn bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10 px-8 py-3 text-base"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;