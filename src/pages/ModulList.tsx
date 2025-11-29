// src/pages/ModulList.tsx
import { useNavigate } from 'react-router-dom';
import { modules } from '../data/modulData';

const ModulList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-emerald-800 mb-2">Modul Pembelajaran</h1>
        <p className="text-gray-600">Pilih topik dan mulai belajar bercocok tanam secara terstruktur.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((modul) => (
          <div key={modul.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
            <img src={modul.image} alt={modul.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  modul.level === 'Pemula' ? 'bg-green-100 text-green-700' : 
                  modul.level === 'Menengah' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                }`}>
                  {modul.level}
                </span>
                <span className="text-xs text-gray-500">⏱ {modul.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{modul.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{modul.description}</p>
              <button 
                onClick={() => navigate(`/modul/${modul.id}`)} 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Mulai Belajar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulList;