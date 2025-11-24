export interface CareTips {
  watering: string;
  sunlight: string;
  soil: string;
  temperature: string;
  humidity?: string;
  fertilizer?: string;
}

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  category: 'hias' | 'hortikultura' | 'obat' | 'perkebunan';
  description: string;
  shortDescription: string;
  image: string;
  benefits: string[];
  careTips: CareTips;
  difficulty: 'easy' | 'medium' | 'hard';
  tags?: string[];
  growthTime?: string;
  size?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  plantCount: number;
  color: string;
}

export interface PlantFilter {
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  search?: string;
}

export type PlantCategory = Plant['category'];