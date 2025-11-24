import React from 'react';
import { Link } from 'react-router-dom';
import type { Plant } from '../types/plant';
import { categories } from '../data/plantsData';

interface PlantCardProps {
  plant: Plant;
  className?: string;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant, className = '' }) => {
  const category = categories.find(cat => cat.id === plant.category);

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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(plant.name)}&background=f3f4f6&color=374151&size=400&bold=true`;
  };

  return (
    <Link
      to={`/profil-tanaman/${plant.category}/${plant.id}`}
      className={`block ${className}`}
    >
      <div className="card card-interactive group">
        {/* Image */}
        <div className="aspect-video bg-gray-100 overflow-hidden">
          <img
            src={plant.image}
            alt={plant.name}
            onError={handleImageError}
            className="w-full h-full object-cover transition-clean group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header with badges */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate leading-tight group-hover:text-primary transition-clean">
                {plant.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {plant.scientificName}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex gap-2 mb-4">
            {category && (
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(plant.category)}`}>
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </span>
            )}
            <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(plant.difficulty)}`}>
              {getDifficultyLabel(plant.difficulty)}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-normal">
            {plant.shortDescription}
          </p>

          {/* Tags */}
          {plant.tags && plant.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {plant.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
              {plant.tags.length > 2 && (
                <span className="text-xs text-gray-400">
                  +{plant.tags.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Meta info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
            {plant.growthTime && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {plant.growthTime}
              </span>
            )}
            {plant.size && (
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                {plant.size}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;