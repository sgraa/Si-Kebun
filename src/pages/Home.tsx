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
      title: 'Modul Praktik',
      description: 'Simulasi belajar menanam interaktif dengan kuis',
      icon: '🎓',
      link: '/modul'
    },
    {
      title: 'Tutorial Berkebun',
      description: 'Panduan langkah demi langkah dari pemula hingga ahli',
      icon: '📚',
      link: '/tutorial'
    },
    {
      title: 'Rekomendasi Tanaman',
      description: 'Rekomendasi tanaman sesuai kondisi lingkungan Anda',
      icon: '💡',
      link: '/rekomendasi-tanaman'
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
      link: '/lokasi-supplier'
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
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            
            {/* --- LOGO UTAMA (SUDAH DIPERBESAR & TRANSPARAN) --- */}
            <div className="flex justify-center mb-6">
              <span className="text-7xl filter drop-shadow-sm transition-transform hover:scale-110 duration-300">
                🌿
              </span>
            </div>
            {/* -------------------------------------------------- */}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Si-Kebun
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Platform edukasi berkebun untuk pemula dan profesional
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/profil-tanaman"
                className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors"
              >
                Jelajahi Tanaman
              </Link>

              <Link
                to="/modul"
                className="inline-block bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
              >
                Mulai Belajar
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> 100% Gratis
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Expert Verified
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span> Community Driven
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

{/* Features Section - Background Gradasi Elegan */}
      <section className="bg-gradient-to-br from-gray-50 via-emerald-50/40 to-white relative overflow-hidden border-y border-emerald-100/50">
        
        {/* Hiasan Background Pudar (Agar tidak polos) */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fitur Si-Kebun
            </h2>
            <p className="text-gray-600">
              Semua yang Anda butuhkan untuk memulai perjalanan berkebun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 text-center border border-gray-100/50 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm group"
              >
                {/* Icon Tanpa Kotak (Sesuai Request Sebelumnya) */}
                <div className="flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 duration-300">
                  <span className="text-5xl filter drop-shadow-sm">{feature.icon}</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="text-emerald-600 text-sm font-bold hover:text-emerald-700 transition-colors inline-flex items-center"
                >
                  Pelajari lebih lanjut →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Hijau Solid) */}
      {/* CTA Section (Gradasi Hijau Elegan) */}
      <section className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 relative overflow-hidden">
  
        {/* Aksen Latar Belakang (Opsional: Agar tidak terlalu polos) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Konten Utama */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Memulai Perjalanan Berkebun?
          </h2>
          <p className="text-emerald-50 mb-8 text-lg">
            Bergabung dengan ribuan pecinta tanaman dan mulai budidaya impian Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/modul"
              className="inline-block px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Mulai Belajar Sekarang
            </Link>

            <Link
              to="/forum"
              className="inline-block px-8 py-3 text-white font-bold border-2 border-white rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Gabung Komunitas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;