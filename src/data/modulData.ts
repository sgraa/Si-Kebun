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
];