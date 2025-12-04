import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { modules } from '../data/modulData';

const ModulList = () => {
  const navigate = useNavigate();

  // STATE UNTUK FILTER
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedLevel, setSelectedLevel] = useState('Semua');

  // DATA KATEGORI (Sesuai Profil Tanaman Sighra)
  const categories = ['Semua', 'Tanaman Hias', 'Hortikultura', 'Tanaman Obat', 'Perkebunan'];
  const levels = ['Semua', 'Pemula', 'Menengah', 'Ahli'];

  // LOGIKA FILTERING
  const filteredModules = modules.filter((modul) => {
    const categoryMatch = selectedCategory === 'Semua' || modul.category === selectedCategory;
    const levelMatch = selectedLevel === 'Semua' || modul.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        
        {/* HEADER & JUDUL */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-emerald-800 mb-3">Modul Pembelajaran</h1>
          <p className="text-gray-600 text-lg">Pilih topik dan tingkatkan keahlian berkebun Anda.</p>
        </div>

        {/* --- BAGIAN FILTER (Updated) --- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Filter Kategori (Tombol Pill) */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filter Level (Dropdown) */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500">Tingkat Kesulitan:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 outline-none"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* --- HASIL FILTER (GRID MODUL) --- */}
        {filteredModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((modul) => (
              <div key={modul.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                
                {/* Gambar dengan Overlay Efek */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={modul.image} 
                    alt={modul.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      ⏱ {modul.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Badge Kategori & Level */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wide">
                      {modul.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${
                      modul.level === 'Pemula' ? 'bg-blue-100 text-blue-700' : 
                      modul.level === 'Menengah' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {modul.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {modul.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {modul.description}
                  </p>
                  
                  <button 
                    onClick={() => navigate(`/modul/${modul.id}`)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <span>Mulai Belajar</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Tampilan Jika Hasil Filter Kosong
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="text-6xl mb-4">🍃</div>
            <h3 className="text-xl font-bold text-gray-800">Tidak ada modul ditemukan</h3>
            <p className="text-gray-500 mt-2">Coba ganti filter kategori atau tingkat kesulitan.</p>
            <button 
              onClick={() => {setSelectedCategory('Semua'); setSelectedLevel('Semua');}}
              className="mt-6 text-emerald-600 font-bold hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ModulList;