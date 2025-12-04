// src/data/modulData.ts

export interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ModulItem {
  id: string;
  title: string;
  description: string;
  // Menambahkan properti kategori agar fitur filtering berjalan lancar
  category: 'Tanaman Hias' | 'Hortikultura' | 'Tanaman Obat' | 'Perkebunan';
  level: 'Pemula' | 'Menengah' | 'Ahli';
  duration: string;
  image: string; // Gambar Cover Modul
  materi: { title: string; content: string; image: string }[]; 
  quiz: QuizItem[]; 
}

export const modules: ModulItem[] = [
  // =========================================
  // 1. CABAI RAWIT
  // =========================================
  {
    id: 'cabe',
    title: 'Cabai Rawit di Pot',
    description: 'Pelajari teknik menanam cabai rawit dari biji hingga panen melimpah di lahan terbatas.',
    category: 'Hortikultura',
    level: 'Pemula',
    duration: '60 Menit',
    image: 'https://i.ibb.co.com/Fq6LHK8F/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengapa Cabai Rawit?', 
        content: 'Cabai rawit (Capsicum frutescens) adalah tanaman komoditas strategis yang sangat cocok untuk iklim tropis Indonesia. Tanaman ini bersifat "Perennial" (tahunan), artinya satu pohon bisa hidup dan berbuah terus-menerus hingga 2-3 tahun jika dirawat dengan benar. Kunci utamanya adalah paparan sinar matahari penuh (minimal 6-8 jam/hari) dan drainase tanah yang baik agar akar tidak busuk.',
        image: 'https://i.ibb.co.com/4533T43/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Memilih Benih Berkualitas', 
        content: 'Jangan asal ambil biji! Pilih buah cabai yang benar-benar tua (kulit merah sempurna, tidak keriput, tangkai masih hijau). Belah buahnya secara melintang, ambil biji bagian tengah karena itulah yang paling bernas (berisi). Jemur biji di bawah sinar matahari tidak langsung (angin-angin) selama 3 jam untuk mengurangi kadar air dan mencegah jamur saat penyimpanan.',
        image: 'https://i.ibb.co.com/N69qR6Zc/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Seleksi Benih (Water Test)', 
        content: 'Lakukan seleksi benih sebelum tanam. Masukkan biji ke dalam gelas berisi air hangat kuku. Diamkan 15 menit. Perhatikan: Biji yang MENGAPUNG adalah biji kopong/mati, buang segera. Ambil hanya biji yang TENGGELAM di dasar gelas untuk ditanam karena memiliki daya tumbuh tinggi.',
        image: 'https://i.ibb.co.com/S4BKLYLX/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Teknik Penyemaian', 
        content: 'Gunakan tray semai atau wadah kecil berlubang. Media semai harus halus dan gembur: Campuran Tanah saring : Pupuk Kandang halus (1:1). Tanam 1 biji per lubang, tutup tipis dengan tanah. Simpan di tempat teduh namun terang. Jaga kelembapan media dengan spray halus setiap pagi.',
        image: 'https://i.ibb.co.com/BHxSJmhH/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Perawatan Bibit (Nursery)', 
        content: 'Setelah muncul tunas (sprout), WAJIB kenalkan sinar matahari pagi (jam 7-9) agar batang kokoh dan tidak mengalami etiolasi (kutilang/kurus tinggi langsing). Jika kurang sinar, bibit akan lemah dan mudah patah. Lakukan penyiraman hati-hati agar bibit tidak roboh.',
        image: 'https://i.ibb.co.com/MDKnSWcz/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pindah Tanam (Transplanting)', 
        content: 'Lakukan pindah tanam saat bibit memiliki 4-5 helai daun sejati (usia sekitar 3-4 minggu). PENTING: Lakukan pemindahan pada SORE HARI agar tanaman punya waktu semalaman untuk adaptasi suhu sebelum terkena matahari terik esok harinya. Siram media tanam di pot besar hingga jenuh air sebelum bibit dimasukkan.',
        image: 'https://i.ibb.co.com/9z3JnHy/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Media Tanam Pot Permanen', 
        content: 'Gunakan pot berdiameter minimal 30cm. Rumus media tanam terbaik: 1 bagian Tanah : 1 bagian Sekam Bakar : 1 bagian Pupuk Kandang. Sekam bakar berfungsi membuat tanah tetap gembur (porous) sehingga akar mudah menembus dan air tidak menggenang.',
        image: 'https://i.ibb.co.com/fz9KFC3S/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Fase Vegetatif & Generatif', 
        content: 'Fase Vegetatif (minggu 1-4): Berikan pupuk tinggi Nitrogen (seperti NPK daun) untuk memacu pertumbuhan daun dan batang. Fase Generatif (saat muncul bunga): Ganti dengan pupuk tinggi Fosfor & Kalium (seperti MKP/KCL) agar bunga tidak rontok dan buah menjadi lebat.',
        image: 'https://i.ibb.co.com/PsmJQMWD/ssss.png?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Perempelan (Pruning)', 
        content: 'Lakukan perempelan dengan membuang semua "tunas air" yang tumbuh di ketiak daun di bawah cabang utama (cabang Y pertama). Tujuannya agar nutrisi tidak habis dimakan daun bawah yang kurang produktif, melainkan fokus naik ke atas untuk pembentukan bunga dan buah.',
        image: 'https://i.ibb.co.com/SD63wgc6/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Cabai bisa dipanen saat usia 80-90 hari setelah tanam. Petik buah yang sudah merah penuh (atau hijau tua sesuai selera) beserta tangkainya agar lebih awet disimpan. Lakukan panen di pagi hari saat buah masih segar dan berbobot maksimal.',
        image: 'https://i.ibb.co.com/bRv6qnWk/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Apa fungsi utama sekam dalam campuran media tanam?', options: ['Hiasan', 'Memadatkan tanah', 'Membuat tanah gembur/porous', 'Membunuh hama'], correctAnswer: 2 },
      { question: 'Mengapa bibit baru tumbuh harus dijemur?', options: ['Agar cepat kering', 'Mencegah etiolasi (batang kurus)', 'Agar daun merah', 'Membunuh akar'], correctAnswer: 1 },
      { question: 'Bagian mana yang dibuang saat perempelan?', options: ['Akar', 'Bunga', 'Tunas air di bawah cabang Y', 'Pucuk daun'], correctAnswer: 2 },
      { question: 'Kapan waktu terbaik pindah tanam?', options: ['Siang bolong', 'Pagi buta', 'Sore hari', 'Tengah malam'], correctAnswer: 2 },
      { question: 'Nutrisi fase pembungaan butuh?', options: ['Nitrogen tinggi', 'Fosfor & Kalium tinggi', 'Hanya air', 'Vitamin C'], correctAnswer: 1 },
    ]
  },

  // =========================================
  // 2. TOMAT CERI
  // =========================================
  {
    id: 'tomat',
    title: 'Budidaya Tomat Ceri Manis',
    description: 'Teknik menanam tomat ceri di lahan sempit dengan hasil buah manis.',
    category: 'Hortikultura',
    level: 'Menengah',
    duration: '45 Menit',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengenal Tomat Ceri', 
        content: 'Tomat ceri memiliki ukuran buah kecil seukuran kelereng namun rasanya jauh lebih manis dibanding tomat sayur biasa. Tanaman ini bertipe "Indeterminate", artinya batang utamanya akan terus tumbuh memanjang ke atas dan membutuhkan penopang (ajir) agar tidak roboh.',
        image: 'https://i.ibb.co.com/bgPN9VMX/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Syarat Mutlak: Matahari', 
        content: 'Tomat adalah tanaman yang sangat menyukai matahari. Ia membutuhkan paparan sinar langsung minimal 6-8 jam sehari. Jika diletakkan di tempat teduh, tanaman akan tumbuh tinggi kurus, daun jarang, dan bunga akan rontok sebelum menjadi buah. Pastikan lokasi pot sangat terang.',
        image: 'https://i.ibb.co.com/d0G9WLFH/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Menanam Batang Dalam', 
        content: 'Tomat memiliki keunikan: batangnya bisa mengeluarkan akar. Saat pindah tanam, tanamlah bibit AGAK DALAM (timbun sebagian batang bawahnya). Batang yang tertimbun tanah akan mengeluarkan akar tambahan, membuat sistem perakaran lebih luas dan tanaman lebih kokoh menyerap nutrisi.',
        image: 'https://i.ibb.co.com/cK7D2tqC/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Pemasangan Ajir (Staking)', 
        content: 'Segera pasang tongkat kayu/bambu (ajir) setinggi 1.5 meter setelah pindah tanam. Ikat batang tomat ke ajir secara longgar. Jangan menunda pemasangan ajir karena jika dipasang saat tanaman sudah besar, berisiko menusuk dan merusak akar yang sudah menyebar.',
        image: 'https://i.ibb.co.com/ymc7VtJ9/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Teknik Penyiraman', 
        content: 'Aturan emas menyiram tomat: SIRAM TANAHNYA, BUKAN DAUNNYA. Air yang membasahi daun tomat dapat memicu pertumbuhan jamur (Late Blight). Lakukan penyiraman secara konsisten agar kelembapan tanah terjaga. Fluktuasi air yang ekstrem bisa menyebabkan buah pecah (cracking).',
        image: 'https://i.ibb.co.com/R4Sz4pmP/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pewiwilan (Pruning)', 
        content: 'Lakukan pewiwilan rutin dengan membuang tunas air yang tumbuh di ketiak daun (percabangan antara batang utama dan dahan). Sisakan hanya 1 batang utama (single stem) agar nutrisi fokus membesarkan buah dan sirkulasi udara di sekitar tanaman lancar.',
        image: 'https://i.ibb.co.com/G4HhdRJF/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Masalah Blossom End Rot', 
        content: 'Jika Anda melihat pantat buah tomat membusuk hitam, itu bukan hama, melainkan kekurangan Kalsium (Blossom End Rot). Pencegahannya: Tambahkan kapur dolomit atau cangkang telur tumbuk ke dalam media tanam sejak awal, dan jaga penyiraman agar penyerapan kalsium lancar.',
        image: 'https://i.ibb.co.com/4nPyLLrV/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Polinasi (Penyerbukan)', 
        content: 'Tomat memiliki bunga sempurna. Di kebun tertutup, bantu penyerbukan dengan cara mengetuk-ngetuk atau menggoyangkan batang bunga secara perlahan di pagi hari. Ini membantu serbuk sari jatuh ke kepala putik dan terjadi pembuahan.',
        image: 'https://i.ibb.co.com/kgSB67QQ/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Topping', 
        content: 'Lakukan pemangkasan pucuk utama (Topping) jika tanaman sudah mencapai ujung ajir atau terlalu tinggi. Ini akan menghentikan pertumbuhan vertikal sehingga tanaman akan fokus mematangkan buah-buah yang sudah ada di tandan bawah.',
        image: 'https://i.ibb.co.com/WvDzZsWq/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Tomat ceri bisa dipanen mulai usia 60-70 hari. Petik buah yang sudah berubah warna menjadi merah atau oranye sempurna. Biarkan buah matang di pohon (vine-ripened) untuk mendapatkan rasa manis yang maksimal.',
        image: 'https://i.ibb.co.com/rRmkTZpf/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Apa itu tanaman tipe "Indeterminate"?', options: ['Kerdil', 'Batang tumbuh terus memanjang', 'Tanpa akar', 'Mati setelah panen'], correctAnswer: 1 },
      { question: 'Mengapa batang bawah tomat perlu ditimbun?', options: ['Agar hangat', 'Merangsang akar tambahan', 'Menghindari semut', 'Agar pendek'], correctAnswer: 1 },
      { question: 'Penyakit busuk pantat buah disebabkan?', options: ['Kutu', 'Kekurangan Kalsium', 'Kelebihan Nitrogen', 'Jamur'], correctAnswer: 1 },
      { question: 'Cara menyiram tomat yang benar?', options: ['Siram daun', 'Siram bunga', 'Siram tanah/akar', 'Siram buah'], correctAnswer: 2 },
      { question: 'Tujuan pewiwilan?', options: ['Agar rimbun', 'Fokus nutrisi ke buah', 'Memperbanyak daun', 'Agar mati'], correctAnswer: 1 },
    ]
  },

  // =========================================
  // 3. SAWI HIDROPONIK
  // =========================================
  {
    id: 'sawi',
    title: 'Sawi Hidroponik Sistem Wick',
    description: 'Menanam sayuran bersih tanpa tanah dengan sistem sumbu kapiler.',
    category: 'Hortikultura',
    level: 'Pemula',
    duration: '30 Menit',
    image: 'https://i.ibb.co/WWQYF9Mk/3-sawi-wick-system.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Konsep Hidroponik Wick', 
        content: 'Sistem Wick (Sumbu) adalah metode hidroponik paling sederhana dan murah. Prinsipnya memanfaatkan daya kapilaritas sumbu (kain flanel) untuk menyedot air nutrisi dari bak penampung naik ke akar tanaman. Sistem ini pasif, tidak membutuhkan listrik atau pompa air.',
        image: 'https://i.ibb.co.com/mrfkXdqJ/01.png?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Media Tanam: Rockwool', 
        content: 'Dalam hidroponik, kita tidak menggunakan tanah. Media terbaik adalah Rockwool (serat batuan). Rockwool steril dan mampu menyimpan air dengan sangat baik. Potong rockwool bentuk dadu ukuran 2.5cm. Basahi dengan air biasa, cukup sampai lembap seperti spons, jangan diperas.',
        image: 'https://i.ibb.co.com/v4Ts723Z/01.png?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Fase Kritis: Sprout', 
        content: 'Masukkan 1 biji sawi ke lubang rockwool basah. Simpan di tempat gelap 1x24 jam. Begitu biji pecah dan muncul titik putih (sprout), WAJIB SEGERA JEMUR di bawah sinar matahari pagi. Keterlambatan menjemur akan menyebabkan kutilang (kurus tinggi langsing) dan bibit mudah rebah.',
        image: 'https://i.ibb.co.com/HDMrC1St/03.png?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Nutrisi AB Mix', 
        content: 'Tanaman hidroponik mendapatkan makanan dari air nutrisi. Gunakan pupuk khusus "AB Mix Sayuran Daun". Larutkan Stok A dan Stok B di wadah terpisah sesuai petunjuk kemasan. Jangan mencampur Stok A dan B dalam keadaan pekat karena akan menggumpal dan unsur haranya rusak.',
        image: 'https://i.ibb.co.com/gb0Gx8Kn/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Rakit Bak & Netpot', 
        content: 'Siapkan bak plastik (bisa baskom bekas) dan styrofoam penutup yang dilubangi. Pasang kain flanel pada netpot (wadah tanaman) menjulur ke bawah sebagai sumbu. Pastikan flanel bersih dan mampu menyerap air dengan baik.',
        image: 'https://i.ibb.co.com/S4MtBhqD/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pindah Tanam', 
        content: 'Pindahkan bibit (rockwool + tanaman) ke dalam netpot saat sudah memiliki 3-4 daun sejati (usia sekitar 10-14 hari). Masukkan netpot ke lubang styrofoam. Pastikan ujung kain flanel menyentuh air nutrisi di dalam bak.',
        image: 'https://i.ibb.co.com/Jj2gc52L/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Jarak Air (Oksigen)', 
        content: 'Jangan isi air nutrisi sampai menyentuh dasar netpot sepenuhnya. Beri jarak 1-2 cm antara dasar netpot dan permukaan air. Ruang kosong yang lembap ini penting agar akar tanaman bisa bernapas (mendapatkan oksigen) sehingga tidak busuk.',
        image: 'https://i.ibb.co.com/Lzg46FQr/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Perawatan Harian', 
        content: 'Cek bak nutrisi setiap hari. Jika air surut, tambahkan larutan nutrisi baru. Pastikan tanaman terkena sinar matahari minimal 5 jam sehari agar daun tumbuh lebar dan hijau pekat. Aduk air di bak sesekali untuk menambah oksigen terlarut.',
        image: 'https://i.ibb.co.com/MkxCTyG7/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Hama', 
        content: 'Karena sayuran daun dimakan langsung, hindari pestisida kimia. Ambil ulat secara manual jika ada. Jika ada kutu daun, semprot dengan air sabun cuci piring tipis-tipis atau pestisida nabati (air bawang putih).',
        image: 'https://i.ibb.co.com/twH0Dr65/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Sawi hidroponik tumbuh cepat dan bisa dipanen usia 30-40 hari setelah semai. Cabut beserta akarnya atau potong pangkal batangnya. Sayuran hidroponik biasanya lebih renyah dan bersih. Cuci bersih netpot sebelum digunakan kembali.',
        image: 'https://i.ibb.co.com/FkWkN2ft/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Prinsip kerja sistem Wick?', options: ['Pompa air', 'Kapilaritas sumbu', 'Percikan air', 'Kabut'], correctAnswer: 1 },
      { question: 'Jika telat menjemur benih pecah?', options: ['Subur', 'Etiolasi (Kutilang)', 'Akar kuat', 'Daun ungu'], correctAnswer: 1 },
      { question: 'Kenapa stok pekat A dan B tidak boleh dicampur?', options: ['Meledak', 'Menggumpal/endap', 'Bau', 'Hitam'], correctAnswer: 1 },
      { question: 'Pupuk hidroponik adalah?', options: ['Kompos', 'Urea', 'NPK', 'AB Mix'], correctAnswer: 3 },
      { question: 'Jarak ideal dasar netpot ke air?', options: ['Terendam', '1-2 cm (ruang oksigen)', '10 cm', 'Kering'], correctAnswer: 1 },
    ]
  },

  // =========================================
  // 4. ANGGREK BULAN
  // =========================================
  {
    id: 'anggrek',
    title: 'Merawat Anggrek Bulan',
    description: 'Panduan ahli merawat anggrek agar rajin berbunga dan akar sehat.',
    category: 'Tanaman Hias',
    level: 'Ahli',
    duration: '90 Menit',
    image: 'https://i.ibb.co/1YdBQjKd/4-anggrek-bulan.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Sifat Epifit', 
        content: 'Anggrek Bulan (Phalaenopsis) adalah tanaman epifit, artinya di alam liar ia hidup menempel di dahan pohon, bukan di tanah. Kunci sukses merawatnya adalah memastikan SIRKULASI UDARA di akar lancar. Jangan pernah menanam anggrek menggunakan tanah padat karena akar akan mati lemas.',
        image: 'https://i.ibb.co.com/hFwSq0mT/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Media Tanam', 
        content: 'Sesuaikan media dengan lingkungan. Jika lingkungan kering/panas: Gunakan Moss (lumut) atau Sabut Kelapa karena menyimpan air. Jika lingkungan lembap/sering hujan: Gunakan Arang Kayu atau Pakis/Pecahan Bata karena drainasenya cepat dan tidak menyimpan air berlebih.',
        image: 'https://i.ibb.co.com/pvWqKkSh/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Pot', 
        content: 'Gunakan pot transparan (plastik bening) atau pot tanah liat yang memiliki banyak lubang di samping dan bawah. Pot transparan memungkinkan akar berfotosintesis, sedangkan lubang banyak memastikan akar bisa bernapas dengan lega.',
        image: 'https://i.ibb.co.com/wZSRYr4D/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Pencahayaan', 
        content: 'Anggrek bulan TIDAK TAHAN sinar matahari langsung (daun bisa gosong/sunburn). Ia menyukai cahaya teduh tapi terang (terfilter). Lokasi ideal adalah teras dengan atap transparan atau di bawah naungan paranet 65%. Ciri pencahayaan pas: Daun berwarna hijau cerah segar.',
        image: 'https://i.ibb.co.com/84ttv5RK/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menyiram', 
        content: 'Pembunuh nomor 1 anggrek adalah kebanyakan air (overwatering). Siram HANYA saat media tanam sudah kering. Cek warna akar: Jika akar HIJAU = kenyang air (jangan siram). Jika akar PUTIH KEPERAKAN = haus (siram). Hindari air menggenang di ketiak daun (pucuk) agar tidak busuk.',
        image: 'https://i.ibb.co.com/KcGKXDqw/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Sirkulasi Udara', 
        content: 'Anggrek menyukai kelembapan tinggi tapi tidak suka udara pengap. Gunakan kipas angin kecil jika menanam di dalam ruangan (indoor). Angin yang berhembus pelan akan mencegah jamur dan bakteri berkembang biak di media tanam yang lembap.',
        image: 'https://i.ibb.co.com/RTs58N2X/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pemupukan', 
        content: 'Anggrek makan "sedikit tapi sering". Gunakan pupuk NPK cair khusus anggrek dengan dosis sangat rendah (1/4 dari dosis anjuran kemasan). Semprotkan kabut tipis ke bagian bawah daun dan akar seminggu sekali, sebaiknya di pagi hari.',
        image: 'https://i.ibb.co.com/SXgxXhfq/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Merangsang Bunga', 
        content: 'Anggrek bulan membutuhkan "stres suhu" (perbedaan suhu siang dan malam yang cukup ekstrem, sekitar 10 derajat) untuk memicu pembentukan tangkai bunga. Letakkan tanaman di tempat yang lebih sejuk pada malam hari selama beberapa minggu.',
        image: 'https://i.ibb.co.com/q3YtjMJP/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Pasca Bunga', 
        content: 'Setelah bunga rontok, jangan potong habis tangkainya jika masih hijau. Potonglah sekitar 2 cm di atas "ruas tidur" (buku batang). Seringkali tangkai lama akan bercabang dan mengeluarkan bunga baru, atau tumbuh anakan (Keiki).',
        image: 'https://i.ibb.co.com/fzj7mDJt/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Penyakit', 
        content: 'Jika daun menguning dari pangkal, lembek, dan berair, itu tanda Busuk Lunak (bakteri). Segera potong bagian yang busuk dengan pisau steril, oleskan fungisida atau bubuk kayu manis pada luka potong, dan hentikan penyiraman sementara waktu.',
        image: 'https://i.ibb.co.com/tpsc5zdD/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Arti tanaman Epifit?', options: ['Hidup di air', 'Hidup di tanah', 'Menempel di pohon', 'Gurun'], correctAnswer: 2 },
      { question: 'Media tanam lingkungan panas?', options: ['Arang/Pakis', 'Moss', 'Tanah', 'Pasir'], correctAnswer: 1 },
      { question: 'Tanda anggrek butuh siram?', options: ['Jam 7 pagi', 'Akar hijau', 'Akar putih keperakan', 'Daun layu'], correctAnswer: 2 },
      { question: 'Jika air menggenang di ketiak daun?', options: ['Bunga', 'Busuk lunak', 'Hijau', 'Kuat'], correctAnswer: 1 },
      { question: 'Pemicu tangkai bunga?', options: ['Matahari terik', 'Urea', 'Perbedaan suhu ekstrem', 'Es'], correctAnswer: 2 },
    ]
  },

  // =========================================
  // 5. JAHE MERAH
  // =========================================
  {
    id: 'jahe',
    title: 'Budidaya Jahe Merah Organik',
    description: 'Peluang bisnis tanaman obat di lahan sempit dengan polybag.',
    category: 'Tanaman Obat',
    level: 'Pemula',
    duration: '50 Menit',
    image: 'https://i.ibb.co/zVnnv45h/5-jahe-merah-organik.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengapa Jahe Merah?', 
        content: 'Jahe merah (Zingiber officinale var. Rubrum) memiliki nilai ekonomi lebih tinggi dibanding jahe biasa. Rasanya lebih pedas dan kandungan minyak atsiri-nya tinggi, sangat dicari industri obat. Budidaya di polybag memungkinkan panen maksimal di lahan sempit dengan teknik vertikal.',
        image: 'https://i.ibb.co.com/BHWsQcxm/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Syarat Bibit', 
        content: 'Gunakan bibit dari rimpang tua (usia panen 10-12 bulan). Ciri rimpang sehat: kulit cerah, tidak lecet, bebas hama, dan memiliki 2-3 mata tunas yang siap tumbuh. Hindari menggunakan jahe muda yang dijual di pasar sayur karena rawan busuk.',
        image: 'https://i.ibb.co.com/1tzD3VWj/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Pengecambahan', 
        content: 'Sebelum tanam, rimpang perlu dikecambahkan (sprouting). Hamparkan rimpang di atas jerami atau sekam lembap di tempat teduh. Siram air secukupnya setiap hari. Tunas-tunas kecil akan muncul dalam waktu 2-3 minggu.',
        image: 'https://i.ibb.co.com/Qj89LWps/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Polybag & Media', 
        content: 'Gunakan polybag ukuran besar atau karung beras bekas. Campuran media tanam: 1 Tanah : 1 Pupuk Kandang : 1 Sekam Bakar. KUNCI RAHASIA: Isi polybag hanya 1/4 bagian saja di awal! Lipat sisa plastik ke bawah. Ini persiapan untuk teknik pembumbunan.',
        image: 'https://i.ibb.co.com/dsNqJjvs/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menanam', 
        content: 'Tanam rimpang bibit yang sudah bertunas sedalam 3-5 cm. Pastikan posisi tunas menghadap ke ATAS. Satu polybag cukup diisi 2-3 potongan rimpang. Jangan memadatkan tanah terlalu keras agar tunas mudah menembus permukaan.',
        image: 'https://i.ibb.co.com/mrPG5QjS/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Penempatan', 
        content: 'Fase Muda (0-3 bulan): Jahe butuh naungan (teduh), hindari matahari terik langsung. Fase Dewasa (4 bulan ke atas): Pindahkan ke tempat yang terkena sinar matahari penuh agar rimpang bisa membesar maksimal.',
        image: 'https://i.ibb.co.com/8g38SHNw/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pembumbunan (RAHASIA)', 
        content: 'Ini teknik melipatgandakan hasil: Setiap kali batang jahe tumbuh meninggi, tambahkan media tanam baru ke dalam polybag (timbun batangnya setebal 5-10 cm) sambil membuka lipatan polybag. Lakukan bertahap sampai polybag penuh. Ini merangsang rimpang tumbuh bertingkat ke atas.',
        image: 'https://i.ibb.co.com/7t9DNsNp/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Penyiraman', 
        content: 'Jahe menyukai tanah lembap tapi benci becek (tergenang). Siram secukupnya saja setiap sore. Pastikan lubang drainase polybag lancar. Jika tanah terlalu basah, rimpang akan cepat busuk.',
        image: 'https://i.ibb.co.com/x8YSTndg/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Hama', 
        content: 'Penyakit umum adalah bercak daun (jamur) yang membuat daun menguning. Pencegahan: Jaga kebersihan (sanitasi) area polybag, cabut gulma. Semprotkan fungisida hayati (Trichoderma) atau pestisida nabati secara rutin.',
        image: 'https://i.ibb.co.com/Kx7YR3MJ/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Jahe merah dipanen optimal pada usia 10-12 bulan. Tandanya: daun mulai menguning dan batang mengering (rebah). Bongkar polybag, pisahkan rimpang dari tanah. Satu polybag dengan teknik pembumbunan bisa menghasilkan rimpang yang melimpah.',
        image: 'https://i.ibb.co.com/BV7tHxDL/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Keunggulan jahe merah?', options: ['Besar', 'Manis', 'Pedas & Minyak Atsiri tinggi', 'Bisa dimakan'], correctAnswer: 2 },
      { question: 'Kenapa polybag diisi tanah bertahap?', options: ['Hemat biaya', 'Pembumbunan rimpang bertingkat', 'Ringan', 'Air tumpah'], correctAnswer: 1 },
      { question: 'Fungsi pembumbunan?', options: ['Cegah gulma', 'Cantik', 'Rimpang bertingkat', 'Dingin'], correctAnswer: 2 },
      { question: 'Usia muda (0-3 bulan) jahe butuh?', options: ['Terik', 'AC', 'Naungan', 'Air'], correctAnswer: 2 },
      { question: 'Tanda siap panen?', options: ['Hijau segar', 'Bunga', 'Daun menguning kering', 'Akar mencuat'], correctAnswer: 2 },
    ]
  },
  // =========================================
  // 6. KOPI ARABICA
  // =========================================
  {
    id: 'kopi',
    title: 'Budidaya Kopi Arabica',
    description: 'Panduan menanam kopi kualitas ekspor dari dataran tinggi hingga proses pasca panen.',
    category: 'Perkebunan',
    level: 'Menengah',
    duration: '60 Menit',
    image: 'https://i.ibb.co.com/MkKM5NLH/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Syarat Tumbuh (Ketinggian)', 
        content: 'Kopi Arabica (Coffea arabica) adalah tanaman "Emas Hijau" dataran tinggi. Syarat mutlaknya adalah ketinggian tempat 1.000 - 2.000 mdpl dengan suhu sejuk (16-20°C). Jika ditanam di dataran rendah yang panas, Arabica rentan terkena penyakit karat daun dan gagal berbuah.',
        image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Persiapan Pohon Naungan', 
        content: 'Berbeda dengan tanaman lain, kopi Arabica tidak suka sinar matahari 100%. Ia butuh naungan. Tanam pohon pelindung (seperti Lamtoro, Sengon, atau Alpukat) setahun sebelum menanam kopi. Naungan berfungsi mengatur intensitas cahaya masuk sekitar 60-70%.',
        image: 'https://images.unsplash.com/photo-1511537632536-b74c2769373f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Pemilihan Bibit Unggul', 
        content: 'Gunakan varietas unggul seperti Gayo 1, Andungsari 1, atau Sigarar Utang. Bibit siap tanam biasanya berusia 8-12 bulan dengan jumlah daun 5-7 pasang. Pastikan bibit bebas dari Hama Nematoda (akar bengkak).',
        image: 'https://images.unsplash.com/photo-1596627685286-9dc242442475?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Lubang Tanam', 
        content: 'Buat lubang tanam ukuran 60x60x60 cm. Pisahkan tanah galian atas (top soil) dan bawah. Biarkan lubang terbuka 2 minggu untuk mematikan hama tanah. Campur tanah atas dengan pupuk kandang matang sebelum dimasukkan kembali saat menanam.',
        image: 'https://images.unsplash.com/photo-1621255562145-667746430349?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Pola Tanam', 
        content: 'Jarak tanam ideal untuk Arabica adalah 2.5m x 2.5m. Penanaman sebaiknya dilakukan di awal musim hujan. Pastikan leher akar bibit sejajar dengan permukaan tanah, jangan terlalu dalam atau terlalu dangkal.',
        image: 'https://images.unsplash.com/photo-1582236979248-be224422df22?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pemangkasan (Pruning)', 
        content: 'Kopi butuh dipangkas rutin. Ada 3 jenis: Pangkas Bentuk (membentuk kerangka pohon setinggi 1.8m), Pangkas Produksi (membuang cabang tua/sakit), dan Wiwil (membuang tunas air yang mencuri nutrisi). Pemangkasan menjaga sirkulasi udara dan memacu bunga.',
        image: 'https://images.unsplash.com/photo-1585664811087-47f658d5156c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pemupukan Berimbang', 
        content: 'Berikan pupuk organik (kompos) setahun 2 kali. Tambahkan pupuk NPK secara bertahap di awal dan akhir musim hujan. Buat parit melingkar di bawah tajuk daun untuk menabur pupuk, lalu tutup tanah agar tidak menguap.',
        image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Hama Utama: PBKo', 
        content: 'Musuh utama kopi adalah Penggerek Buah Kopi (PBKo). Kumbang kecil ini melubangi buah kopi. Pengendalian: Petik bubuk (memetik semua buah yang tersisa pasca panen), sanitasi kebun, dan pasang perangkap (kumbang terpikat senyawa alkohol/ethanol).',
        image: 'https://images.unsplash.com/photo-1594326442438-e6b77209930f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Panen Petik Merah', 
        content: 'Kualitas kopi ditentukan saat panen. HANYA PETIK BUAH MERAH (Red Cherry). Buah merah memiliki kadar gula (brix) tertinggi dan biji sempurna. Jangan petik buah hijau atau kuning (kecuali varietas Yellow Caturra). Panen dilakukan bertahap (rotasi 2 minggu sekali).',
        image: 'https://images.unsplash.com/photo-1589531602334-90b40b2d622d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Pasca Panen (Proses)', 
        content: 'Setelah dipetik, kopi harus segera diproses (maksimal 6 jam) agar tidak fermentasi liar. Bisa proses Full Wash (rendam air), Honey (jemur dengan lendir), atau Natural (jemur utuh). Penjemuran dilakukan sampai kadar air biji mencapai 12%.',
        image: 'https://images.unsplash.com/photo-1611162458324-a951cb1cc63e?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Ketinggian ideal untuk menanam Kopi Arabica adalah?', options: ['0-500 mdpl (Dataran Rendah)', '1.000-2.000 mdpl (Dataran Tinggi)', 'Di tepi pantai', 'Di dalam gua'], correctAnswer: 1 },
      { question: 'Apa fungsi tanaman naungan pada kebun kopi?', options: ['Mengatur intensitas cahaya masuk', 'Agar kebun gelap gulita', 'Tempat sarang burung', 'Menghabiskan pupuk'], correctAnswer: 0 },
      { question: 'Hama utama yang melubangi buah kopi disebut?', options: ['Ulat Bulu', 'PBKo (Penggerek Buah Kopi)', 'Belalang', 'Tikus'], correctAnswer: 1 },
      { question: 'Prinsip panen kopi berkualitas tinggi adalah?', options: ['Petik semua (Rampasan)', 'Petik buah Hijau', 'Petik Merah (Red Cherry)', 'Petik daunnya'], correctAnswer: 2 },
      { question: 'Berapa kadar air ideal biji kopi setelah dijemur?', options: ['50%', '12%', '0%', '25%'], correctAnswer: 1 },
    ]
  },

  // =========================================
  // 7. KAKAO (COKLAT)
  // =========================================
  {
    id: 'kakao',
    title: 'Budidaya Kakao (Cokelat)',
    description: 'Teknik budidaya kakao klon unggul dan fermentasi biji berkualitas.',
    category: 'Perkebunan',
    level: 'Menengah',
    duration: '55 Menit',
    image: 'https://i.ibb.co.com/DHFssL22/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Syarat Tumbuh Kakao', 
        content: 'Kakao (Theobroma cacao) adalah tanaman tropis dataran rendah hingga menengah (0-600 mdpl). Ia menyukai curah hujan merata sepanjang tahun. Tanah harus subur, gembur, dan kaya bahan organik. Kakao sangat sensitif terhadap kekeringan.',
        image: 'https://images.unsplash.com/photo-1619447348925-fb40243407e3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Klon Unggul', 
        content: 'Gunakan bibit dari klon unggul yang tahan penyakit VSD dan produktivitas tinggi, seperti ICCRI 03, ICCRI 04, atau Sulawesi 1. Hindari menanam biji asalan (sapuan) karena hasilnya tidak seragam dan rentan penyakit.',
        image: 'https://images.unsplash.com/photo-1620212727824-2c7da197920c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Naungan (Pelindung)', 
        content: 'Sama seperti kopi, Kakao muda WAJIB dinaungi. Tanaman naungan (seperti Lamtoro/Gamal) harus ditanam setahun sebelumnya. Naungan melindungi daun kakao muda yang lunak agar tidak gosong terbakar matahari (sunburn).',
        image: 'https://images.unsplash.com/photo-1549603248-d34934759497?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Teknik Sambung Pucuk', 
        content: 'Untuk peremajaan atau bibit unggul, teknik Sambung Pucuk (Top Grafting) sangat disarankan. Batang bawah yang kuat disambung dengan Entres (pucuk) dari pohon induk unggul. Ini mempercepat masa berbuah menjadi 1.5 - 2 tahun saja.',
        image: 'https://images.unsplash.com/photo-1632213702844-1e0615781374?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Pemangkasan (Pruning)', 
        content: 'Pemangkasan adalah KUNCI produksi kakao. Lakukan Pangkas Bentuk (agar cabang seimbang), Pangkas Pemeliharaan (buang tunas air/cabang sakit), dan Pangkas Produksi (mengatur agar sinar matahari bisa masuk ke batang utama tempat bunga tumbuh).',
        image: 'https://images.unsplash.com/photo-1582236979248-be224422df22?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pemupukan & Rorak', 
        content: 'Buat Rorak (lubang angin/lubang sampah organik) di antara pohon kakao. Masukkan serasah daun kakao dan kulit buah kakao ke rorak sebagai kompos alami. Tambahkan NPK dan Dolomit (Kapur) setahun dua kali.',
        image: 'https://images.unsplash.com/photo-1597850239682-9694770267d3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Hama PBK & Penyakit VSD', 
        content: 'PBK (Penggerek Buah Kakao) membuat biji lengket dan rusak. VSD (Vascular Streak Dieback) membuat ranting mati kering. Kendalikan dengan sarungisasi (membungkus buah muda dengan plastik) dan pangkas rutin bagian yang sakit.',
        image: 'https://images.unsplash.com/photo-1616682226293-6627067d7cb9?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Panen Sering', 
        content: 'Lakukan panen sering (seminggu sekali). Petik buah yang sudah berwarna kuning/oranye penuh. Gunakan gunting atau pisau tajam, jangan dipuntir dengan tangan karena bisa merusak bantalan bunga (tempat keluarnya buah berikutnya).',
        image: 'https://images.unsplash.com/photo-1587049352847-81a56d773cae?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Pemeraman & Pemecahan', 
        content: 'Setelah dipetik, peram buah di tempat teduh selama 2-3 hari. Kemudian pecah kulit buah (hati-hati jangan melukai biji). Ambil biji basahnya untuk difermentasi.',
        image: 'https://images.unsplash.com/photo-1611242320536-f12d3541249b?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Fermentasi (KUNCI RASA)', 
        content: 'Cokelat enak berasal dari fermentasi. Masukkan biji basah ke dalam kotak kayu berlapis daun pisang. Tutup rapat. Aduk/balik biji setelah 48 jam. Fermentasi selesai dalam 5 hari (warna keping biji jadi cokelat). Lalu jemur hingga kering.',
        image: 'https://images.unsplash.com/photo-1579165466780-9224c6ef7d42?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Ketinggian ideal untuk tanaman Kakao adalah?', options: ['Dataran Rendah (0-600 mdpl)', 'Puncak Gunung (>2000 mdpl)', 'Rawa-rawa', 'Gurun Pasir'], correctAnswer: 0 },
      { question: 'Teknik mempercepat pembuahan dengan menyambung batang disebut?', options: ['Cangkok', 'Sambung Pucuk (Grafting)', 'Stek', 'Menanam biji'], correctAnswer: 1 },
      { question: 'Apa fungsi Rorak di kebun kakao?', options: ['Jebakan tikus', 'Lubang angin & tempat sampah organik', 'Kolam ikan', 'Tempat bakar sampah'], correctAnswer: 1 },
      { question: 'Cara mencegah hama Penggerek Buah Kakao (PBK) yang ramah lingkungan?', options: ['Disiram air panas', 'Sarungisasi (Pembungkusan Buah)', 'Ditebang pohonnya', 'Dibiarkan saja'], correctAnswer: 1 },
      { question: 'Proses pasca panen yang menentukan aroma & rasa cokelat adalah?', options: ['Pencucian', 'Fermentasi', 'Perebusan', 'Pendinginan'], correctAnswer: 1 },
    ]
  },

  // =========================================
  // 8. KARET
  // =========================================
  {
    id: 'karet',
    title: 'Budidaya Karet Unggul',
    description: 'Teknik budidaya dan penyadapan getah karet (lateks) yang benar dan berkelanjutan.',
    category: 'Perkebunan',
    level: 'Ahli',
    duration: '60 Menit',
    image: 'https://i.ibb.co.com/fd73gD1V/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Syarat Tumbuh Karet', 
        content: 'Karet (Hevea brasiliensis) tumbuh optimal di daerah tropis basah dengan curah hujan 2.500-4.000 mm/tahun. Ketinggian ideal 0-400 mdpl. Tanah harus dalam (solum tebal) agar akar tunggang kuat menopang pohon besar.',
        image: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Klon Karet Unggul', 
        content: 'Gunakan bibit okulasi (stump mata tidur) dari klon anjuran pemerintah seperti PB 260, IRR 118, atau GT 1. Klon unggul memiliki kulit yang tebal, produksi getah tinggi, dan tahan angin.',
        image: 'https://images.unsplash.com/photo-1598322312952-b88a74cb4268?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Penanaman & Jarak Tanam', 
        content: 'Jarak tanam karet biasanya 6m x 3m atau 7m x 3m. Arah barisan tanaman sebaiknya Timur-Barat agar penyinaran matahari maksimal. Buat lubang tanam 40x40x40 cm, beri pupuk dasar Rock Phosphate (RP) untuk memacu akar.',
        image: 'https://images.unsplash.com/photo-1605218427306-252af8611590?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Masa TBM (Belum Menghasilkan)', 
        content: 'Masa TBM berlangsung 4-5 tahun. Fokus perawatan: Penyiangan gulma (terutama ilalang yang racun bagi akar karet), pemupukan NPK rutin, dan "Wiwil Tunas" (membuang tunas cabang palsu hingga ketinggian 3 meter agar batang lurus mulus).',
        image: 'https://images.unsplash.com/photo-1629196911520-2d80d2876db2?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Matang Sadap', 
        content: 'Kapan karet boleh disadap? Bukan berdasarkan umur, tapi LILIT BATANG. Pohon siap sadap jika lilit batang sudah mencapai 45 cm pada ketinggian 1 meter dari tanah. Jika dipaksa sadap sebelum waktunya, pohon akan rusak dan mati kulit.',
        image: 'https://images.unsplash.com/photo-1625246333195-981d5424b6e3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pembukaan Panel Sadap', 
        content: 'Penggambaran panel sadap dilakukan dengan mal. Kemiringan irisan sadap adalah 30-40 derajat dari kiri atas ke kanan bawah (karena pembuluh lateks posisinya miring ke kanan atas).',
        image: 'https://images.unsplash.com/photo-1598322313658-511b89cb07b2?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Teknik Penyadapan', 
        content: 'Menyadap tidak boleh melukai kayu (kambium), cukup iris kulitnya saja setebal 1.5 - 2 mm. Jika melukai kayu, kulit akan benjol-benjol (Brown Bast) dan tidak bisa disadap lagi. Lakukan penyadapan pagi hari (05.00 - 09.00) saat tekanan turgor tinggi.',
        image: 'https://images.unsplash.com/photo-1598322056633-91147924729f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Frekuensi & Stimulan', 
        content: 'Rumus sadap d2 (dua hari sekali) atau d3 (tiga hari sekali). Jangan tiap hari agar kulit sempat pulih. Gunakan stimulan (Etefon) secara bijak, hanya pada pohon dewasa yang sehat, untuk memperlancar aliran lateks.',
        image: 'https://images.unsplash.com/photo-1632806727299-a3676c02976c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Penanganan Lateks', 
        content: 'Biarkan lateks menetes ke mangkuk tempurung. Setelah aliran berhenti, beri pembeku (asam semut/format). Jangan gunakan tawas/pupuk TSP karena merusak kualitas karet. Aduk rata hingga membeku (lum).',
        image: 'https://images.unsplash.com/photo-1635839936862-4299b8214217?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Penyakit Jamur Akar Putih (JAP)', 
        content: 'Penyakit mematikan pada karet. Ciri: Daun menguning dan rontok, akar tertutup benang putih. Pencegahan: Taburkan belerang (Sulfur) pada lubang tanam saat awal tanam dan tanam tanaman penutup tanah (LCC) kacangan.',
        image: 'https://images.unsplash.com/photo-1599527749179-7a3304267431?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Kapan pohon karet dianggap "Matang Sadap"?', options: ['Umur 2 tahun', 'Lilit batang mencapai 45 cm', 'Tinggi pohon 1 meter', 'Saat daun gugur'], correctAnswer: 1 },
      { question: 'Kemiringan irisan sadap yang benar adalah?', options: ['Kiri atas ke kanan bawah', 'Kanan atas ke kiri bawah', 'Datar/Horizontal', 'Tegak lurus'], correctAnswer: 0 },
      { question: 'Waktu terbaik menyadap karet agar getah banyak?', options: ['Siang hari panas', 'Sore hari', 'Pagi hari (05.00-09.00)', 'Tengah malam'], correctAnswer: 2 },
      { question: 'Apa akibat jika pisau sadap melukai kayu (kambium)?', options: ['Getah makin banyak', 'Kulit pulih cepat', 'Benjol-benjol & mati kulit (Brown Bast)', 'Pohon makin tinggi'], correctAnswer: 2 },
      { question: 'Cairan pembeku lateks yang disarankan adalah?', options: ['Tawas', 'Asam Semut (Format)', 'Air Sabun', 'Pupuk Urea'], correctAnswer: 1 },
    ]
  },
  // =========================================
  // 9. KUNYIT (TURMERIC)
  // =========================================
  {
    id: 'kunyit',
    title: 'Budidaya Kunyit Emas',
    description: 'Cara menanam kunyit di polybag atau pekarangan untuk panen rimpang berkualitas.',
    category: 'Tanaman Obat',
    level: 'Pemula',
    duration: '45 Menit',
    image: 'https://i.ibb.co.com/rKCj2Cv0/unnamed.jpg?q=80&w=800&auto=format&fit=crop', // Ilustrasi Rimpang
    materi: [
      { 
        title: '1. Manfaat & Potensi Kunyit', 
        content: 'Kunyit (Curcuma longa) adalah empon-empon wajib di dapur dan apotek hidup. Zat kurkumin di dalamnya anti-inflamasi kuat. Budidaya kunyit sangat mudah, minim perawatan, dan tahan hama, sehingga sangat cocok untuk pemula.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Persiapan Bibit Rimpang', 
        content: 'Gunakan rimpang induk yang tua (usia 10-12 bulan). Ciri rimpang sehat: kulit mulus, tidak keriput, dan memiliki mata tunas. Potong rimpang menjadi bagian-bagian yang memiliki 2-3 mata tunas. Angin-anginkan selama 1 hari untuk menutup luka potong agar tidak busuk.',
        image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Pengecambahan (Sprouting)', 
        content: 'Letakkan potongan rimpang di tempat lembap dan teduh (bisa di atas jerami atau kain basah). Siram spray setiap hari. Tunas akan muncul dalam 2-4 minggu. Bibit siap tanam jika tunas sudah mencapai 1-2 cm.',
        image: 'https://images.unsplash.com/photo-1615485500704-8e99099928b3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Media Tanam Gembur', 
        content: 'Kunyit butuh tanah yang sangat gembur agar rimpang bisa membesar. Campuran ideal: 1 Tanah : 1 Sekam Bakar : 1 Pupuk Kandang. Jika tanah terlalu padat (tanah liat), rimpang akan kecil dan bentuknya jelek.',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menanam', 
        content: 'Buat lubang tanam sedalam 5-7 cm. Masukkan bibit dengan posisi TUNAS MENGHADAP KE ATAS. Timbun tanah tipis-tipis. Jangan menanam terlalu dalam karena tunas bisa busuk sebelum menembus permukaan.',
        image: 'https://images.unsplash.com/photo-1592187270271-9a4b84faa228?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Cahaya Matahari', 
        content: 'Kunyit suka sinar matahari parsial (teduh) di awal pertumbuhan. Namun, saat usia 3-4 bulan ke atas, pindahkan ke tempat yang terkena sinar matahari penuh agar proses fotosintesis maksimal untuk pengisian rimpang.',
        image: 'https://images.unsplash.com/photo-1599598425947-32c744dc922d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Penyiraman', 
        content: 'Siram secukupnya. Tanah harus lembap tapi tidak boleh becek. Jika terlalu basah, rimpang kunyit sangat mudah busuk. Pastikan pot/polybag memiliki lubang drainase yang lancar.',
        image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Pembumbunan (Wajib)', 
        content: 'Saat tanaman mulai rimbun, akar rimpang sering menyembul ke permukaan. Lakukan pembumbunan (menimbun pangkal batang dengan tanah baru) setiap 2 bulan sekali. Ini merangsang rimpang tumbuh bertingkat dan lebih banyak.',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Hama Ulat Penggulung', 
        content: 'Hama yang sering menyerang adalah ulat penggulung daun. Daun akan tergulung dan berlubang. Pengendalian: Ambil ulat secara manual atau semprot insektisida nabati (air rendaman tembakau).',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen (Leaf Flag)', 
        content: 'Kunyit siap panen saat usia 8-10 bulan. Tandanya disebut "Leaf Flag": Daun menguning dan batang semu mulai rebah/kering. Bongkar tanah, bersihkan rimpang. Jangan panen terlalu muda karena warna belum pekat.',
        image: 'https://images.unsplash.com/photo-1635843104672-031d279d0121?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Berapa usia rimpang induk yang baik untuk bibit?', options: ['1 Bulan', '3 Bulan', '10-12 Bulan', '3 Tahun'], correctAnswer: 2 },
      { question: 'Posisi tunas saat menanam kunyit adalah?', options: ['Menghadap ke bawah', 'Menghadap ke atas', 'Miring 90 derajat', 'Sembarang'], correctAnswer: 1 },
      { question: 'Mengapa tanah kunyit harus gembur?', options: ['Agar cacing hidup', 'Agar rimpang bisa membesar leluasa', 'Agar air menggenang', 'Agar tanaman tinggi'], correctAnswer: 1 },
      { question: 'Tanda fisik tanaman kunyit siap panen adalah?', options: ['Bunga bermekaran', 'Daun hijau segar', 'Daun menguning & batang rebah', 'Akar mencuat'], correctAnswer: 2 },
      { question: 'Fungsi pembumbunan pada kunyit adalah?', options: ['Menutup rimpang yang menyembul & memacu rimpang baru', 'Memadatkan tanah', 'Menghilangkan rumput', 'Mendinginkan akar'], correctAnswer: 0 },
    ]
  },

  // =========================================
  // 10. LIDAH BUAYA (ALOE VERA)
  // =========================================
  {
    id: 'lidahbuaya',
    title: 'Lidah Buaya (Aloe Vera)',
    description: 'Tips merawat lidah buaya agar daging tebal, tidak lembek, dan cepat beranak.',
    category: 'Tanaman Obat',
    level: 'Pemula',
    duration: '40 Menit',
    image: 'https://i.ibb.co.com/FCp6jHS/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Karakter Sukulen', 
        content: 'Lidah Buaya adalah jenis Sukulen (tanaman penyimpan air). Daunnya berisi 95% air. Musuh terbesarnya adalah kelebihan air. Jangan perlakukan dia seperti tanaman tropis biasa yang butuh disiram tiap hari.',
        image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Pemilihan Pot', 
        content: 'Gunakan pot Terracotta (tanah liat) karena berpori dan bisa membuang kelebihan air. Jika pakai pot plastik, pastikan lubang drainase banyak. Aloe vera suka akar yang sesak (root bound) jadi jangan pakai pot yang terlalu raksasa.',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Media Tanam Kering', 
        content: 'Gunakan media tanam kaktus/sukulen. Campuran: Pasir Malang : Sekam Bakar : Tanah (2:1:1). Media harus sangat poros (air langsung bablas saat disiram). Jangan pakai tanah liat padat.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Pencahayaan', 
        content: 'Aloe Vera suka cahaya terang tapi tidak langsung (Bright Indirect Light). Jika terkena matahari terik seharian, daun akan berubah cokelat kemerahan (stress). Jika terlalu gelap, daun akan lemas dan kurus. Teras adalah lokasi terbaik.',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d71321?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Teknik Menyiram: Soak & Dry', 
        content: 'Metode "Soak and Dry": Siram jenuh sampai air keluar dari lubang bawah, lalu JANGAN SIRAM LAGI sampai tanah benar-benar kering kerontang (cek dengan jari sedalam 3-5 cm). Biasanya cukup seminggu sekali atau dua minggu sekali.',
        image: 'https://images.unsplash.com/photo-1520302630591-16b96b605696?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pemupukan', 
        content: 'Aloe vera tidak rakus pupuk. Berikan pupuk organik cair atau NPK slow release cukup 2-3 bulan sekali. Kelebihan pupuk malah membuat daun lembek dan rentan penyakit.',
        image: 'https://images.unsplash.com/photo-1599598424692-23f27f8709e3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Memperbanyak (Anakan/Pups)', 
        content: 'Tanaman sehat akan memunculkan anakan (pups) di samping induk. Pisahkan anakan saat tingginya sudah 5-10 cm dan punya akar sendiri. Potong hati-hati, biarkan luka kering 1 hari, baru tanam di pot kecil terpisah.',
        image: 'https://images.unsplash.com/photo-1612363148967-85203e1c6b4e?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Mengatasi Daun Lembek', 
        content: 'Jika daun pangkal lembek, berair, dan bau, itu Busuk Akar (Root Rot). Penyebabnya: Overwatering. Solusi: Bongkar tanaman, potong akar busuk (hitam), biarkan kering angin 2 hari, tanam ulang di media baru yang kering.',
        image: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Panen Gel', 
        content: 'Panen hanya daun yang paling tua (paling bawah/luar). Potong pangkal daun dengan pisau tajam. Jangan memetik daun muda di tengah karena itu titik tumbuh. Cuci lendir kuning (lateks) sebelum mengambil gel beningnya.',
        image: 'https://images.unsplash.com/photo-1563493206460-706366834b6e?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Manfaat Kesehatan', 
        content: 'Gel lidah buaya murni bisa dioleskan untuk luka bakar ringan, pelembap kulit, atau masker rambut. Jika dikonsumsi, pastikan diolah dengan benar (hilangkan getah kuning) karena getah kuning bisa menyebabkan sakit perut.',
        image: 'https://images.unsplash.com/photo-1596547609952-3758a695c9a4?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Lidah buaya termasuk jenis tanaman?', options: ['Paku-pakuan', 'Sukulen (Penyimpan Air)', 'Tanaman Air', 'Gulma'], correctAnswer: 1 },
      { question: 'Apa tanda lidah buaya terlalu banyak disiram?', options: ['Daun tebal', 'Daun merah', 'Pangkal daun lembek & busuk', 'Berbunga'], correctAnswer: 2 },
      { question: 'Media tanam terbaik untuk lidah buaya adalah?', options: ['Tanah liat basah', 'Pasir malang/Sekam (Porous)', 'Lumpur', 'Air penuh'], correctAnswer: 1 },
      { question: 'Bagaimana cara memanen daun lidah buaya?', options: ['Potong daun paling muda (tengah)', 'Potong daun paling tua (luar/bawah)', 'Cabut akarnya', 'Potong ujungnya saja'], correctAnswer: 1 },
      { question: 'Jika daun lidah buaya berubah cokelat kemerahan, artinya?', options: ['Kurang air', 'Stres karena matahari terlalu terik', 'Kena hama', 'Siap panen'], correctAnswer: 1 },
    ]
  },

  // =========================================
  // 11. TEMULAWAK
  // =========================================
  {
    id: 'temulawak',
    title: 'Budidaya Temulawak',
    description: 'Tanaman asli Indonesia berkhasiat tinggi. Teknik menanam agar rimpang besar.',
    category: 'Tanaman Obat',
    level: 'Menengah',
    duration: '50 Menit',
    image: 'https://i.ibb.co.com/qXcpFF3/unnamed.jpg?q=80&w=800&auto=format&fit=crop', // Ilustrasi Curcuma
    materi: [
      { 
        title: '1. Raja Obat Asli Indonesia', 
        content: 'Temulawak (Curcuma zanthorrhiza) adalah tanaman asli Indonesia yang punya khasiat menjaga fungsi hati (liver) dan nafsu makan. Rimpangnya lebih besar dari kunyit, berwarna oranye-kuning, dan memiliki aroma tajam yang khas.',
        image: 'https://images.unsplash.com/photo-1629822965747-06c273292446?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Pemilihan Bibit: Induk vs Anakan', 
        content: 'Bibit terbaik berasal dari "Rimpang Induk" (umbi utama yang bulat besar). Rimpang induk menghasilkan tanaman yang kuat dan rimpang besar. Bibit dari "Rimpang Anakan" (jari-jari) juga bisa, tapi hasilnya tidak sebesar induk. Potong bibit yang punya 2-3 mata tunas.',
        image: 'https://images.unsplash.com/photo-1615485500704-8e99099928b3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Waktu Tanam Ideal', 
        content: 'Waktu terbaik menanam temulawak adalah AWAL MUSIM HUJAN. Tanaman ini butuh air banyak di fase vegetatif (daun) dan butuh musim kemarau di akhir untuk pematangan rimpang. Siklus hidupnya alami mengikuti musim.',
        image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Pengolahan Lahan/Media', 
        content: 'Temulawak butuh media tanah yang gembur sedalam 30 cm. Cangkul tanah, bersihkan gulma, dan campurkan pupuk kandang matang (2-3 kg per lubang tanam). Jika di polybag, gunakan ukuran minimal 50x50 cm agar rimpang bisa berkembang.',
        image: 'https://images.unsplash.com/photo-1592187270271-9a4b84faa228?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Penanaman', 
        content: 'Tanam bibit sedalam 5-7 cm dengan mata tunas menghadap ke atas. Jarak tanam ideal di kebun adalah 50x60 cm. Jangan terlalu rapat karena daun temulawak lebar dan bisa saling menutupi sinar matahari.',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pemeliharaan Gulma', 
        content: 'Temulawak kalah bersaing dengan rumput liar di 3 bulan pertama. Lakukan penyiangan (cabut rumput) rutin. Hati-hati saat mencangkul rumput di sekitar tanaman agar tidak melukai akar rimpang yang sedang tumbuh.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pembumbunan', 
        content: 'Sama seperti jahe dan kunyit, temulawak butuh pembumbunan. Timbun pangkal batang dengan tanah di sekitarnya saat tanaman usia 3-4 bulan. Ini merangsang pembentukan rimpang anakan yang banyak.',
        image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Pemupukan Organik', 
        content: 'Temulawak merespon sangat baik terhadap pupuk kandang/kompos. Tambahkan pupuk susulan saat usia 2 bulan dan 4 bulan. Hindari pupuk kimia berlebih jika tujuannya untuk tanaman obat herbal.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Hama Lalat Rimpang', 
        content: 'Hama yang sering menyerang adalah lalat rimpang (Mimegralla coeruleifrons). Larvanya memakan rimpang hingga busuk. Pencegahan: Pembumbunan yang baik agar rimpang tertutup tanah rapat dan tidak tercium lalat.',
        image: 'https://images.unsplash.com/photo-1586953229671-e97d19129df5?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen (Dormansi)', 
        content: 'Temulawak dipanen saat masuk fase "Dormansi" (mati suri) di musim kemarau, sekitar usia 9-10 bulan. Daun mengering dan rontok. Jangan panen saat daun masih hijau segar karena kadar pati dan kurkumin belum maksimal.',
        image: 'https://images.unsplash.com/photo-1635843104672-031d279d0121?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Bibit temulawak terbaik berasal dari bagian?', options: ['Daun', 'Akar serabut', 'Rimpang Induk (Empu)', 'Bunga'], correctAnswer: 2 },
      { question: 'Kapan waktu tanam temulawak yang paling tepat?', options: ['Awal musim kemarau', 'Awal musim hujan', 'Puncak musim hujan', 'Saat panen raya'], correctAnswer: 1 },
      { question: 'Jarak tanam ideal temulawak di kebun adalah?', options: ['10x10 cm', '50x60 cm', '2x2 meter', 'Rapat sekali'], correctAnswer: 1 },
      { question: 'Tanda temulawak siap panen adalah?', options: ['Berbunga indah', 'Daun hijau lebat', 'Masuk fase dormansi (daun kering)', 'Batang membesar'], correctAnswer: 2 },
      { question: 'Pembumbunan pada temulawak bertujuan untuk?', options: ['Mencegah lalat rimpang & perbanyak rimpang', 'Hiasan', 'Menahan air', 'Mengurangi pupuk'], correctAnswer: 0 },
    ]
  },
  // =========================================
  // 12. LIDAH MERTUA (SANSEVIERIA)
  // =========================================
  {
    id: 'lidahmertua',
    title: 'Lidah Mertua (Sansevieria)',
    description: 'Tanaman hias penyerap polusi udara terbaik yang minim perawatan.',
    category: 'Tanaman Hias',
    level: 'Pemula',
    duration: '30 Menit',
    image: 'https://i.ibb.co.com/cSQLgLCr/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Si "Penyaring Udara" Alami', 
        content: 'Lidah Mertua (Sansevieria) dinobatkan NASA sebagai salah satu tanaman terbaik penyerap racun udara (seperti formaldehida dan benzena). Ia juga unik karena melepaskan oksigen di malam hari, sehingga sangat cocok diletakkan di kamar tidur.',
        image: 'https://images.unsplash.com/photo-1629196914612-4c2c776c4e09?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Memilih Jenis', 
        content: 'Ada banyak jenis Sansevieria. Yang populer adalah *Sansevieria trifasciata* (daun panjang tegak) dan *Sansevieria hahnii* (daun pendek membentuk sarang burung). Pilih bibit yang daunnya keras, tegak, dan warnanya cerah tidak kusam.',
        image: 'https://images.unsplash.com/photo-1598322056633-91147924729f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Media Tanam Porous', 
        content: 'Musuh utama Lidah Mertua adalah busuk akar akibat tanah basah. Gunakan media tanam kaktus atau racikan sendiri: Pasir Malang : Sekam Bakar : Tanah (2:1:1). Media harus sangat cepat meloloskan air (porous).',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Pemilihan Pot', 
        content: 'Tanaman ini suka kondisi akar yang padat (root bound), jadi jangan gunakan pot yang terlalu besar. Pot tanah liat atau keramik dengan lubang drainase yang baik adalah pilihan terbaik untuk menjaga kelembapan tanah tetap rendah.',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menanam', 
        content: 'Isi pot dengan media tanam 1/3 bagian. Masukkan tanaman, pastikan posisi tegak. Timbun sisa ruang dengan media hingga leher akar. Jangan menimbun terlalu dalam agar daun tidak busuk. Padatkan sedikit agar tanaman kokoh.',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Cahaya & Penempatan', 
        content: 'Lidah Mertua sangat toleran. Bisa hidup di matahari terik, bisa juga di dalam ruangan minim cahaya. Namun, pertumbuhan terbaik didapat di cahaya terang tidak langsung (bright indirect light).',
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d71321?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Penyiraman "Abaikan"', 
        content: 'Prinsipnya "Semakin jarang disiram, semakin sehat". Siram hanya ketika tanah benar-benar kering kerontang (cek dengan tusuk sate/jari). Biasanya cukup 2-3 minggu sekali. Jika ragu, lebih baik JANGAN siram.',
        image: 'https://images.unsplash.com/photo-1520302630591-16b96b605696?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Pemupukan', 
        content: 'Tanaman ini tumbuh lambat dan tidak rakus hara. Berikan pupuk NPK slow release (butiran) cukup 3-4 bulan sekali. Taburkan sedikit saja di pinggir pot, jauhkan dari batang utama.',
        image: 'https://images.unsplash.com/photo-1599598424692-23f27f8709e3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Perbanyakan (Stek Daun)', 
        content: 'Sangat mudah diperbanyak! Potong sehelai daun tua menjadi beberapa bagian (5-10 cm). Tancapkan potongan daun (pastikan arah atas-bawah tidak terbalik) ke media pasir lembap atau air. Akar akan tumbuh dalam 1 bulan.',
        image: 'https://images.unsplash.com/photo-1612363148967-85203e1c6b4e?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Masalah Umum', 
        content: 'Jika daun lembek/berair dan bau, itu busuk akar (kebanyakan air). Jika daun keriput, itu dehidrasi (kurang air). Jika ujung daun cokelat kering, mungkin karena udara terlalu panas atau terpapar AC langsung.',
        image: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Kelebihan utama Lidah Mertua di kamar tidur adalah?', options: ['Mengeluarkan CO2', 'Melepaskan oksigen di malam hari', 'Menyebarkan bau wangi', 'Menangkap nyamuk'], correctAnswer: 1 },
      { question: 'Penyebab utama kematian Lidah Mertua adalah?', options: ['Kurang air', 'Kebanyakan air (Overwatering)', 'Kurang pupuk', 'Kurang sinar matahari'], correctAnswer: 1 },
      { question: 'Media tanam terbaik untuk Lidah Mertua adalah?', options: ['Tanah Liat Padat', 'Pasir Malang / Media Porous', 'Lumpur', 'Air Penuh'], correctAnswer: 1 },
      { question: 'Bagaimana cara memperbanyak Lidah Mertua?', options: ['Cangkok batang', 'Stek daun', 'Biji', 'Okulasi'], correctAnswer: 1 },
      { question: 'Frekuensi penyiraman yang ideal adalah?', options: ['Setiap hari', 'Setiap pagi & sore', 'Saat tanah kering kerontang (2-3 minggu sekali)', 'Setiap jam'], correctAnswer: 2 },
    ]
  },

  // =========================================
  // 13. SIRIH GADING (POTHOS)
  // =========================================
  {
    id: 'sirihgading',
    title: 'Sirih Gading (Devil\'s Ivy)',
    description: 'Tanaman hias merambat yang sangat tangguh, bisa hidup di air maupun tanah.',
    category: 'Tanaman Hias',
    level: 'Pemula',
    duration: '35 Menit',
    image: 'https://i.ibb.co.com/zVfyGdhC/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Tanaman "Tahan Banting"', 
        content: 'Sirih Gading (Epipremnum aureum) dijuluki "Devil\'s Ivy" karena sangat sulit mati dan bisa tumbuh di kondisi minim cahaya sekalipun. Tanaman ini merambat dengan daun berbentuk hati yang cantik, cocok untuk pemula.',
        image: 'https://images.unsplash.com/photo-1616682226293-6627067d7cb9?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Media Tanam: Tanah vs Air', 
        content: 'Sirih gading sangat fleksibel. Bisa ditanam di pot dengan media tanah gembur, ATAU cukup ditaruh di vas/botol berisi air bersih (water propagation). Jika di air, ganti air seminggu sekali agar jentik nyamuk tidak bersarang.',
        image: 'https://images.unsplash.com/photo-1597850239682-9694770267d3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Cahaya: Variegata', 
        content: 'Sirih gading bisa hidup di tempat gelap (lampu neon), tapi corak warna (variegata) putih/kuningnya akan pudar menjadi hijau polos. Agar corak warnanya "menor", letakkan di tempat terang tapi tidak kena matahari langsung.',
        image: 'https://images.unsplash.com/photo-1605218427306-252af8611590?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Penyiraman (Tanah)', 
        content: 'Jika ditanam di tanah, siramlah saat permukaan tanah (top soil) sudah kering. Sirih gading lebih toleran terhadap kekeringan daripada kebanjiran. Tanda haus: daun sedikit layu/lemas. Setelah disiram, ia akan segar kembali.',
        image: 'https://images.unsplash.com/photo-1591857177580-dc82b9e4e11c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Turus Penyangga', 
        content: 'Sirih gading adalah tanaman pemanjat. Jika ingin daunnya tumbuh besar (giant), berikan turus (tiang penyangga dari sabut kelapa/lumut). Akar angin akan menempel di turus dan menyerap nutrisi tambahan, membuat daun makin lebar.',
        image: 'https://images.unsplash.com/photo-1632806727299-a3676c02976c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Tanaman Gantung', 
        content: 'Selain memanjat, sirih gading sangat cantik dijadikan tanaman gantung (trailing). Biarkan batangnya menjuntai ke bawah dari rak atau pot gantung. Potong ujungnya secara rutin agar percabangan makin rimbun.',
        image: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pemupukan', 
        content: 'Gunakan pupuk cair daun (seperti vitamin B1 tanaman atau NPK cair) sebulan sekali. Semprotkan ke daun dan media tanam. Jika menanam di media air, teteskan nutrisi hidroponik sedikit saja ke dalam air vas.',
        image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Perbanyakan (Stek Batang)', 
        content: 'Sangat mudah! Potong batang yang memiliki "akar angin" (bintil akar di ruas batang). Masukkan potongan itu ke air atau tancapkan langsung ke tanah lembap. Akar baru akan tumbuh dalam hitungan hari.',
        image: 'https://images.unsplash.com/photo-1612363148967-85203e1c6b4e?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Membersihkan Daun', 
        content: 'Karena daunnya lebar, debu sering menempel dan menghambat fotosintesis. Lap daun secara rutin dengan kain basah atau tisu. Daun yang bersih akan terlihat mengkilap dan sehat.',
        image: 'https://images.unsplash.com/photo-1596547609952-3758a695c9a4?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Toksisitas (Penting)', 
        content: 'Hati-hati, Sirih Gading mengandung kalsium oksalat yang beracun jika dimakan. Jauhkan dari jangkauan anak-anak dan hewan peliharaan (kucing/anjing) karena bisa menyebabkan mulut bengkak dan muntah jika tergigit.',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Sirih gading bisa ditanam di media apa saja?', options: ['Hanya tanah', 'Tanah dan Air', 'Hanya pasir', 'Minyak'], correctAnswer: 1 },
      { question: 'Agar corak warna (variegata) daun keluar maksimal, tanaman butuh?', options: ['Tempat gelap total', 'Cahaya terang tidak langsung', 'Matahari terik seharian', 'Disiram air panas'], correctAnswer: 1 },
      { question: 'Bagaimana cara membuat daun sirih gading tumbuh besar?', options: ['Diberi turus (tiang penyangga)', 'Digantung', 'Dipotong habis', 'Disimpan di kulkas'], correctAnswer: 0 },
      { question: 'Tanda tanaman sirih gading haus adalah?', options: ['Daun menguning', 'Daun lemas/layu', 'Batang membusuk', 'Muncul bunga'], correctAnswer: 1 },
      { question: 'Bagian tanaman mana yang bisa distek untuk perbanyakan?', options: ['Akar saja', 'Batang yang ada akar anginnya', 'Hanya daun tanpa batang', 'Bunga'], correctAnswer: 1 },
    ]
  },

  // =========================================
  // 14. KAKTUS HIAS
  // =========================================
  {
    id: 'kaktus',
    title: 'Kaktus Hias Mini',
    description: 'Seni merawat tanaman gurun yang imut agar tidak busuk dan rajin berbunga.',
    category: 'Tanaman Hias',
    level: 'Menengah',
    duration: '40 Menit',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengenal Kaktus', 
        content: 'Kaktus adalah tanaman yang berevolusi di gurun kering. Ia menyimpan air di batangnya yang gemuk. Duri kaktus sebenarnya adalah daun yang berubah bentuk untuk mengurangi penguapan. Kesalahan terbesar pemula: merawat kaktus seperti tanaman biasa.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Media Tanam Wajib Porous', 
        content: 'JANGAN pakai tanah kebun biasa! Kaktus butuh media yang sangat poros (air lewat langsung hilang). Gunakan campuran: Pasir Malang (50%) + Sekam Bakar (25%) + Pupuk Kandang/Tanah (25%). Atau beli media tanam khusus kaktus/sukulen siap pakai.',
        image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Pot & Drainase', 
        content: 'Pastikan pot memiliki lubang drainase yang besar. Kaktus benci kakinya terendam air. Pot tanah liat (terracotta) sangat disarankan karena berpori dan membantu menguapkan air dari samping, menjaga media tetap kering.',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Kebutuhan Cahaya', 
        content: 'Kaktus "Gurun" butuh sinar matahari langsung yang terik (direct sun) minimal 4-6 jam agar tumbuh padat dan berduri tajam. Kaktus "Hutan" (seperti kaktus natal) butuh cahaya teduh. Kenali jenis kaktus Anda.',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menyiram', 
        content: 'Siram kaktus hanya ketika media tanam BENAR-BENAR KERING sampai ke dasar pot. Cara siram: Guyur air di media tanam (jangan di badan kaktus jika bisa) sampai air keluar dari lubang bawah. Lakukan 1-2 minggu sekali tergantung cuaca.',
        image: 'https://images.unsplash.com/photo-1520302630591-16b96b605696?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Etolasi (Masalah Cahaya)', 
        content: 'Jika kaktus Anda tumbuh memanjang kurus dan pucat di bagian ujungnya, itu tanda kurang sinar matahari (Etiolasi). Pindahkan segera ke tempat yang lebih terang secara bertahap agar tidak kaget/gosong.',
        image: 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Busuk Batang', 
        content: 'Jika batang kaktus lembek, berair, dan berwarna cokelat/hitam, itu busuk bakteri akibat overwatering. Solusi: Potong bagian yang busuk sampai ketemu jaringan sehat, olesi fungisida, keringkan luka selama seminggu, baru tanam lagi.',
        image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Pemupukan', 
        content: 'Kaktus tumbuh lambat, jadi tidak butuh banyak pupuk. Gunakan pupuk NPK seimbang atau pupuk khusus kaktus (rendah Nitrogen, tinggi Kalium) sebulan sekali hanya pada masa pertumbuhan aktif.',
        image: 'https://images.unsplash.com/photo-1599598424692-23f27f8709e3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Repotting (Ganti Pot)', 
        content: 'Ganti pot (repotting) setiap 1-2 tahun sekali atau jika kaktus sudah terlalu besar untuk potnya. Saat repotting, bersihkan akar dari media lama, potong akar yang mati/kering, dan gunakan media tanam baru yang segar.',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Bunga Kaktus', 
        content: 'Kaktus bisa berbunga indah! Syaratnya: Tanaman harus dewasa, mendapatkan cukup sinar matahari, dan mengalami masa istirahat (kering/dingin) yang cukup. Sabar adalah kuncinya.',
        image: 'https://images.unsplash.com/photo-1554631221-f9603e6808ba?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Apa fungsi duri pada kaktus?', options: ['Hiasan', 'Mengurangi penguapan air & pertahanan diri', 'Menyerap air', 'Fotosintesis'], correctAnswer: 1 },
      { question: 'Media tanam kaktus tidak boleh menggunakan?', options: ['Pasir Malang', 'Sekam Bakar', 'Tanah kebun biasa yang padat', 'Batu apung'], correctAnswer: 2 },
      { question: 'Kapan waktu menyiram kaktus yang tepat?', options: ['Setiap hari', 'Setiap sore', 'Saat media tanam kering total', 'Saat hujan'], correctAnswer: 2 },
      { question: 'Tanda kaktus kekurangan cahaya matahari adalah?', options: ['Tumbuh memanjang kurus (Etiolasi)', 'Berbunga', 'Berwarna merah', 'Membesar bulat'], correctAnswer: 0 },
      { question: 'Jika batang kaktus lembek dan berair, artinya?', options: ['Sehat', 'Busuk akibat kebanyakan air', 'Siap panen', 'Kurang air'], correctAnswer: 1 },
    ]
  },
  // =========================================
  // 15. ALPUKAT (AVOCADO)
  // =========================================
  {
    id: 'alpukat',
    title: 'Budidaya Alpukat Mentega',
    description: 'Panduan menanam alpukat kualitas unggul, baik di kebun maupun dalam pot (Tabulampot) agar cepat berbuah.',
    category: 'Hortikultura',
    level: 'Menengah',
    duration: '60 Menit',
    image: 'https://i.ibb.co.com/N6JJs7S6/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengenal Varietas Unggul', 
        content: 'Jangan menanam biji sembarangan! Untuk hasil terbaik, pilih varietas unggul seperti Alpukat Miki (kulit tebal, anti ulat), Aligator (buah raksasa), atau Mentega (daging tebal kuning). Varietas unggul hasil sambung pucuk bisa berbuah dalam 3-4 tahun, sedangkan dari biji butuh 7-10 tahun.',
        image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Syarat Tumbuh Ideal', 
        content: 'Alpukat tumbuh optimal di ketinggian 200-1000 mdpl dengan curah hujan sedang. Tanah harus gembur, subur, dan tidak tergenang air (drainase baik). Alpukat sangat rentan mati jika akarnya terendam air terus-menerus (busuk akar).',
        image: 'https://images.unsplash.com/photo-1596450523277-2b7be643063f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Persiapan Bibit (Vegetatif)', 
        content: 'Sangat disarankan membeli bibit hasil "Sambung Pucuk" (Grafting) atau Okulasi. Bibit ini membawa sifat induk yang pasti berbuah lebat dan pohonnya tidak terlalu tinggi. Ciri bibit sehat: daun hijau tua mengkilap, sambungan batang menyatu sempurna, dan bebas hama.',
        image: 'https://images.unsplash.com/photo-1596135811059-4ae642dc2249?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Lubang Tanam & Media', 
        content: 'Buat lubang tanam 60x60x60 cm. Biarkan lubang terbuka terkena matahari selama 1-2 minggu untuk mematikan bakteri. Campurkan tanah galian dengan pupuk kandang fermentasi dan sekam padi (perbandingan 1:1:1) sebelum dimasukkan kembali.',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menanam', 
        content: 'Lepaskan polybag bibit dengan hati-hati, jangan sampai bola tanah pecah. Masukkan bibit tegak lurus. Pastikan leher akar (batas batang dan akar) sejajar dengan permukaan tanah atau sedikit lebih tinggi (membuat gundukan/busut) untuk menghindari genangan air di pangkal batang.',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Penyiraman', 
        content: 'Alpukat butuh air tapi benci becek. Siram 1-2 kali sehari saat musim kemarau, terutama di tahun pertama pertumbuhan. Jika kekurangan air saat berbunga, bunga akan rontok total. Gunakan mulsa (jerami/daun kering) di sekitar pangkal batang untuk menjaga kelembapan.',
        image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pemupukan Terjadwal', 
        content: 'Fase Vegetatif (Daun): Berikan NPK seimbang (15-15-15) setiap 3 bulan sekali. Fase Generatif (Bunga/Buah): Berikan pupuk tinggi Kalium (KCL/ZK) dan Fosfor (SP36). Tambahkan pupuk kandang/kompos setahun 2 kali di awal dan akhir musim hujan.',
        image: 'https://images.unsplash.com/photo-1628519592419-781d699971d6?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Pemangkasan (Pruning)', 
        content: 'Lakukan pangkas bentuk sejak dini agar pohon tidak menjulang tinggi (maksimal 3-4 meter). Potong tunas air yang tumbuh di batang bawah. Pangkas juga cabang yang tumbuh ke dalam (saling silang) agar sinar matahari bisa menembus ke seluruh bagian tajuk pohon.',
        image: 'https://images.unsplash.com/photo-1591857177580-dc82b9e4e11c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Hama Ulat Kipat', 
        content: 'Hama yang sering menyerang adalah Ulat Kipat yang bisa menghabiskan daun dalam semalam. Kendalikan dengan insektisida kontak jika parah, atau ambil manual. Waspada juga jamur akar (Phytophthora) yang disebabkan drainase buruk.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen & Pemeraman', 
        content: 'Alpukat adalah buah klimakterik (matang setelah dipetik). Jangan tunggu lembek di pohon! Tanda tua: kulit kusam tidak mengkilap, dan jika diguncang terdengar bunyi biji koclak. Petik, lalu peram 3-7 hari hingga matang empuk.',
        image: 'https://images.unsplash.com/photo-1523049673856-3824553d27fc?q=80&w=800&auto=format&fit=crop'
      },
    ],
    quiz: [
      { question: 'Mengapa disarankan menanam bibit hasil sambung pucuk?', options: ['Agar pohon tinggi raksasa', 'Agar cepat berbuah (3-4 tahun) & sifat unggul', 'Agar daunnya berwarna warni', 'Agar buahnya masam'], correctAnswer: 1 },
      { question: 'Penyebab utama kematian pohon alpukat muda adalah?', options: ['Kekeringan', 'Tergenang air (Busuk Akar)', 'Kebanyakan sinar matahari', 'Angin kencang'], correctAnswer: 1 },
      { question: 'Kapan waktu terbaik memetik buah alpukat?', options: ['Saat kulit sudah lembek di pohon', 'Saat kulit kusam & biji berbunyi jika diguncang', 'Saat buah masih kecil', 'Saat bunga baru mekar'], correctAnswer: 1 },
      { question: 'Apa tujuan pemangkasan (pruning) pada alpukat?', options: ['Membunuh pohon', 'Agar sinar matahari masuk merata & pohon tidak terlalu tinggi', 'Menghabiskan nutrisi', 'Mengundang hama'], correctAnswer: 1 },
      { question: 'Posisi menanam bibit alpukat yang benar adalah?', options: ['Tenggelam dalam tanah', 'Sejajar permukaan tanah/dibuat gundukan', 'Akar di atas', 'Miring 90 derajat'], correctAnswer: 1 },
    ]
  },
];