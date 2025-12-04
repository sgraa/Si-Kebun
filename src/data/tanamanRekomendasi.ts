export interface RekomendasiTanaman {
  nama: string;
  jenis: "Produktif" | "Hias";
  geografis: ("Pegunungan" | "Urban" | "Pantai" | ", ")[];
  mediaTanam: ("Tanah" | "Hidroponik" | "Pot" | "Sawah" | ", ")[];
  deskripsi: string;
  link: string;
  gambar: string;
  linkModul: string;
}

export const rekomendasiTanaman: RekomendasiTanaman[] = [
  {
    nama: "Tomat Ceri",
    jenis: "Produktif",
    geografis: ["Pegunungan"],
    mediaTanam: ["Tanah", ", ","Pot"],
    deskripsi: "Cocok di dataran tinggi dengan suhu sejuk dan sinar matahari cukup.",
    link: "https://shopee.com/tomat",
    gambar: "https://cdn.pixabay.com/photo/2021/12/02/07/12/cherry-6839826_1280.jpg",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Cabai Rawit",
    jenis: "Produktif",
    geografis: ["Urban"],
    mediaTanam: ["Pot"],
    deskripsi: "Tumbuh baik di pekarangan rumah dengan cahaya matahari langsung.",
    link: "https://shopee.com/cabai",
    gambar: "https://cdn.pixabay.com/photo/2017/10/03/01/39/chile-2811063_960_720.jpg",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Selada",
    jenis: "Produktif",
    geografis: ["Urban",", ", "Pantai"],
    mediaTanam: ["Hidroponik"],
    deskripsi: "Tanaman cepat panen dan ideal untuk hidroponik.",
    link: "https://shopee.com/selada",
    gambar: "https://media.istockphoto.com/id/638150504/id/foto/close-up-tangan-memegang-tanaman-hidroponik.jpg?s=2048x2048&w=is&k=20&c=_KNfmv1xu4VIDmWOpwwAsQEm-JGS00O0O4U06HmzcFg=",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Kangkung",
    jenis: "Produktif",
    geografis: ["Urban"],
    mediaTanam: ["Hidroponik"],
    deskripsi: "Tumbuh cepat dan perawatannya sederhana, cocok untuk pemula.",
    link: "https://shopee.com/kangkung",
    gambar: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01h44yrkhwvcgx1bpeaythjp53.jpg",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Pak Choi",
    jenis: "Produktif",
    geografis: ["Urban"],
    mediaTanam: ["Hidroponik"],
    deskripsi: "Sayur favorit hidroponik dengan masa panen 25–30 hari.",
    link: "https://shopee.com/pakchoi",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Alpukat",
    jenis: "Produktif",
    geografis: ["Pegunungan"],
    mediaTanam: ["Tanah"],
    deskripsi: "Ideal di dataran tinggi dengan udara sejuk dan tanah gembur.",
    link: "https://shopee.com/alpukat",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Stroberi",
    jenis: "Produktif",
    geografis: ["Pegunungan"],
    mediaTanam: ["Pot"],
    deskripsi: "Suka suhu dingin dan cocok ditanam dalam pot gantung.",
    link: "https://shopee.com/stroberi",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Teh",
    jenis: "Produktif",
    geografis: ["Pegunungan"],
    mediaTanam: ["Tanah"],
    deskripsi: "Membutuhkan curah hujan cukup dan dataran tinggi.",
    link: "https://shopee.com/teh",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Padi",
    jenis: "Produktif",
    geografis: ["Urban"],
    mediaTanam: ["Sawah"],
    deskripsi: "Tanaman pokok Indonesia dengan kebutuhan air tinggi.",
    link: "https://shopee.com/padi",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Semangka",
    jenis: "Produktif",
    geografis: ["Pantai"],
    mediaTanam: ["Tanah"],
    deskripsi: "Sangat cocok di dataran rendah dengan matahari intens.",
    link: "https://shopee.com/semangka",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Kelapa",
    jenis: "Produktif",
    geografis: ["Pantai"],
    mediaTanam: ["Tanah"],
    deskripsi: "Tahan salinitas, ideal di kawasan pantai.",
    link: "https://shopee.com/kelapa",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Sorgum",
    jenis: "Produktif",
    geografis: ["Pantai"],
    mediaTanam: ["Tanah"],
    deskripsi: "Alternatif pangan utama yang tahan kekeringan.",
    link: "https://shopee.com/sorgum",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Kelor",
    jenis: "Produktif",
    geografis: ["Pantai"],
    mediaTanam: ["Tanah"],
    deskripsi: "Kaya nutrisi dan tumbuh baik di daerah panas.",
    link: "https://shopee.com/kelor",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Lavender",
    jenis: "Hias",
    geografis: ["Pegunungan"],
    mediaTanam: ["Pot"],
    deskripsi: "Menyukai udara dingin, beraroma wangi pengusir nyamuk alami.",
    link: "https://shopee.com/lavender",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Kaktus",
    jenis: "Hias",
    geografis: ["Pantai"],
    mediaTanam: ["Pot"],
    deskripsi: "Tahan panas & minim air, perawatan sangat mudah.",
    link: "https://shopee.com/kaktus",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Adenium",
    jenis: "Hias",
    geografis: ["Pantai"],
    mediaTanam: ["Pot"],
    deskripsi: "Bunga desert rose yang cocok pada lingkungan kering.",
    link: "https://shopee.com/adenium",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Anggrek",
    jenis: "Hias",
    geografis: ["Urban"],
    mediaTanam: ["Pot"],
    deskripsi: "Tanaman elegan, cocok indoor dengan kelembaban stabil.",
    link: "https://shopee.com/anggrek",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Peace Lily",
    jenis: "Hias",
    geografis: ["Urban"],
    mediaTanam: ["Pot"],
    deskripsi: "Populer sebagai tanaman indoor pembersih udara.",
    link: "https://shopee.com/peacelily",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Monstera",
    jenis: "Hias",
    geografis: ["Urban"],
    mediaTanam: ["Pot"],
    deskripsi: "Ikonik dengan bentuk daun berlubang, cocok untuk indoor.",
    link: "https://shopee.com/monstera",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Sirih Gading",
    jenis: "Hias",
    geografis: ["Urban"],
    mediaTanam: ["Pot"],
    deskripsi: "Mudah tumbuh bahkan dalam air, bagus untuk rak & dinding.",
    link: "https://shopee.com/sirihgading",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Hortensia",
    jenis: "Hias",
    geografis: ["Pegunungan"],
    mediaTanam: ["Pot"],
    deskripsi: "Warna bunga dapat berubah sesuai pH tanah.",
    link: "https://shopee.com/hortensia",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Bunga Matahari",
    jenis: "Hias",
    geografis: ["Pantai"],
    mediaTanam: ["Tanah"],
    deskripsi: "Menyukai tempat terbuka dengan cahaya penuh.",
    link: "https://shopee.com/sunflower",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Jeruk Nipis",
    jenis: "Produktif",
    geografis: ["Pantai"],
    mediaTanam: ["Tanah"],
    deskripsi: "Adaptif di dataran rendah dan panas.",
    link: "https://shopee.com/jeruknipis",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Bawang Merah",
    jenis: "Produktif",
    geografis: ["Pantai"],
    mediaTanam: ["Tanah"],
    deskripsi: "Cocok di dataran rendah dengan intensitas panas tinggi.",
    link: "https://shopee.com/bawangmerah",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  },
  {
    nama: "Mint",
    jenis: "Hias",
    geografis: ["Urban"],
    mediaTanam: ["Pot"],
    deskripsi: "Aromatik segar, cocok untuk teh dan garnish.",
    link: "https://shopee.com/mint",
    gambar: "https://via.placeholder.com/200?text=Tomat",
    linkModul : "http://localhost:5173/modul/tomat"
  }
];

