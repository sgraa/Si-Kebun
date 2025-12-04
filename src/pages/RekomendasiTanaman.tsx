import React, { useState } from "react";
import { rekomendasiTanaman } from "../data/tanamanRekomendasi"; 

export default function RekomendasiTanaman() {
  const [jenis, setJenis] = useState("");
  const [geografis, setGeografis] = useState("");
  const [media, setMedia] = useState("");

  const hasil = rekomendasiTanaman.filter((t) =>
    (jenis ? t.jenis === jenis : true) &&
    (geografis ? t.geografis.includes(geografis as "Pegunungan" | "Urban" | "Pantai") : true) &&
    (media ? t.mediaTanam.includes(media as "Tanah" | "Hidroponik" | "Pot" | "Sawah") : true)
  );

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Rekomendasi Menanam, Pilih Kondisimu</h1>

      {/* Form Input */}
      <div className="grid gap-4 max-w-lg bg-white shadow-md rounded p-5 mb-6 mx-auto">

        {/* Jenis Tanaman */}
        <div>
          {/* <label className="font-semibold">Jenis Tanaman</label> */}
          <select
            className="w-full border p-2 rounded"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <option value="">Produktif/Hias?</option>
            <option value="Produktif">Produktif</option>
            <option value="Hias">Hias</option>
          </select>
        </div>

        {/* Geografis */}
        <div>
          {/* <label className="font-semibold">Kondisi Geografis</label> */}
          <select
            className="w-full border p-2 rounded"
            value={geografis}
            onChange={(e) => setGeografis(e.target.value)}
          >
            <option value="">Lokasimu?</option>
            <option value="Pegunungan">Pegunungan</option>
            <option value="Urban">Urban/Kota</option>
            <option value="Pantai">Dekat Pantai</option>
          </select>
        </div>

        {/* Media Tanam */}
        <div>
          {/* <label className="font-semibold">Media Tanam</label> */}
          <select
            className="w-full border p-2 rounded"
            value={media}
            onChange={(e) => setMedia(e.target.value)}
          >
            <option value="">Media Tanamnya?</option>
            <option value="Tanah">Tanah</option>
            <option value="Hidroponik">Hidroponik</option>
            <option value="Pot">Pot</option>
            <option value="Sawah">Sawah</option>
          </select>
        </div>
      </div>

      {/* Hasil */}
      <h2 className="text-xl font-semibold mb-3 text-center">Hasil Rekomendasi</h2>
      {hasil.length === 0 ? (
        <p className="text-gray-600">Tidak ada tanaman cocok dengan kriteria tersebut.</p>
      ) : (
        <div className="grid gap-6 max-w-3xl mx-auto">
  {hasil.map((t, i) => (
    <div 
      key={i}
      className="p-4 rounded-2xl shadow-lg bg-gradient-to-br from-[#AED1BC] to-[#00D18D] flex gap-4"
    >
      
      {/* Bagian Kiri = teks detail */}
      <div className="flex-1">
        <h3 className="font-bold text-lg">{t.nama}</h3>
        <p className="text-sm"><b>Jenis:</b> {t.jenis}</p>
        <p className="text-sm"><b>Lokasi:</b> {t.geografis.join(", ")}</p>
        <p className="text-sm"><b>Media:</b> {t.mediaTanam}</p>

        <p className="mt-2 text-sm opacity-90">{t.deskripsi}</p>
      </div>

      {/* Bagian kanan = gambar + tombol */}
      <div className="flex flex-col items-center gap-2">
        
        <img
          src={t.gambar}
          alt={t.nama}
          className="w-32 h-32 object-cover rounded-lg shadow-md"
        />

        {/* Tombol Pembelian */}
        <a 
          href={t.link} 
          target="_blank"
          className="w-32 bg-red-500 hover:bg-orange-600 transition text-white font-semibold p-2 rounded-lg flex items-center justify-center gap-2"
        >
          🛒 Pembelian
        </a>

        {/* Tombol Modul */}
        <a 
          href={t.linkModul} 
          target="_blank"
          className="w-32 bg-blue-500 hover:bg-blue-600 transition text-white font-semibold p-2 rounded-lg flex items-center justify-center"
        >
          📄 Modul
        </a>
      </div>

    </div>
  ))}
</div>



      )}
      
    </div>
  );
}
