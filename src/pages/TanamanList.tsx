// src/pages/TanamanList.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import { fetchCategories, fetchPlants, type PlantCategory } from "../lib/strapi";
import type { Plant } from "../types/plant";

const TanamanList: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [categories, setCategories] = useState<PlantCategory[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);

  const categoryMap = useMemo(() => {
    const m = new Map<string, PlantCategory>();
    categories.forEach((c) => m.set(c.id, c));
    return m;
  }, [categories]);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setIsLoading(true);
        setError(null);

        const [cats, list] = await Promise.all([
          fetchCategories(),
          fetchPlants({
            categoryId: category || undefined,
            search: searchQuery || undefined,
            pageSize: 500,
          }),
        ]);

        if (!mounted) return;

        // plantCount dihitung dari list yang tampil saat ini (cukup untuk UI kamu).
        const counts: Record<string, number> = {};
        list.forEach((p) => {
          if (!p.category) return;
          counts[p.category] = (counts[p.category] || 0) + 1;
        });

        setCategories(
          cats.map((c) => ({
            ...c,
            plantCount: counts[c.id] ?? c.plantCount,
          }))
        );

        setPlants(list);
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message || "Gagal memuat data dari server.");
      } finally {
        if (!mounted) return;
        setIsLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [category, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const currentCategory = category ? categoryMap.get(category) ?? null : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse-minimal">
            <div className="skeleton-clean h-48 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-clean h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="card max-w-md mx-auto p-8">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{error}</h2>
              <p className="text-gray-600 mb-4">Silakan periksa koneksi Anda dan coba lagi.</p>
              <button onClick={() => window.location.reload()} className="btn btn-primary">
                Muat Ulang
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {category && currentCategory && (
          <div className="mb-8">
            <div className="flex items-center mb-4 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link to="/profil-tanaman" className="text-gray-500 hover:text-gray-700">
                Profil Tanaman
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{currentCategory.name}</span>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">{currentCategory.icon}</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{currentCategory.name}</h1>
                    <p className="text-gray-600">{currentCategory.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-600">
                    {currentCategory.plantCount ?? plants.length}
                  </div>
                  <div className="text-sm text-gray-500">Jenis Tanaman</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!category && (
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 font-medium">Profil Tanaman</span>
            </div>
          </div>
        )}

        {!category && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Kategori Tanaman</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/profil-tanaman/${cat.id}`} className="card card-interactive p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">{cat.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                  <div className="text-emerald-600 font-medium text-sm">
                    {(cat.plantCount ?? 0) > 0 ? `${cat.plantCount} jenis tanaman` : "Lihat tanaman"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari tanaman..."
                className="input pl-10 pr-10"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {plants.length === 0 ? (
          <div className="card p-10 text-center text-gray-600">Tidak ada tanaman yang ditemukan.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((p) => (
              <PlantCard key={p.id} plant={p} category={categoryMap.get(p.category) ?? null} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TanamanList;
