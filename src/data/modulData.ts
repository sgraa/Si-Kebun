// src/data/modulData.ts

export interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: number; // Index jawaban benar (0-3)
}

export interface ModulItem {
  id: string;
  title: string;
  description: string;
  level: 'Pemula' | 'Menengah' | 'Ahli';
  duration: string;
  image: string;
  materi: { title: string; content: string }[]; 
  quiz: QuizItem[]; 
}

export const modules: ModulItem[] = [
  // --- 1. CABAI RAWIT ---
  {
    id: 'cabe',
    title: 'Menanam Cabai Rawit',
    description: 'Panduan lengkap menanam cabai di pot agar berbuah lebat.',
    level: 'Pemula',
    duration: '60 Menit',
    image: 'https://i.ibb.co.com/xScPGXtt/1-cabe-rawit.jpg?q=80&w=600&auto=format&fit=crop',
    materi: [
      { title: '1. Pengenalan Cabai Rawit', content: 'Cabai rawit (Capsicum frutescens) adalah tanaman yang sangat cocok ditanam di iklim tropis Indonesia. Tanaman ini menyukai sinar matahari penuh dan bisa hidup bertahun-tahun jika dirawat dengan benar.' },
      { title: '2. Persiapan Benih', content: 'Pilih buah cabai yang tua (merah menyala) dan sehat. Belah buahnya, ambil bijinya, lalu jemur di bawah sinar matahari selama 3-4 jam hingga kering angin (tidak terlalu gosong).' },
      { title: '3. Seleksi Benih', content: 'Rendam biji cabai dalam air hangat kuku selama 15 menit. Buang biji yang mengapung karena itu kopong/mati. Ambil biji yang tenggelam untuk ditanam.' },
      { title: '4. Media Semai', content: 'Siapkan wadah semai (bisa tray atau polybag kecil). Campurkan tanah halus dan pupuk kandang yang sudah diayak dengan perbandingan 1:1. Basahi sedikit agar lembap.' },
      { title: '5. Proses Penyemaian', content: 'Tebar benih di media semai, lalu tutup tipis dengan tanah. Letakkan di tempat teduh. Siram dengan spray halus setiap pagi. Benih akan berkecambah dalam 5-7 hari.' },
      { title: '6. Pindah Tanam (Transplanting)', content: 'Setelah bibit memiliki 4-5 daun sejati (usia sekitar 3-4 minggu), pindahkan ke pot besar/polybag diameter 30cm. Lakukan pemindahan pada sore hari agar tanaman tidak layu terkena matahari terik.' },
      { title: '7. Media Tanam Pot Besar', content: 'Untuk pot besar, gunakan campuran Tanah : Sekam Bakar : Pupuk Kandang dengan perbandingan 1:1:1. Pastikan media gembur (porous) agar air tidak menggenang.' },
      { title: '8. Perawatan & Penyiraman', content: 'Siram tanaman 2 kali sehari (pagi & sore) jika cuaca panas. Jika musim hujan, kurangi penyiraman. Pastikan air tidak menggenang di pot karena bisa menyebabkan akar busuk.' },
      { title: '9. Pemupukan & Pruning', content: 'Berikan pupuk NPK 16-16-16 (setengah sendok teh dilarutkan air) setiap 2 minggu sekali. Lakukan perempelan (membuang tunas air di ketiak daun) agar nutrisi fokus ke buah.' },
      { title: '10. Masa Panen', content: 'Cabai mulai berbunga di usia 2 bulan dan bisa dipanen saat usia 3 bulan. Petik buah yang sudah merah atau oranye beserta tangkainya agar tanaman awet.' },
    ],
    quiz: [
      { question: 'Berapa perbandingan media tanam yang ideal untuk cabai?', options: ['1:1:1 (Tanah:Sekam:Pupuk)', '3:1:1 (Tanah:Pasir:Batu)', 'Hanya Tanah Liat', 'Hanya Pasir'], correctAnswer: 0 },
      { question: 'Manakah benih cabai yang berkualitas bagus?', options: ['Yang mengapung di air', 'Yang tenggelam di air', 'Yang berwarna hitam pekat', 'Yang ukurannya sangat kecil'], correctAnswer: 1 },
      { question: 'Kapan waktu terbaik memindahkan bibit ke pot besar?', options: ['Siang bolong', 'Tengah malam', 'Sore hari', 'Pagi buta'], correctAnswer: 2 },
      { question: 'Apa tujuan perempelan (pruning) tunas air?', options: ['Agar tanaman mati', 'Agar nutrisi fokus ke pembuahan', 'Agar daun menjadi kuning', 'Agar akar cepat busuk'], correctAnswer: 1 },
      { question: 'Berapa lama rata-rata cabai bisa mulai dipanen?', options: ['1 Bulan', '2 Minggu', '3 Bulan', '1 Tahun'], correctAnswer: 2 },
    ]
  },

  // --- 2. TOMAT CERI ---
  {
    id: 'tomat',
    title: 'Budidaya Tomat Ceri',
    description: 'Cara menanam tomat ceri manis di lahan sempit atau pot.',
    level: 'Menengah',
    duration: '45 Menit',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=600&auto=format&fit=crop',
    materi: [
      { title: '1. Mengenal Tomat Ceri', content: 'Tomat ceri memiliki buah berukuran kecil namun rasanya lebih manis dibanding tomat sayur biasa. Tanaman ini sangat produktif dan cocok untuk tabulampot.' },
      { title: '2. Syarat Tumbuh', content: 'Tomat butuh sinar matahari minimal 6-8 jam sehari. Jangan menanam di tempat yang terlalu teduh karena tanaman akan kurus tinggi (etiolasi) dan sulit berbuah.' },
      { title: '3. Persiapan Pot & Ajir', content: 'Siapkan pot ukuran minimal 35cm. Siapkan juga Ajir (kayu penyangga) setinggi 1 meter, karena batang tomat bersifat merambat dan butuh sandaran.' },
      { title: '4. Penyemaian', content: 'Sama seperti cabai, semai benih di tray. Jaga kelembapan. Tomat tumbuh sangat cepat, biasanya 3 hari sudah pecah benih.' },
      { title: '5. Pindah Tanam', content: 'Pindahkan bibit saat berusia 3 minggu ke pot besar. Tanam batangnya agak dalam (sebagian batang tertimbun tanah) agar akar tumbuh lebih banyak dari batang tersebut.' },
      { title: '6. Pemasangan Ajir', content: 'Pasang kayu penyangga segera setelah pindah tanam. Jangan menunggu tanaman besar karena berisiko merusak akar saat menancapkan kayu.' },
      { title: '7. Penyiraman', content: 'Tomat sangat haus air. Siram rutin, tapi jangan membasahi daunnya! Air pada daun tomat memicu jamur. Siram langsung ke tanah.' },
      { title: '8. Pewiwilan (Pruning)', content: 'Buang semua tunas yang tumbuh di ketiak daun (antara batang utama dan dahan). Sisakan hanya 1 atau 2 batang utama agar buah maksimal.' },
      { title: '9. Pemupukan Kalsium', content: 'Selain NPK, tomat butuh Kalsium agar pantat buah tidak busuk (Blossom End Rot). Bisa gunakan kulit telur yang dihancurkan atau kapur dolomit.' },
      { title: '10. Panen', content: 'Tomat ceri bisa dipanen mulai usia 60-70 hari. Petik saat warna mulai oranye kemerahan. Panen bisa dilakukan setiap 3 hari sekali.' },
    ],
    quiz: [
      { question: 'Kenapa daun tomat sebaiknya tidak ikut disiram?', options: ['Takut kedinginan', 'Memicu tumbuhnya jamur', 'Membuat daun layu', 'Boros air'], correctAnswer: 1 },
      { question: 'Apa fungsi Ajir pada tanaman tomat?', options: ['Hiasan', 'Menopang batang agar tegak', 'Mengusir hama', 'Menyerap air'], correctAnswer: 1 },
      { question: 'Berapa kebutuhan sinar matahari untuk tomat?', options: ['1 jam', '2 jam', '6-8 jam', '24 jam'], correctAnswer: 2 },
      { question: 'Penyakit "Pantat Buah Busuk" disebabkan kekurangan?', options: ['Air', 'Nitrogen', 'Kalsium', 'Matahari'], correctAnswer: 2 },
      { question: 'Bagian mana yang harus dibuang saat pewiwilan?', options: ['Tunas air di ketiak daun', 'Akar utama', 'Bunga', 'Pucuk tanaman'], correctAnswer: 0 },
    ]
  },

  // --- 3. SAWI HIDROPONIK ---
  {
    id: 'sawi',
    title: 'Sawi Hidroponik (Wick)',
    description: 'Teknik menanam sawi tanpa tanah dengan sistem sumbu sederhana.',
    level: 'Pemula',
    duration: '30 Menit',
    image: 'https://i.ibb.co.com/WWQYF9Mk/3-sawi-wick-system.jpg?q=80&w=600&auto=format&fit=crop',
    materi: [
      { title: '1. Apa itu Sistem Wick?', content: 'Sistem Wick (Sumbu) adalah sistem hidroponik paling sederhana. Memanfaatkan kain flanel sebagai sumbu untuk mengalirkan nutrisi dari bak ke akar tanaman.' },
      { title: '2. Alat Bahan', content: 'Anda butuh: Bak air (bisa baskom bekas), Styrofoam (penutup), Netpot (wadah tanaman), Kain Flanel, Rockwool, dan Nutrisi AB Mix.' },
      { title: '3. Memotong Rockwool', content: 'Potong rockwool (media tanam pengganti tanah) bentuk dadu ukuran 2x2x2 cm. Basahi dengan air biasa hingga lembap seperti spons.' },
      { title: '4. Menyemai Benih', content: 'Lubangi sedikit rockwool dengan tusuk gigi, masukkan 1 biji sawi per kotak. Letakkan di nampan dan simpan di tempat gelap 1x24 jam hingga pecah benih.' },
      { title: '5. Kenalkan Matahari', content: 'Begitu benih pecah dan muncul tunas putih/hijau, JEMUR di matahari pagi! Jika telat dijemur, tanaman akan kutilang (kurus tinggi langsing) dan gagal.' },
      { title: '6. Pindah ke Netpot', content: 'Saat muncul 4 daun (usia 10-14 hari), pindahkan rockwool+tanaman ke dalam Netpot yang sudah dipasangi sumbu kain flanel.' },
      { title: '7. Meracik Nutrisi', content: 'Siapkan air baku (air sumur/PAM endapan). Larutkan Nutrisi AB Mix Sayuran Daun. Patokannya biasanya 5ml A + 5ml B untuk 1 Liter air.' },
      { title: '8. Penempatan', content: 'Letakkan netpot pada lubang styrofoam di atas bak nutrisi. Pastikan kain flanel menyentuh air nutrisi, tapi dasar netpot jangan terendam sepenuhnya (beri jarak untuk oksigen).' },
      { title: '9. Perawatan', content: 'Cek air nutrisi setiap 3 hari. Jika surut, tambahkan larutan nutrisi baru. Pastikan tanaman kena matahari full.' },
      { title: '10. Panen Cepat', content: 'Sawi hidroponik tumbuh sangat cepat. Usia 30-40 hari setelah semai (HSS) sudah bisa dipanen. Rasanya lebih renyah dan bersih dari tanah.' },
    ],
    quiz: [
      { question: 'Media tanam pengganti tanah pada hidroponik disebut?', options: ['Tanah Liat', 'Rockwool', 'Pasir', 'Batu Bata'], correctAnswer: 1 },
      { question: 'Apa fungsi kain flanel pada sistem Wick?', options: ['Hiasan', 'Menyerap nutrisi ke akar', 'Menahan panas', 'Mengusir nyamuk'], correctAnswer: 1 },
      { question: 'Apa yang terjadi jika telat menjemur kecambah?', options: ['Tanaman subur', 'Tanaman Kutilang (Kurus Tinggi)', 'Tanaman berbunga', 'Akar membesar'], correctAnswer: 1 },
      { question: 'Nutrisi khusus hidroponik disebut?', options: ['NPK Mutiara', 'Urea', 'AB Mix', 'Kompos'], correctAnswer: 2 },
      { question: 'Kapan sawi hidroponik bisa dipanen?', options: ['30-40 Hari', '3 Bulan', '6 Bulan', '1 Minggu'], correctAnswer: 0 },
    ]
  },

  // --- 4. ANGGREK BULAN ---
  {
    id: 'anggrek',
    title: 'Merawat Anggrek Bulan',
    description: 'Tips agar anggrek rajin berbunga, sehat, dan tidak busuk akar.',
    level: 'Ahli',
    duration: '90 Menit',
    image: 'https://i.ibb.co.com/1YdBQjKd/4-anggrek-bulan.jpg?q=80&w=600&auto=format&fit=crop',
    materi: [
      { title: '1. Karakteristik Anggrek', content: 'Anggrek Bulan (Phalaenopsis) adalah tanaman epifit (menempel). Di alam liar, ia menempel di pohon. Jadi, akarnya butuh banyak sirkulasi udara.' },
      { title: '2. Kesalahan Pemula', content: 'Kesalahan terbesar adalah menanam anggrek pakai TANAH. Jangan! Anggrek butuh media poros seperti arang, pakis, atau moss, bukan tanah padat.' },
      { title: '3. Media Tanam', content: 'Gunakan Arang Kayu atau Pecahan Bata untuk daerah panas (karena tidak menyimpan air). Gunakan Moss Hitam/Putih untuk daerah dingin/kering.' },
      { title: '4. Pot yang Tepat', content: 'Gunakan pot tanah liat yang banyak lubangnya (samping dan bawah). Akar anggrek butuh bernapas. Jika pakai pot plastik, lubangi dinding potnya.' },
      { title: '5. Sinar Matahari', content: 'Anggrek bulan TIDAK SUKA matahari langsung (bisa gosong). Ia suka cahaya terang tapi teduh (di bawah naungan paranet atau teras). Intensitas sekitar 20-30%.' },
      { title: '6. Cara Menyiram', content: 'Siram saat media benar-benar kering. Raba medianya dulu. Jika masih lembap, jangan disiram. Busuk akar adalah pembunuh nomor 1 anggrek.' },
      { title: '7. Pemupukan', content: 'Gunakan pupuk daun (cair) dengan dosis sangat encer (1/4 dosis anjuran). Semprotkan ke balik daun dan akar pada pagi hari seminggu sekali.' },
      { title: '8. Kelembapan', content: 'Anggrek suka lembap tapi tidak basah. Anda bisa menaruh nampan berisi air di bawah pot (tanpa menyentuh pot) untuk menjaga kelembapan udara sekitar (microclimate).' },
      { title: '9. Pasca Bunga', content: 'Setelah bunga rontok, potong tangkai bunga di atas ruas kedua dari bawah. Ini merangsang tumbuhnya tangkai bunga baru atau anakan (keiki).' },
      { title: '10. Hama & Penyakit', content: 'Waspada siput dan bekicot yang memakan akar muda. Waspada juga jamur jika sirkulasi udara buruk. Berikan fungisida jika ada bercak hitam pada daun.' },
    ],
    quiz: [
      { question: 'Anggrek bulan sebaiknya ditanam menggunakan media?', options: ['Tanah Liat Padat', 'Pasir Pantai', 'Arang atau Pakis', 'Lumpur'], correctAnswer: 2 },
      { question: 'Apakah anggrek bulan suka matahari langsung terik?', options: ['Suka sekali', 'Tidak, bisa gosong', 'Butuh 24 jam', 'Tidak butuh cahaya'], correctAnswer: 1 },
      { question: 'Penyebab utama kematian anggrek adalah?', options: ['Kurang air', 'Kebanyakan air (Busuk Akar)', 'Kebanyakan pupuk', 'Kurang sinar'], correctAnswer: 1 },
      { question: 'Kapan waktu menyiram anggrek yang tepat?', options: ['Setiap jam', 'Saat media tanam sudah kering', 'Setiap malam', 'Saat hujan'], correctAnswer: 1 },
      { question: 'Bagaimana pot yang ideal untuk anggrek?', options: ['Tertutup rapat', 'Banyak lubang sirkulasi', 'Terbuat dari besi', 'Berisi air penuh'], correctAnswer: 1 },
    ]
  },

  // --- 5. JAHE MERAH ---
  {
    id: 'jahe',
    title: 'Jahe Merah di Polybag',
    description: 'Budidaya tanaman obat keluarga yang bernilai ekonomi tinggi.',
    level: 'Pemula',
    duration: '50 Menit',
    image: 'https://i.ibb.co.com/zVnnv45h/5-jahe-merah-organik.jpg?q=80&w=600&auto=format&fit=crop',
    materi: [
      { title: '1. Potensi Jahe Merah', content: 'Jahe merah berbeda dengan jahe gajah/emprit. Rasanya lebih pedas dan khasiat obatnya lebih kuat. Harga jualnya pun cenderung lebih stabil dan tinggi.' },
      { title: '2. Persiapan Rimpang', content: 'Pilih rimpang jahe yang tua (usia 10 bulan+). Potong rimpang yang memiliki 2-3 mata tunas. Jemur sebentar (jangan sampai kering) untuk menutup luka potong.' },
      { title: '3. Pengecambahan', content: 'Letakkan rimpang di atas jerami atau sekam lembap di tempat teduh. Siram setiap hari. Tunggu 2-3 minggu hingga muncul tunas muda.' },
      { title: '4. Media Tanam Polybag', content: 'Gunakan polybag besar / karung beras bekas. Campurkan Tanah : Pupuk Kandang : Sekam Bakar (1:1:1). Isi polybag 1/4 bagian saja dulu (jangan penuh).' },
      { title: '5. Cara Menanam', content: 'Tanam rimpang bertunas sedalam 3-5 cm. Tunas menghadap ke atas. Jangan menanam terlalu dalam agar tunas tidak busuk.' },
      { title: '6. Penempatan', content: 'Jahe merah butuh naungan saat muda (usia 0-3 bulan). Setelah 3 bulan, baru kenalkan dengan sinar matahari penuh agar rimpang maksimal.' },
      { title: '7. Pembumbunan (PENTING)', content: 'Ini rahasianya! Setiap jahe tumbuh meninggi, tambahkan tanah+pupuk ke dalam polybag (timbun batangnya). Lakukan ini bertahap sampai polybag penuh. Ini membuat rimpang bertingkat.' },
      { title: '8. Penyiraman', content: 'Jahe tidak suka becek. Siram secukupnya saja. Pastikan lubang polybag lancar agar air tidak menggenang.' },
      { title: '9. Hama', content: 'Hama utama adalah bercak daun dan layu bakteri (daun menguning lalu mati). Gunakan bibit sehat dan sanitasi lingkungan yang bersih.' },
      { title: '10. Panen', content: 'Jahe merah dipanen usia 9-10 bulan saat daun mulai menguning dan kering. Bongkar polybag, bersihkan rimpang dari tanah.' },
    ],
    quiz: [
      { question: 'Ciri khas Jahe Merah dibanding jahe lain adalah?', options: ['Ukurannya raksasa', 'Rasanya tawar', 'Rasanya lebih pedas & kulit merah', 'Warnanya biru'], correctAnswer: 2 },
      { question: 'Kenapa saat menanam, polybag tidak diisi penuh tanah?', options: ['Agar hemat tanah', 'Untuk proses pembumbunan bertahap', 'Agar ringan', 'Agar jahe tidak tumbuh'], correctAnswer: 1 },
      { question: 'Berapa usia panen jahe merah yang optimal?', options: ['3 Bulan', '5 Bulan', '9-10 Bulan', '2 Tahun'], correctAnswer: 2 },
      { question: 'Apa tanda jahe siap panen?', options: ['Daun menghijau segar', 'Daun mulai menguning dan kering', 'Muncul buah', 'Batang membusuk'], correctAnswer: 1 },
      { question: 'Apakah jahe suka tanah yang tergenang air?', options: ['Suka sekali', 'Tidak, rimpang bisa busuk', 'Biasa saja', 'Butuh kolam'], correctAnswer: 1 },
    ]
  },
];