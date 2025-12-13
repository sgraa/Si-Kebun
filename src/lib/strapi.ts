// src/lib/strapi.ts
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

type StrapiListResponse<T> = { data: T[]; meta: any };

async function strapiFetch<T>(path: string): Promise<T> {
  const url = `${STRAPI_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }
  return (await res.json()) as T;
}

function toAbsoluteUrl(url?: string | null) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

function normalizeStringArray(value: any): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string") return [value];
  return [];
}

// ===== Flat Strapi shape (sesuai JSON kamu) =====
type StrapiPlantCategoryFlat = {
  id: number;
  plantCategoryID: string; // UID
  name: string;
  description?: string;
  icon?: string;
  color?: string;
};

type StrapiPlantFlat = {
  id: number; // internal numeric
  plantID: string; // UID
  name: string;
  scientificName?: string;
  shortDescription?: string;
  description?: string | null;
  imageUrl?: string | null;
  benefits?: any;
  careTips?: any;
  difficulty?: "easy" | "medium" | "hard";
  tags?: any;
  growthTime?: string;
  size?: string;
  plant_category?: StrapiPlantCategoryFlat | null;
};

// ===== Frontend types (dipakai komponen kamu) =====
export type PlantCategory = {
  id: string; // plantCategoryID
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  plantCount?: number;
};

export type Plant = {
  id: string; // plantID
  name: string;
  scientificName?: string;
  shortDescription?: string;
  description: string;
  image: string;

  benefits: string[];
  careTips: {
    watering?: string;
    sunlight?: string;
    soil?: string;
    temperature?: string;
    humidity?: string;
    fertilizer?: string;
  };

  difficulty: "easy" | "medium" | "hard";
  tags: string[];

  growthTime?: string;
  size?: string;

  category: string; // plantCategoryID
};

function mapCategoryFlat(c: StrapiPlantCategoryFlat): PlantCategory {
  return {
    id: c.plantCategoryID,
    name: c.name,
    description: c.description,
    icon: c.icon,
    color: c.color,
  };
}

function mapPlantFlat(p: StrapiPlantFlat): Plant {
  return {
    id: p.plantID,
    name: p.name,
    scientificName: p.scientificName,
    shortDescription: p.shortDescription,
    description: typeof p.description === "string" ? p.description : "",
    image: toAbsoluteUrl(p.imageUrl),

    benefits: normalizeStringArray(p.benefits),
    careTips: (p.careTips ?? {}) as Plant["careTips"],

    difficulty: p.difficulty ?? "easy",
    tags: normalizeStringArray(p.tags),

    growthTime: p.growthTime,
    size: p.size,

    category: p.plant_category?.plantCategoryID ?? "",
  };
}

// ===== API =====
export async function fetchCategories(): Promise<PlantCategory[]> {
  const res = await strapiFetch<StrapiListResponse<StrapiPlantCategoryFlat>>(
    "/api/plant-categories?pagination[pageSize]=100"
  );
  return (res.data ?? []).filter(Boolean).map(mapCategoryFlat);
}

export async function fetchPlants(params?: {
  categoryId?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}): Promise<Plant[]> {
  const page = params?.page ?? 1;
  const pageSize = params?.pageSize ?? 200;

  const q: string[] = [];
  q.push(`pagination[page]=${page}`);
  q.push(`pagination[pageSize]=${pageSize}`);
  q.push(`populate=plant_category`);

  if (params?.categoryId) {
    q.push(
      `filters[plant_category][plantCategoryID][$eq]=${encodeURIComponent(params.categoryId)}`
    );
  }

  if (params?.search?.trim()) {
    const s = encodeURIComponent(params.search.trim());
    q.push(`filters[$or][0][name][$containsi]=${s}`);
    q.push(`filters[$or][1][scientificName][$containsi]=${s}`);
    q.push(`filters[$or][2][shortDescription][$containsi]=${s}`);
    q.push(`filters[$or][3][description][$containsi]=${s}`);
  }

  const res = await strapiFetch<StrapiListResponse<StrapiPlantFlat>>(`/api/plants?${q.join("&")}`);
  return (res.data ?? []).filter(Boolean).map(mapPlantFlat);
}

export async function fetchPlantByUID(plantId: string): Promise<Plant | null> {
  const q = [
    `filters[plantID][$eq]=${encodeURIComponent(plantId)}`,
    `populate=plant_category`,
    `pagination[pageSize]=1`,
  ].join("&");

  const res = await strapiFetch<StrapiListResponse<StrapiPlantFlat>>(`/api/plants?${q}`);
  const first = res.data?.[0];
  return first ? mapPlantFlat(first) : null;
}
