import { useState } from "react";
import { tutorialVideos } from "../data/tutorialVideos";

export default function TutorialBerkebun() {
  const categories = ["Semua", "Tanaman Hias", "Hortikultura", "Tanaman Obat", "Perkebunan"];

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredVideos = tutorialVideos.filter((v) => {
    const matchCategory = selectedCategory === "Semua" || v.category === selectedCategory;
    const q = search.toLowerCase();
    const matchSearch =
      v.title.toLowerCase().includes(q) || v.description.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span className="hover:text-emerald-600 cursor-pointer">Home</span> /
        <span className="ml-1 text-gray-700 font-medium"> Tutorial Berkebun</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
         Tutorial Berkebun
        </h1>
      <p className="text-gray-600 text-lg mx-auto whitespace-nowrap">
        Video tutorial berkebun lengkap untuk berbagai jenis tanaman. Praktis, jelas, dan siap dipraktikkan!
    </p>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Sidebar Kategori */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Kategori Tanaman</h2>

          <div className="space-y-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 rounded-lg border transition 
                  ${
                    selectedCategory === cat
                      ? "bg-emerald-100 border-emerald-400 text-emerald-700 font-medium"
                      : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: SEARCH + VIDEO LIST */}
        <div className="md:col-span-3 space-y-8">

          {/* Search Bar DIPINDAH KE SINI */}
          <div className="flex justify-start">
            <div className="relative w-full md:w-[420px]">
              <input
                type="text"
                placeholder="Cari tutorial..."
                className="w-full px-5 py-2.5 pl-12 bg-gray-50 border border-gray-200 rounded-xl shadow-sm
                           text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                className="absolute left-4 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-10">
            {filteredVideos.length === 0 && (
              <p className="text-gray-500 text-center py-10">
                Tidak ada tutorial ditemukan.
              </p>
            )}

            {filteredVideos.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                {/* Video Player */}
                <div className="aspect-video bg-gray-200">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{v.title}</h3>
                  <p className="text-gray-600 mt-2">{v.description}</p>

                  <span className="inline-block mt-4 px-3 py-1 text-sm rounded-full 
                                 bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {v.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
