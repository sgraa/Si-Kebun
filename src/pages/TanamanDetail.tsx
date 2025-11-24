import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, getPlantById, getRelatedPlants } from '../data/plantsData';
import PlantCard from '../components/PlantCard';
import type { Plant } from '../types/plant';

const TanamanDetail: React.FC = () => {
  const { category, plantId } = useParams<{ category: string; plantId: string }>();
  const [plant, setPlant] = useState<Plant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (plantId) {
        const foundPlant = getPlantById(plantId);
        if (foundPlant) {
          setPlant(foundPlant);
          setError(null);
        } else {
          setError('Tanaman tidak ditemukan');
        }
      } else {
        setError('ID tanaman tidak valid');
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [plantId]);

  const currentCategory = category ? categories.find(cat => cat.id === category) : null;
  const relatedPlants = plant ? getRelatedPlants(plant, 3) : [];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(plant?.name || '')}&background=e5e7eb&color=374151&size=800&bold=true`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'hard':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'Mudah';
      case 'medium':
        return 'Sedang';
      case 'hard':
        return 'Sulit';
      default:
        return 'Unknown';
    }
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'hias':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'hortikultura':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'obat':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'perkebunan':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse-minimal">
            <div className="skeleton-clean h-96 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="skeleton-clean h-64"></div>
              <div className="skeleton-clean h-64"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !plant) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="card max-w-md mx-auto p-8">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {error || 'Tanaman tidak ditemukan'}
              </h2>
              <p className="text-gray-600 mb-4">
                Maaf, tanaman yang Anda cari tidak tersedia.
              </p>
              <Link
                to={`/profil-tanaman${category ? `/${category}` : ''}`}
                className="btn btn-primary"
              >
                Kembali ke Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/profil-tanaman" className="text-gray-500 hover:text-gray-700">
            Profil Tanaman
          </Link>
          {currentCategory && (
            <>
              <span className="mx-2 text-gray-400">/</span>
              <Link
                to={`/profil-tanaman/${category}`}
                className="text-gray-500 hover:text-gray-700"
              >
                {currentCategory.name}
              </Link>
            </>
          )}
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{plant.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Plant Image */}
            <div className="aspect-video lg:aspect-auto bg-gray-100">
              <img
                src={plant.image}
                alt={plant.name}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Plant Info */}
            <div className="p-6 lg:p-8">
              <div className="mb-6">
                {/* Badges */}
                <div className="flex gap-2 mb-4">
                  {currentCategory && (
                    <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border ${getCategoryColor(plant.category)}`}>
                      <span className="mr-1">{currentCategory.icon}</span>
                      {currentCategory.name}
                    </span>
                  )}
                  <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border ${getDifficultyColor(plant.difficulty)}`}>
                    {getDifficultyLabel(plant.difficulty)}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {plant.name}
                </h1>
                <p className="text-lg text-gray-500 italic mb-4">
                  {plant.scientificName}
                </p>

                {/* Tags */}
                {plant.tags && plant.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {plant.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                    {plant.tags.length > 4 && (
                      <span className="text-xs text-gray-400">
                        +{plant.tags.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {plant.growthTime && (
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-900">Waktu Tumbuh</p>
                    <p className="text-sm font-semibold text-blue-600">{plant.growthTime}</p>
                  </div>
                )}
                {plant.size && (
                  <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-900">Ukuran</p>
                    <p className="text-sm font-semibold text-emerald-600">{plant.size}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Deskripsi</h3>
                <p className="text-gray-600 leading-normal">
                  {plant.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Care Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Benefits */}
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              Manfaat Tanaman
            </h3>
            <div className="space-y-3">
              {plant.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-2 h-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm leading-normal">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Care Tips */}
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              Tips Perawatan
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Penyiraman</h4>
                  <p className="text-gray-600 text-sm leading-normal">{plant.careTips.watering}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Cahaya</h4>
                  <p className="text-gray-600 text-sm leading-normal">{plant.careTips.sunlight}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Tanah</h4>
                  <p className="text-gray-600 text-sm leading-normal">{plant.careTips.soil}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Suhu</h4>
                  <p className="text-gray-600 text-sm leading-normal">{plant.careTips.temperature}</p>
                </div>
              </div>

              {plant.careTips.humidity && (
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Kelembaban</h4>
                    <p className="text-gray-600 text-sm leading-normal">{plant.careTips.humidity}</p>
                  </div>
                </div>
              )}

              {plant.careTips.fertilizer && (
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Pupuk</h4>
                    <p className="text-gray-600 text-sm leading-normal">{plant.careTips.fertilizer}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Plants */}
        {relatedPlants.length > 0 && (
          <div className="mb-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tanaman Serupa</h3>
              <p className="text-gray-600 text-sm">
                Temukan tanaman lain dengan karakteristik serupa
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPlants.map((relatedPlant) => (
                <PlantCard key={relatedPlant.id} plant={relatedPlant} />
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center">
          <Link
            to={`/profil-tanaman${category ? `/${category}` : ''}`}
            className="btn btn-secondary"
          >
            ← Kembali ke Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TanamanDetail;