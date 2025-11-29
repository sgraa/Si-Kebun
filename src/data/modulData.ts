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
  level: 'Pemula' | 'Menengah' | 'Ahli';
  duration: string;
  image: string; // Gambar Cover Modul
  // Update: Menambahkan properti 'image' opsional di setiap langkah materi
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
    level: 'Pemula',
    duration: '60 Menit',
    image: 'https://i.ibb.co.com/Fq6LHK8F/unnamed.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengapa Cabai Rawit?', 
        content: 'Cabai rawit (Capsicum frutescens) adalah komoditas strategis. Tanaman ini bersifat "Perennial" (tahunan), bisa hidup dan berbuah hingga 2-3 tahun. Kuncinya adalah sinar matahari penuh (6-8 jam/hari).',
        image: 'https://i.ibb.co.com/4533T43/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Memilih Benih Berkualitas', 
        content: 'Pilih buah cabai yang tua (merah sempurna). Ambil biji bagian tengah karena paling bernas. Jemur biji di bawah sinar matahari tidak langsung selama 3 jam.',
        image: 'https://i.ibb.co.com/N69qR6Zc/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Seleksi Benih (Water Test)', 
        content: 'Masukkan biji ke dalam air hangat kuku. Diamkan 15 menit. Biji yang MENGAPUNG adalah biji mati, buang. Ambil hanya biji yang TENGGELAM.',
        image: 'https://i.ibb.co.com/S4BKLYLX/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Teknik Penyemaian', 
        content: 'Gunakan tray semai. Media: Tanah saring : Pupuk Kandang halus (1:1). Tanam 1 biji per lubang, tutup tipis tanah. Simpan di tempat teduh.',
        image: 'https://i.ibb.co.com/BHxSJmhH/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Perawatan Bibit (Nursery)', 
        content: 'Setelah muncul tunas, WAJIB kenalkan matahari pagi (jam 7-9) agar batang tidak kutilang (kurus tinggi). Jaga kelembapan dengan spray halus.',
        image: 'https://i.ibb.co.com/MDKnSWcz/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pindah Tanam (Transplanting)', 
        content: 'Pindah tanam saat usia 3-4 minggu (4 daun sejati). Lakukan pada SORE HARI agar tanaman tidak stres terkena panas matahari langsung.',
        image: 'https://i.ibb.co.com/9z3JnHy/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Media Tanam Pot Permanen', 
        content: 'Rumus media tanam: 1 Tanah : 1 Sekam Bakar : 1 Pupuk Kandang. Sekam bakar penting agar tanah gembur dan akar mudah menembus.',
        image: 'https://i.ibb.co.com/fz9KFC3S/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Fase Vegetatif & Generatif', 
        content: 'Fase awal beri pupuk tinggi Nitrogen (daun). Saat berbunga, ganti pupuk tinggi Fosfor & Kalium (MKP) agar bunga tidak rontok.',
        image: 'https://i.ibb.co.com/PsmJQMWD/ssss.png?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Perempelan (Pruning)', 
        content: 'Buang semua "tunas air" yang tumbuh di ketiak daun di bawah cabang Y pertama. Agar nutrisi fokus ke pembentukan buah di atas.',
        image: 'https://i.ibb.co.com/SD63wgc6/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Panen saat usia 80-90 hari. Petik buah yang merah beserta tangkainya. Lakukan panen di pagi hari saat buah masih segar.',
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
    level: 'Menengah',
    duration: '45 Menit',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengenal Tomat Ceri', 
        content: 'Tomat ceri berukuran kecil tapi manis. Tanaman ini "Indeterminate", batangnya terus tumbuh memanjang dan butuh penopang.',
        image: 'https://i.ibb.co.com/bgPN9VMX/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Syarat Mutlak: Matahari', 
        content: 'Tomat butuh 6-8 jam matahari. Jika teduh, tanaman kurus dan gagal buah. Pastikan lokasi pot sangat terang.',
        image: 'https://i.ibb.co.com/d0G9WLFH/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Menanam Batang Dalam', 
        content: 'Saat pindah tanam, kubur sebagian batang bawah tomat. Batang yang tertimbun akan mengeluarkan akar, membuat tanaman lebih kuat.',
        image: 'https://i.ibb.co.com/cK7D2tqC/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Pemasangan Ajir (Staking)', 
        content: 'Pasang tongkat kayu/bambu setinggi 1.5m segera setelah tanam. Jangan tunda agar akar tidak rusak tertusuk nanti.',
        image: 'https://i.ibb.co.com/ymc7VtJ9/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Teknik Penyiraman', 
        content: 'Siram TANAHNYA, BUKAN DAUNNYA. Air di daun memicu jamur. Jaga penyiraman konsisten agar buah tidak pecah (cracking).',
        image: 'https://i.ibb.co.com/R4Sz4pmP/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pewiwilan (Pruning)', 
        content: 'Buang tunas air di ketiak daun. Sisakan hanya 1 batang utama (single stem) agar buah besar dan sirkulasi udara lancar.',
        image: 'https://i.ibb.co.com/G4HhdRJF/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Masalah Blossom End Rot', 
        content: 'Jika pantat buah hitam busuk, itu kurang Kalsium. Tambahkan cangkang telur tumbuk atau kapur dolomit ke tanah.',
        image: 'https://i.ibb.co.com/4nPyLLrV/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Polinasi (Penyerbukan)', 
        content: 'Bantu penyerbukan dengan mengetuk-ngetuk batang bunga perlahan di pagi hari agar serbuk sari jatuh ke kepala putik.',
        image: 'https://i.ibb.co.com/kgSB67QQ/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Topping', 
        content: 'Potong pucuk utama jika tanaman sudah terlalu tinggi atau mencapai ujung ajir, agar nutrisi lari ke buah.',
        image: 'https://i.ibb.co.com/WvDzZsWq/unnamed.jpg?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Panen saat buah berwarna merah/oranye. Biarkan matang di pohon (vine-ripened) untuk rasa termanis.',
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
    level: 'Pemula',
    duration: '30 Menit',
    image: 'https://i.ibb.co/WWQYF9Mk/3-sawi-wick-system.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Konsep Hidroponik Wick', 
        content: 'Sistem Wick memanfaatkan daya kapilaritas sumbu (kain flanel) untuk menyedot nutrisi dari bak ke akar. Tanpa listrik, hening, murah.',
        image: 'https://images.unsplash.com/photo-1505471768190-275e2f970f2c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Media Tanam: Rockwool', 
        content: 'Gunakan Rockwool (serat batuan). Potong dadu 2.5cm. Basahi dengan air, jangan diperas agar rongga udara tetap ada.',
        image: 'https://images.unsplash.com/photo-1591857177580-dc82b9e4e11c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Fase Kritis: Sprout', 
        content: 'Masukkan benih ke rockwool basah. Simpan gelap. Begitu pecah benih (putih), WAJIB JEMUR matahari agar tidak kutilang.',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Nutrisi AB Mix', 
        content: 'Gunakan "AB Mix Sayuran Daun". Larutkan Stok A dan B terpisah. Jangan dicampur saat pekat agar tidak menggumpal.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Rakit Bak & Netpot', 
        content: 'Siapkan bak plastik dan styrofoam berlubang. Pasang kain flanel di netpot menjulur ke bawah sebagai sumbu.',
        image: 'https://images.unsplash.com/photo-1556776587-c335e69e403d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Pindah Tanam', 
        content: 'Pindahkan bibit (4 daun) ke netpot. Masukkan ke lubang styrofoam. Pastikan flanel menyentuh air nutrisi.',
        image: 'https://images.unsplash.com/photo-1627914971260-5628b031b264?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Jarak Air (Oksigen)', 
        content: 'Beri jarak 1-2 cm antara dasar netpot dan permukaan air nutrisi. Akar butuh ruang udara untuk bernapas (oksigen).',
        image: 'https://images.unsplash.com/photo-1581578013564-9aa6f81e3c4a?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Perawatan Harian', 
        content: 'Cek bak nutrisi. Jika surut, tambah larutan baru. Pastikan kena matahari min 5 jam agar daun lebar hijau.',
        image: 'https://images.unsplash.com/photo-1627914971260-5628b031b264?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Hama', 
        content: 'Ambil ulat manual. Jika ada kutu, semprot air sabun tipis atau pestisida nabati.',
        image: 'https://images.unsplash.com/photo-1596568359553-a56de6970068?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Panen usia 30-40 hari. Cabut beserta akarnya atau potong pangkal. Cuci bersih netpot sebelum dipakai lagi.',
        image: 'https://images.unsplash.com/photo-1524593166156-312f362cada0?q=80&w=800&auto=format&fit=crop'
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
    level: 'Ahli',
    duration: '90 Menit',
    image: 'https://i.ibb.co/1YdBQjKd/4-anggrek-bulan.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Sifat Epifit', 
        content: 'Anggrek menempel di pohon, bukan di tanah. Kuncinya adalah SIRKULASI UDARA di akar. Jangan pakai tanah padat.',
        image: 'https://images.unsplash.com/photo-1545663737-1c699920b7bc?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Media Tanam', 
        content: 'Lingkungan kering: Pakai Moss/Sabut Kelapa (simpan air). Lingkungan lembap: Pakai Arang/Pakis (drainase cepat).',
        image: 'https://images.unsplash.com/photo-1603206277266-93049534e3fb?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Pot', 
        content: 'Gunakan pot transparan atau pot tanah liat banyak lubang samping. Akar butuh napas dan fotosintesis.',
        image: 'https://images.unsplash.com/photo-1602613977930-b302624a49c9?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Pencahayaan', 
        content: 'Tidak tahan matahari langsung (gosong). Suka cahaya teduh terang (teras/paranet). Ciri pas: Daun hijau cerah.',
        image: 'https://images.unsplash.com/photo-1599598425947-32c744dc922d?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menyiram', 
        content: 'Siram HANYA saat media kering. Akar hijau=kenyang (jangan siram). Akar putih=haus (siram). Hindari air di ketiak daun.',
        image: 'https://images.unsplash.com/photo-1563725676317-a0684f092e46?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Sirkulasi Udara', 
        content: 'Gunakan kipas angin kecil jika indoor. Angin mencegah jamur dan bakteri di media yang lembap.',
        image: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pemupukan', 
        content: 'Pupuk NPK cair dosis sangat rendah (1/4 dosis), semprot seminggu sekali ke daun dan akar.',
        image: 'https://images.unsplash.com/photo-1620126743958-8b9a9aa89267?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Merangsang Bunga', 
        content: 'Anggrek butuh stres suhu (perbedaan suhu siang-malam ekstrem) untuk berbunga. Taruh di tempat sejuk saat malam.',
        image: 'https://images.unsplash.com/photo-1566915843477-8d54641977b1?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Pasca Bunga', 
        content: 'Potong tangkai bunga di atas ruas tidur (2 cm). Bisa tumbuh bunga baru atau anakan (keiki).',
        image: 'https://images.unsplash.com/photo-1598528738936-c50861ccf95f?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Penyakit', 
        content: 'Daun lembek berair = busuk bakteri. Potong bagian busuk, beri fungisida/kayu manis, kurangi air.',
        image: 'https://images.unsplash.com/photo-1586953229671-e97d19129df5?q=80&w=800&auto=format&fit=crop'
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
    level: 'Pemula',
    duration: '50 Menit',
    image: 'https://i.ibb.co/zVnnv45h/5-jahe-merah-organik.jpg?q=80&w=800&auto=format&fit=crop',
    materi: [
      { 
        title: '1. Mengapa Jahe Merah?', 
        content: 'Lebih pedas dan mahal dibanding jahe biasa. Cocok ditanam di polybag vertikal untuk hasil maksimal.',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '2. Syarat Bibit', 
        content: 'Pilih rimpang tua (10 bulan+), kulit cerah, punya 2-3 mata tunas. Jangan pakai jahe muda pasar.',
        image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '3. Pengecambahan', 
        content: 'Hamparkan rimpang di jerami lembap. Siram tiap hari. Tunas muncul dalam 2-3 minggu.',
        image: 'https://images.unsplash.com/photo-1615485500704-8e99099928b3?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '4. Polybag & Media', 
        content: 'Gunakan polybag besar/karung. Media: Tanah : Pupuk Kandang : Sekam (1:1:1). Isi 1/4 bagian saja dulu!',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '5. Cara Menanam', 
        content: 'Tanam rimpang bertunas sedalam 3-5 cm, tunas menghadap ke ATAS. 2-3 rimpang per polybag.',
        image: 'https://images.unsplash.com/photo-1592187270271-9a4b84faa228?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '6. Penempatan', 
        content: 'Muda (0-3 bulan): butuh naungan. Dewasa (4+ bulan): butuh matahari penuh agar rimpang besar.',
        image: 'https://images.unsplash.com/photo-1591857177580-dc82b9e4e11c?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '7. Pembumbunan (RAHASIA)', 
        content: 'Setiap batang meninggi, tambah tanah+pupuk ke polybag (timbun). Lakukan bertahap sampai penuh. Ini melipatgandakan hasil.',
        image: 'https://images.unsplash.com/photo-1622383563227-0440114a8520?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '8. Penyiraman', 
        content: 'Jahe tidak suka becek (busuk). Siram secukupnya agar lembap. Pastikan drainase lancar.',
        image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '9. Hama', 
        content: 'Bercak daun kuning (jamur). Semprot fungisida hayati atau pestisida nabati. Jaga kebersihan polybag.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=800&auto=format&fit=crop'
      },
      { 
        title: '10. Panen', 
        content: 'Panen usia 10-12 bulan saat daun menguning/kering. Bongkar polybag. 1 polybag bisa hasilkan 5-10kg.',
        image: 'https://images.unsplash.com/photo-1635843104672-031d279d0121?q=80&w=800&auto=format&fit=crop'
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