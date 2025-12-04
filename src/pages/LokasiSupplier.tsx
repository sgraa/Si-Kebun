import { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import { lokasiToko } from "../data/lokasiToko";

export default function LokasiToko() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const [selected, setSelected] = useState<any>(null);
  const [filterKota, setFilterKota] = useState("Semua");

  const filteredToko = filterKota === "Semua"
    ? lokasiToko
    : lokasiToko.filter(t => t.Kota === filterKota);

  if (!isLoaded) return <p className="text-center mt-6">Loading map...</p>;

  return (
    <div className="flex h-screen overflow-hidden">

      {/* ================= LEFT SIDEBAR ================= */}
      <div className="w-1/3 md:w-1/4 bg-gray-100 border-r p-4 overflow-y-auto">

        {/* Filter Kota */}
        <h2 className="text-xl font-semibold mb-2">Filter Kota</h2>
        <select
          onChange={(e) => setFilterKota(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="Semua">Semua Kota</option>
          <option value="Sidoarjo">Sidoarjo</option>
          <option value="Surabaya">Surabaya</option>
        </select>

        <h2 className="text-xl font-semibold mb-2">Daftar Toko</h2>

        {/* LIST TOKO */}
        <div className="space-y-3">
          {filteredToko.map(toko => (
            <div
              key={toko.id}
              className="p-3 rounded cursor-pointer bg-white hover:bg-green-100 transition"
              onClick={() => setSelected(toko)}
            >
              <h3 className="font-bold">{toko.nama}</h3>
              <p className="text-sm text-gray-600">{toko.alamat}</p>
              <span className="text-xs px-2 py-1 bg-green-200 rounded">
                {toko.Kota}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT MAP ================= */}
      <div className="flex-1">
        <GoogleMap
          zoom={11}
          center={{ lat: -7.350, lng: 112.730 }}
          mapContainerClassName="w-full h-full"
        >
          {filteredToko.map(toko => (
            <Marker
              key={toko.id}
              position={{ lat: toko.lat, lng: toko.lng }}
              onClick={() => setSelected(toko)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div className="p-2">
                <h3 className="font-bold">{selected.nama}</h3>
                <p className="text-sm">{selected.alamat}</p>
                <p className="text-sm mb-1">Produk: {selected.produk.join(", ")}</p>
                {selected.maps && (
                  <a href={selected.maps} target="_blank" className="text-blue-600 underline text-sm">
                    Buka Google Maps
                  </a>
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

    </div>
  );
}
