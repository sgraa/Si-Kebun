export interface CareTips {
  watering: string;
  sunlight: string;
  soil: string;
  temperature: string;
  humidity?: string;
  fertilizer?: string;
}

/**
 * Kalau kamu benar-benar mengunci kategori hanya 4 ini,
 * kamu boleh pakai union ini.
 * Tapi kalau di Strapi bisa bertambah, ganti jadi: export type PlantCategory = string;
 */
export type PlantCategory = string;

export interface Plant {
  id: string; // plantID (UID Strapi)
  name: string;
  scientificName?: string; // di Strapi boleh kosong
  category: PlantCategory; // plantCategoryID (UID Strapi)

  description: string; // long text
  shortDescription?: string;

  image: string; // imageUrl (text)

  benefits: string[];
  careTips: CareTips;

  difficulty: 'easy' | 'medium' | 'hard';

  tags?: string[];
  growthTime?: string;
  size?: string;
}

/**
 * Ini representasi plant-category dari Strapi.
 * plantCount opsional karena bisa dihitung dari query plants (bukan field Strapi).
 */
export interface Category {
  id: PlantCategory; // plantCategoryID (UID)
  name: string;
  description?: string;
  icon?: string;
  plantCount?: number;
  color?: string;
}

export interface PlantFilter {
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  search?: string;
}
