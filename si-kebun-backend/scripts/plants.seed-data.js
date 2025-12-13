'use strict';

const categories = [
  {
    id: 'hias',
    name: 'Tanaman Hias',
    description: 'Tanaman dekoratif untuk mempercantik ruangan dan taman',
    icon: '🌿',
    plantCount: 14,
    color: '#10B981'
  },
  {
    id: 'hortikultura',
    name: 'Hortikultura',
    description: 'Sayuran dan buah-buahan untuk konsumsi sehari-hari',
    icon: '🥬',
    plantCount: 13,
    color: '#F59E0B'
  },
  {
    id: 'obat',
    name: 'Tanaman Obat',
    description: 'Tanaman herbal dengan khasiat pengobatan',
    icon: '🌱',
    plantCount: 13,
    color: '#EF4444'
  },
  {
    id: 'perkebunan',
    name: 'Perkebunan',
    description: 'Tanaman komersial untuk skala besar',
    icon: '🌾',
    plantCount: 13,
    color: '#8B5CF6'
  }
];

const plants = [
  // ============================================
  // TANAMAN HIAS (14 tanaman)
  // ============================================
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    category: 'hias',
    description:
      'Monstera Deliciosa adalah tanaman hias populer dengan daun besar berlubang khas yang memberikan nuansa tropis. Tanaman ini sangat cocok untuk dekorasi interior dan dapat tumbuh dengan baik di ruangan dengan pencahayaan sedang.',
    shortDescription: 'Tanaman hias tropis dengan daun berlubang khas yang elegan',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    benefits: [
      'Menyerap polutan udara seperti formaldehida',
      'Meningkatkan kelembaban ruangan',
      'Mengurangi stres dan meningkatkan fokus',
      'Menambah nilai estetika ruangan'
    ],
    careTips: {
      watering: 'Siram ketika 2-3 cm lapisan tanah atas mulai mengering',
      sunlight: 'Cahaya terang tidak langsung, hindari sinar matahari langsung',
      soil: 'Tanah gembur dengan drainase baik',
      temperature: 'Suhu 18-30°C dengan kelembaban sedang-tinggi'
    },
    difficulty: 'medium',
    tags: ['tropical', 'air-purifying', 'large-leaf'],
    growthTime: '2-3 tahun untuk mencapai ukuran dewasa',
    size: 'Tinggi 1-2,5 meter dalam pot'
  },
  {
    id: 'calathea',
    name: 'Calathea Orbifolia',
    scientificName: 'Calathea orbifolia',
    category: 'hias',
    description:
      'Calathea Orbifolia dikenal dengan daun lebar bergaris perak yang sangat dekoratif. Tanaman ini cocok untuk ruangan dengan cahaya rendah hingga sedang.',
    shortDescription: 'Tanaman hias daun lebar dengan pola garis elegan',
    image: 'https://images.unsplash.com/photo-1687166752260-c423a780289b?w=800',
    benefits: [
      'Menambah kesan tropis dan modern',
      'Cocok untuk ruangan dengan cahaya rendah',
      'Daun lebar membantu meningkatkan kelembaban lokal',
      'Aman untuk hewan peliharaan'
    ],
    careTips: {
      watering: 'Jaga tanah tetap lembab namun tidak becek',
      sunlight: 'Cahaya tidak langsung rendah hingga sedang',
      soil: 'Campuran tanah gembur dengan bahan organik tinggi',
      temperature: 'Suhu ideal 18-26°C dengan kelembaban tinggi'
    },
    difficulty: 'hard',
    tags: ['low-light', 'pet-safe', 'decorative-foliage'],
    growthTime: '1-2 tahun untuk mencapai ukuran dewasa',
    size: 'Tinggi 30-60 cm, lebar daun hingga 20-30 cm'
  },
  {
    id: 'lidah-mertua',
    name: 'Lidah Mertua',
    scientificName: 'Sansevieria trifasciata',
    category: 'hias',
    description:
      'Lidah Mertua atau Snake Plant adalah tanaman hias yang sangat tahan banting dan cocok untuk pemula. Tanaman ini mampu bertahan di kondisi cahaya rendah dan jarang disiram, serta dikenal sebagai pembersih udara yang efektif.',
    shortDescription: 'Tanaman kuat yang efektif membersihkan udara ruangan',
    image: 'https://images.unsplash.com/photo-1696508902086-2a82cdef9f48?w=800',
    benefits: [
      'Sangat efektif menyerap polutan udara termasuk benzena',
      'Menghasilkan oksigen lebih banyak di malam hari',
      'Membutuhkan perawatan minimal',
      'Tahan terhadap hama dan penyakit'
    ],
    careTips: {
      watering: 'Siram 2-3 minggu sekali, hindari overwatering',
      sunlight: 'Bisa tumbuh di cahaya rendah hingga cerah tidak langsung',
      soil: 'Tanah kaktus atau campuran dengan pasir untuk drainase baik',
      temperature: 'Tahan antara 15-30°C, hindari suhu di bawah 10°C'
    },
    difficulty: 'easy',
    tags: ['low-maintenance', 'air-purifying', 'beginner-friendly'],
    growthTime: 'Pertumbuhan lambat, 1-2 tahun untuk dewasa',
    size: 'Tinggi 60-120 cm indoor'
  },
  {
    id: 'sirih-gading',
    name: 'Sirih Gading',
    scientificName: 'Epipremnum aureum',
    category: 'hias',
    description:
      'Sirih Gading adalah tanaman merambat dengan daun berbentuk hati berwarna hijau kekuningan. Tanaman ini sangat mudah dirawat dan dapat tumbuh baik di dalam ruangan maupun di luar ruangan.',
    shortDescription: 'Tanaman merambat dengan daun variegata yang mudah dirawat',
    image: 'https://images.unsplash.com/photo-1734966486146-dbd364215df5?w=800',
    benefits: [
      'Membersihkan udara dari formaldehida dan xylene',
      'Mudah diperbanyak melalui stek batang',
      'Cocok untuk pot gantung atau merambat di rak',
      'Tahan terhadap kondisi kurang ideal'
    ],
    careTips: {
      watering: 'Siram ketika tanah bagian atas mulai mengering',
      sunlight: 'Cahaya terang tidak langsung hingga cahaya rendah',
      soil: 'Tanah potting mix yang ringan dan berdrainase baik',
      temperature: 'Suhu ideal 18-26°C'
    },
    difficulty: 'easy',
    tags: ['merambat', 'hanging-plant', 'air-purifying'],
    growthTime: 'Pertumbuhan cepat, 6-12 bulan untuk panjang 1 meter',
    size: 'Panjang merambat hingga 6 meter'
  },
  {
    id: 'kaktus-zebra',
    name: 'Kaktus Zebra',
    scientificName: 'Haworthia Attenuata',
    category: 'hias',
    description:
      'Kaktus hias kecil yang menarik dengan bentuk unik dan duri halus. Tanaman ini sangat tahan kering dan membutuhkan perawatan minimal, cocok untuk pemula dan dekorasi meja.',
    shortDescription: 'Kaktus mini yang mudah perawatannya dan unik',
    image: 'https://images.unsplash.com/photo-1671366666917-2b738ff43518?w=800',
    benefits: [
      'Membutuhkan sangat sedikit air',
      'Tahan terhadap kondisi ekstrem',
      'Menghasilkan bunga yang indah',
      'Ukuran kompak ideal untuk ruang kecil'
    ],
    careTips: {
      watering: 'Siram 3-4 minggu sekali, biarkan tanah benar-benar kering',
      sunlight: 'Membutuhkan sinar matahari langsung minimal 6 jam',
      soil: 'Tanah kaktus khusus dengan drainase sangat baik',
      temperature: 'Tahan panas hingga 35°C, hindari dingin basah'
    },
    difficulty: 'easy',
    tags: ['succulent', 'low-water', 'desk-plant'],
    growthTime: 'Pertumbuhan lambat, 2-3 tahun untuk ukuran maksimal',
    size: 'Tinggi 10-20 cm'
  },
  {
    id: 'aglaonema',
    name: 'Sri Rejeki (Aglaonema)',
    scientificName: 'Aglaonema commutatum',
    category: 'hias',
    description:
      'Aglaonema adalah tanaman hias daun populer dengan berbagai varian warna dan pola. Tanaman ini cocok untuk cahaya rendah dan sangat dekoratif untuk sudut ruangan.',
    shortDescription: 'Tanaman hias daun berwarna dengan perawatan mudah',
    image: 'https://images.unsplash.com/photo-1721305450069-bc89af1768a9?w=800',
    benefits: [
      'Membersihkan udara dari polutan',
      'Toleran terhadap cahaya rendah',
      'Tersedia dalam banyak varian warna',
      'Ideal untuk kantor atau ruang tamu'
    ],
    careTips: {
      watering: 'Siram saat tanah mulai mengering, jangan sampai tergenang',
      sunlight: 'Cahaya tidak langsung rendah hingga sedang',
      soil: 'Tanah potting mix dengan bahan organik',
      temperature: 'Suhu 18-30°C'
    },
    difficulty: 'easy',
    tags: ['low-light', 'office-plant', 'colorful-foliage'],
    growthTime: '1-2 tahun untuk mencapai ukuran penuh',
    size: 'Tinggi 30-60 cm'
  },
  {
    id: 'pothos-njoy',
    name: 'Pothos Njoy',
    scientificName: 'Epipremnum aureum "Njoy"',
    category: 'hias',
    description:
      'Pothos Njoy adalah varietas pothos dengan daun kecil variegata hijau putih yang sangat dekoratif. Cocok untuk pot kecil atau tanaman gantung.',
    shortDescription: 'Varietas pothos mini dengan daun variegata cantik',
    image: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?w=800',
    benefits: [
      'Membersihkan udara dari polutan',
      'Tumbuh baik di berbagai kondisi cahaya',
      'Cocok untuk ruangan kecil',
      'Mudah diperbanyak dari stek'
    ],
    careTips: {
      watering: 'Siram saat tanah atas mulai mengering',
      sunlight: 'Cahaya terang tidak langsung hingga cahaya rendah',
      soil: 'Tanah potting mix gembur',
      temperature: 'Suhu 18-28°C'
    },
    difficulty: 'easy',
    tags: ['trailing', 'variegated', 'small-space'],
    growthTime: '6-12 bulan untuk penuh satu pot',
    size: 'Panjang sulur 50-100 cm'
  },
  {
    id: 'alocasia-polly',
    name: 'Alocasia Polly',
    scientificName: 'Alocasia amazonica "Polly"',
    category: 'hias',
    description:
      'Alocasia Polly memiliki daun hijau gelap mengkilap dengan tulang daun putih yang kontras. Tanaman ini memberikan tampilan dramatis dan eksotis.',
    shortDescription: 'Tanaman eksotis dengan daun dramatis',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=800',
    benefits: [
      'Menjadi fokus utama dekorasi ruangan',
      'Memberikan nuansa tropis yang kuat',
      'Cocok untuk kolektor tanaman hias',
      'Meningkatkan kelembaban ruangan'
    ],
    careTips: {
      watering: 'Jaga tanah tetap lembab, tetapi hindari air menggenang',
      sunlight: 'Cahaya terang tidak langsung, hindari matahari langsung',
      soil: 'Campuran tanah gembur dan porous',
      temperature: 'Suhu 20-28°C dengan kelembaban tinggi'
    },
    difficulty: 'hard',
    tags: ['tropical', 'collector', 'dramatic-foliage'],
    growthTime: '1-2 tahun untuk ukuran dewasa',
    size: 'Tinggi 40-60 cm'
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum wallisii',
    category: 'hias',
    description:
      'Peace Lily adalah tanaman hias dengan bunga putih elegan dan kemampuan menyaring polutan udara. Cocok untuk ruangan dengan cahaya rendah.',
    shortDescription: 'Tanaman berbunga putih elegan dan pembersih udara',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800',
    benefits: [
      'Menyerap polutan seperti benzena dan formaldehida',
      'Menghasilkan bunga putih yang cantik',
      'Cocok untuk ruangan dengan cahaya rendah',
      'Meningkatkan kelembaban ruangan'
    ],
    careTips: {
      watering: 'Siram saat tanah mulai kering, daun akan layu jika butuh air',
      sunlight: 'Cahaya tidak langsung rendah hingga sedang',
      soil: 'Tanah potting mix yang gembur',
      temperature: 'Suhu ideal 18-26°C'
    },
    difficulty: 'easy',
    tags: ['flowering', 'air-purifying', 'low-light'],
    growthTime: '1-2 tahun untuk berbunga',
    size: 'Tinggi 45-65 cm'
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    scientificName: 'Ficus elastica',
    category: 'hias',
    description:
      'Rubber Plant atau Karet Kebo adalah tanaman hias dengan daun besar, tebal, dan mengkilap. Sangat populer untuk interior modern.',
    shortDescription: 'Tanaman berdaun besar dan mengkilap yang mudah dirawat',
    image: 'https://images.unsplash.com/photo-1591656884447-8562e2373a66?w=800',
    benefits: [
      'Membersihkan udara dari formaldehida',
      'Daun besar menambah kesan dramatis',
      'Tahan terhadap kondisi indoor',
      'Mudah diperbanyak'
    ],
    careTips: {
      watering: 'Siram saat 2-3 cm tanah atas kering',
      sunlight: 'Cahaya terang tidak langsung',
      soil: 'Tanah potting mix dengan drainase baik',
      temperature: 'Suhu 18-28°C'
    },
    difficulty: 'easy',
    tags: ['large-plant', 'indoor-tree', 'air-purifying'],
    growthTime: '2-3 tahun untuk menjadi tanaman besar',
    size: 'Tinggi hingga 2-3 meter di dalam ruangan'
  },
  {
    id: 'string-of-pearls',
    name: 'String of Pearls',
    scientificName: 'Senecio rowleyanus',
    category: 'hias',
    description:
      'String of Pearls adalah sukulen gantung dengan daun bulat kecil seperti manik-manik. Sangat dekoratif untuk pot gantung di dalam ruangan.',
    shortDescription: 'Sukulen gantung unik dengan daun seperti manik-manik',
    image: 'https://images.unsplash.com/photo-1765041425888-39e09e148a80?w=800',
    benefits: [
      'Memberikan aksen unik di ruangan',
      'Membutuhkan sedikit air',
      'Cocok untuk ruang dengan cahaya terang',
      'Ideal untuk kolektor sukulen'
    ],
    careTips: {
      watering: 'Siram sedikit saat tanah benar-benar kering',
      sunlight: 'Cahaya terang tidak langsung',
      soil: 'Tanah sukulen dengan drainase sangat baik',
      temperature: 'Suhu 18-26°C'
    },
    difficulty: 'medium',
    tags: ['succulent', 'hanging', 'decorative'],
    growthTime: '1-2 tahun untuk menghasilkan sulur panjang',
    size: 'Panjang sulur hingga 50-90 cm'
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    scientificName: 'Chlorophytum comosum',
    category: 'hias',
    description:
      'Spider Plant adalah tanaman hias populer dengan daun panjang melengkung dan anakan yang menjuntai. Sangat mudah dirawat dan ideal untuk pemula.',
    shortDescription: 'Tanaman hias mudah dirawat dengan anakan menjuntai',
    image: 'https://images.unsplash.com/photo-1647631703145-01e8bf7cd149?w=800',
    benefits: [
      'Membersihkan udara dari formaldehida dan xylene',
      'Menghasilkan banyak anakan yang mudah diperbanyak',
      'Toleran terhadap berbagai kondisi cahaya',
      'Aman untuk hewan peliharaan'
    ],
    careTips: {
      watering: 'Siram secara teratur, biarkan tanah sedikit kering',
      sunlight: 'Cahaya tidak langsung terang',
      soil: 'Tanah potting mix standar',
      temperature: 'Suhu 13-27°C'
    },
    difficulty: 'easy',
    tags: ['hanging', 'air-purifying', 'pet-safe'],
    growthTime: '6-12 bulan untuk menghasilkan anak',
    size: 'Tinggi 30-45 cm dengan stolon menjuntai'
  },
  {
    id: 'dracaena',
    name: 'Dragon Tree',
    scientificName: 'Dracaena marginata',
    category: 'hias',
    description:
      'Dracaena Marginata atau Dragon Tree adalah tanaman hias dengan batang ramping dan daun panjang runcing berwarna hijau dengan tepi merah.',
    shortDescription: 'Tanaman tinggi elegan dengan daun runcing bertepi merah',
    image: 'https://images.unsplash.com/photo-1742278300457-4fb6ef06e150?w=800',
    benefits: [
      'Membersihkan udara dari toluena dan xylene',
      'Menambah tinggi dan drama pada ruangan',
      'Perawatan mudah',
      'Hidup bertahun-tahun'
    ],
    careTips: {
      watering: 'Siram saat tanah kering, hindari overwatering',
      sunlight: 'Cahaya tidak langsung sedang hingga terang',
      soil: 'Tanah potting mix dengan drainase baik',
      temperature: 'Suhu 18-32°C'
    },
    difficulty: 'easy',
    tags: ['dragon-tree', 'tall', 'air-purifying'],
    growthTime: '2-3 tahun untuk tinggi 1 meter',
    size: 'Tinggi hingga 2-3 meter indoor'
  },
  {
    id: 'anggrek-bulan',
    name: 'Anggrek Bulan',
    scientificName: 'Phalaenopsis amabilis',
    category: 'hias',
    description:
      'Anggrek Bulan adalah anggrek epifit populer dengan bunga putih elegan yang dapat mekar lama di dalam ruangan.',
    shortDescription: 'Anggrek hias dengan bunga putih yang tahan lama',
    image: 'https://images.unsplash.com/photo-1701456143122-95749914ddba?w=800',
    benefits: [
      'Menambah nilai estetika dan kesan elegan di ruangan',
      'Cocok sebagai pusat perhatian di meja atau sudut ruangan',
      'Bunganya dapat bertahan berminggu-minggu jika dirawat baik',
      'Melatih kesabaran dan konsistensi perawatan karena siklus berbunga'
    ],
    careTips: {
      watering: 'Siram 1 kali seminggu, jangan sampai media tergenang air',
      sunlight: 'Cahaya terang tidak langsung, hindari matahari siang langsung',
      soil: 'Gunakan media khusus anggrek seperti kulit pinus, arang, dan pakis',
      temperature: 'Suhu ideal 18-28°C dengan kelembaban cukup tinggi'
    },
    difficulty: 'medium',
    tags: ['flowering', 'epiphyte', 'indoor', 'ornamental'],
    growthTime: '8-12 bulan untuk siklus berbunga berikutnya dari bibit remaja',
    size: 'Tinggi 30-60 cm tergantung varietas dan pot'
  },
  {
    id: 'bougenville',
    name: 'Bougenville',
    scientificName: 'Bougainvillea glabra',
    category: 'hias',
    description:
      'Bougenville adalah tanaman merambat dengan braktea berwarna cerah yang sering ditanam sebagai pagar hidup atau tanaman pergola.',
    shortDescription: 'Tanaman pagar dengan warna bunga yang sangat mencolok',
    image: 'https://images.unsplash.com/photo-1644262491344-a34300ff54be?w=800',
    benefits: [
      'Memberikan warna cerah di halaman atau pagar',
      'Dapat berfungsi sebagai peneduh bila dibentuk di pergola',
      'Tahan kering dan cocok untuk iklim tropis panas',
      'Membantu meningkatkan privasi sebagai pagar hidup'
    ],
    careTips: {
      watering: 'Siram secukupnya, biarkan tanah mengering di antara penyiraman',
      sunlight: 'Membutuhkan sinar matahari penuh agar rajin berbunga',
      soil: 'Tanah gembur berdrainase baik, tidak terlalu kaya nitrogen',
      temperature: 'Suhu hangat 24-32°C, tidak tahan genangan air'
    },
    difficulty: 'easy',
    tags: ['flowering', 'outdoor', 'drought-tolerant', 'hedge'],
    growthTime: '6-12 bulan sampai tajuk mulai rimbun dari bibit stek',
    size: 'Dapat tumbuh 2-4 meter atau lebih bila tidak dipangkas'
  },

  // ============================================
  // HORTIKULTURA (13 tanaman)
  // ============================================
  {
    id: 'tomat-cherry',
    name: 'Tomat Cherry',
    scientificName: 'Solanum lycopersicum var. cerasiforme',
    category: 'hortikultura',
    description:
      'Tomat cherry adalah varietas tomat kecil yang manis dan berair, ideal untuk salad atau camilan. Mudah dibudidayakan di pot maupun di kebun.',
    shortDescription: 'Tomat kecil manis yang ideal untuk budidaya rumahan',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800',
    benefits: [
      'Kaya vitamin C dan antioksidan',
      'Hasil melimpah dalam ruang terbatas',
      'Bisa dipanen berkelanjutan',
      'Rasa manis alami tanpa bahan tambahan'
    ],
    careTips: {
      watering: 'Siram secara teratur, jaga tanah tetap lembab',
      sunlight: 'Membutuhkan sinar matahari penuh minimal 6 jam',
      soil: 'Tanah gembur kaya organik dengan drainase baik',
      temperature: 'Suhu ideal 20-28°C'
    },
    difficulty: 'medium',
    tags: ['fruit', 'container-friendly', 'high-yield'],
    growthTime: '60-80 hari dari tanam hingga panen',
    size: 'Tinggi 60-120 cm tergantung varietas'
  },
  {
    id: 'cabai-rawit',
    name: 'Cabai Rawit',
    scientificName: 'Capsicum frutescens',
    category: 'hortikultura',
    description:
      'Cabai rawit adalah tanaman sayur buah pedas yang banyak digunakan dalam masakan Indonesia. Tumbuh baik di pot maupun lahan.',
    shortDescription: 'Tanaman cabai pedas serbaguna untuk berbagai masakan',
    image: 'https://images.unsplash.com/photo-1594498609865-5ff3c00f65a6?w=800',
    benefits: [
      'Sumber vitamin C yang tinggi',
      'Meningkatkan cita rasa masakan',
      'Tanaman produktif dengan buah melimpah',
      'Dapat dipanen berulang kali'
    ],
    careTips: {
      watering: 'Siram secara teratur, jangan sampai tanah mengering total',
      sunlight: 'Butuh sinar matahari penuh 6-8 jam per hari',
      soil: 'Tanah gembur subur dan kaya bahan organik',
      temperature: 'Suhu 20-30°C'
    },
    difficulty: 'medium',
    tags: ['spicy', 'fruiting', 'container'],
    growthTime: '70-90 hari hingga panen pertama',
    size: 'Tinggi 40-80 cm'
  },
  {
    id: 'selada',
    name: 'Selada',
    scientificName: 'Lactuca sativa',
    category: 'hortikultura',
    description:
      'Selada adalah sayuran daun yang cepat tumbuh dan cocok ditanam di pot maupun hidroponik. Ideal untuk salad dan lalapan.',
    shortDescription: 'Sayuran daun hijau segar untuk salad dan lalapan',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    benefits: [
      'Kaya vitamin dan mineral',
      'Rendah kalori, cocok untuk diet',
      'Dapat dipanen secara bertahap',
      'Cepat tumbuh dan panen'
    ],
    careTips: {
      watering: 'Jaga kelembaban tanah, jangan sampai kering',
      sunlight: 'Cahaya matahari pagi atau teduh',
      soil: 'Tanah gembur kaya kompos',
      temperature: 'Suhu sejuk 15-22°C'
    },
    difficulty: 'easy',
    tags: ['leafy-green', 'fast-growing', 'hydroponic'],
    growthTime: '30-45 hari hingga panen',
    size: 'Tinggi 20-30 cm'
  },
  {
    id: 'bayam',
    name: 'Bayam',
    scientificName: 'Amaranthus tricolor',
    category: 'hortikultura',
    description:
      'Bayam adalah sayuran daun yang kaya zat besi dan mudah dibudidayakan. Cocok untuk ditanam di pekarangan maupun pot.',
    shortDescription: 'Sayuran daun kaya zat besi dan mudah tumbuh',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    benefits: [
      'Kaya zat besi dan vitamin',
      'Tumbuh cepat dan mudah dipanen',
      'Cocok untuk kebun rumah tangga',
      'Dapat dipanen berulang pada fase daun muda'
    ],
    careTips: {
      watering: 'Siram secara teratur, tanah tetap lembab',
      sunlight: 'Membutuhkan sinar matahari penuh',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 18-30°C'
    },
    difficulty: 'easy',
    tags: ['leafy-green', 'nutritious', 'fast-growing'],
    growthTime: '25-35 hari hingga panen',
    size: 'Tinggi 20-40 cm'
  },
  {
    id: 'terong-ungu',
    name: 'Terong Ungu',
    scientificName: 'Solanum melongena',
    category: 'hortikultura',
    description:
      'Terong ungu adalah sayuran buah yang sering digunakan dalam berbagai masakan Indonesia. Tanaman ini produktif dan mudah dibudidayakan.',
    shortDescription: 'Sayuran buah ungu serbaguna untuk berbagai masakan',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    benefits: [
      'Kaya serat dan antioksidan',
      'Produktif dengan hasil panen melimpah',
      'Dapat ditanam di pot besar',
      'Tahan terhadap berbagai kondisi iklim tropis'
    ],
    careTips: {
      watering: 'Siram rutin, jangan biarkan tanah mengering',
      sunlight: 'Sinar matahari penuh minimal 6 jam',
      soil: 'Tanah subur dan kaya kompos',
      temperature: 'Suhu 20-30°C'
    },
    difficulty: 'medium',
    tags: ['fruiting', 'high-yield', 'container'],
    growthTime: '80-100 hari hingga panen',
    size: 'Tinggi 60-100 cm'
  },
  {
    id: 'kangkung',
    name: 'Kangkung',
    scientificName: 'Ipomoea aquatica',
    category: 'hortikultura',
    description:
      'Kangkung adalah sayuran daun populer di Asia yang tumbuh cepat dan dapat dibudidayakan di air maupun tanah.',
    shortDescription: 'Sayuran daun air yang tumbuh sangat cepat',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    benefits: [
      'Tumbuh sangat cepat',
      'Kaya vitamin dan mineral',
      'Fleksibel ditanam di media air atau tanah',
      'Cocok untuk kebun rumah tangga'
    ],
    careTips: {
      watering: 'Tanah selalu lembab atau kondisi tergenang',
      sunlight: 'Sinar matahari penuh hingga teduh parsial',
      soil: 'Tanah liat berlempung jika ditanam di tanah',
      temperature: 'Suhu hangat 22-30°C'
    },
    difficulty: 'easy',
    tags: ['aquatic', 'leafy-green', 'fast-growing'],
    growthTime: '20-30 hari hingga panen',
    size: 'Tinggi 20-30 cm'
  },
  {
    id: 'stroberi-kebun',
    name: 'Stroberi Kebun',
    scientificName: 'Fragaria × ananassa',
    category: 'hortikultura',
    description:
      'Stroberi kebun adalah tanaman buah berwarna merah dengan rasa manis asam yang menyegarkan. Cocok untuk daerah dataran tinggi.',
    shortDescription: 'Buah merah manis asam untuk olahan dan konsumsi segar',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    benefits: [
      'Menghasilkan buah bernilai ekonomi tinggi',
      'Kaya vitamin C dan antioksidan',
      'Cocok untuk berbagai olahan makanan',
      'Menarik penyerbuk seperti lebah'
    ],
    careTips: {
      watering: 'Siram teratur, jangan sampai media terlalu kering',
      sunlight: 'Membutuhkan sinar matahari penuh',
      soil: 'Tanah gembur dan subur dengan drainase baik',
      temperature: 'Suhu sejuk 15-24°C'
    },
    difficulty: 'medium',
    tags: ['fruit', 'high-value', 'cool-climate'],
    growthTime: '3-4 bulan hingga panen pertama',
    size: 'Tinggi 15-30 cm dengan stolon menjalar'
  },
  {
    id: 'alpukat',
    name: 'Alpukat',
    scientificName: 'Persea americana',
    category: 'hortikultura',
    description:
      'Alpukat adalah tanaman buah dengan daging lembut kaya lemak sehat. Bisa dibudidayakan dari biji maupun sambung pucuk.',
    shortDescription: 'Tanaman buah kaya lemak sehat',
    image: 'https://images.unsplash.com/photo-1590427832856-55e70e95908b?w=800',
    benefits: [
      'Buah kaya lemak tak jenuh yang menyehatkan jantung',
      'Mengandung banyak vitamin dan mineral',
      'Nilai ekonomi tinggi',
      'Dapat dijadikan pohon peneduh'
    ],
    careTips: {
      watering: 'Siram teratur terutama saat muda, kurangi saat sudah besar',
      sunlight: 'Membutuhkan sinar matahari penuh',
      soil: 'Tanah gembur dalam dengan drainase baik',
      temperature: 'Suhu 18-30°C'
    },
    difficulty: 'medium',
    tags: ['fruit-tree', 'shade', 'high-value'],
    growthTime: '3-5 tahun dari bibit hingga berbuah',
    size: 'Tinggi 5-15 meter tergantung perawatan'
  },
  {
    id: 'bawang-merah',
    name: 'Bawang Merah',
    scientificName: 'Allium cepa var. aggregatum',
    category: 'hortikultura',
    description:
      'Bawang merah adalah tanaman umbi penting dalam masakan Indonesia. Mudah dibudidayakan di pot maupun di lahan.',
    shortDescription: 'Tanaman umbi aromatik untuk bumbu masakan',
    image: 'https://images.unsplash.com/photo-1525373612132-b3e820b87cea?w=800',
    benefits: [
      'Bahan bumbu utama dalam berbagai masakan',
      'Dapat disimpan cukup lama setelah panen',
      'Mudah dibudidayakan dan perawatan sederhana',
      'Nilai jual stabil di pasaran'
    ],
    careTips: {
      watering: 'Siram secukupnya, hindari tanah terlalu basah',
      sunlight: 'Membutuhkan sinar matahari penuh',
      soil: 'Tanah gembur dan kaya unsur hara',
      temperature: 'Suhu 20-30°C'
    },
    difficulty: 'easy',
    tags: ['bulb', 'culinary', 'staple'],
    growthTime: '60-90 hari hingga panen umbi',
    size: 'Tinggi 20-30 cm'
  },
  {
    id: 'wortel',
    name: 'Wortel',
    scientificName: 'Daucus carota',
    category: 'hortikultura',
    description:
      'Wortel adalah sayuran akar yang kaya beta-karoten dan vitamin A. Sangat baik untuk kesehatan mata dan kulit.',
    shortDescription: 'Sayuran akar oranye kaya beta-karoten',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800',
    benefits: [
      'Kaya beta-karoten untuk mata',
      'Tinggi vitamin A dan K',
      'Baik untuk kesehatan kulit',
      'Sumber serat yang baik'
    ],
    careTips: {
      watering: 'Siram teratur, tanah lembab merata',
      sunlight: 'Sinar matahari penuh 6-8 jam',
      soil: 'Tanah gembur dan dalam, bebas batu',
      temperature: 'Suhu sejuk 16-21°C'
    },
    difficulty: 'medium',
    tags: ['root-vegetable', 'vitamin-a', 'healthy-snack'],
    growthTime: '70-80 hari dari penanaman hingga panen',
    size: 'Panjang akar 15-20 cm'
  },
  {
    id: 'seledri',
    name: 'Seledri',
    scientificName: 'Apium graveolens',
    category: 'hortikultura',
    description:
      'Seledri adalah sayuran daun aromatik yang sering digunakan sebagai bumbu sup, tumisan, dan lalapan.',
    shortDescription: 'Sayuran bumbu aromatik untuk berbagai masakan',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    benefits: [
      'Menambah aroma dan rasa pada masakan',
      'Rendah kalori dan kaya antioksidan',
      'Dapat dipanen sedikit-sedikit dari pot di rumah',
      'Cocok ditanam di pot kecil di dekat dapur'
    ],
    careTips: {
      watering: 'Jaga tanah tetap lembab, jangan sampai kering total',
      sunlight: 'Membutuhkan sinar matahari 4-6 jam per hari atau cahaya terang',
      soil: 'Tanah gembur kaya bahan organik',
      temperature: 'Suhu sejuk hingga hangat 18-26°C'
    },
    difficulty: 'easy',
    tags: ['leafy-green', 'culinary-herb', 'container-gardening'],
    growthTime: '60-90 hari dari tanam hingga panen rumpun',
    size: 'Tinggi 25-40 cm di pot'
  },
  {
    id: 'stroberi',
    name: 'Stroberi',
    scientificName: 'Fragaria × ananassa',
    category: 'hortikultura',
    description:
      'Stroberi adalah tanaman buah mungil dengan rasa manis-asam yang dapat ditanam di pot gantung maupun bedengan.',
    shortDescription: 'Buah merah manis-asam yang bisa dipanen dari pot',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    benefits: [
      'Menghasilkan buah segar untuk dimakan langsung atau diolah',
      'Mengundang penyerbuk seperti lebah',
      'Cocok sebagai tanaman edukasi anak-anak',
      'Indikator baik untuk belajar manajemen air dan pupuk'
    ],
    careTips: {
      watering:
        'Siram teratur, jangan sampai media benar-benar kering saat berbunga dan berbuah',
      sunlight: 'Sinar matahari penuh 6 jam atau lebih',
      soil: 'Tanah gembur kaya organik dengan drainase baik',
      temperature: 'Suhu sejuk 15-24°C, butuh sirkulasi udara baik'
    },
    difficulty: 'medium',
    tags: ['fruit', 'container-gardening', 'edible', 'kid-friendly'],
    growthTime: '3-4 bulan dari bibit sampai panen buah pertama',
    size: 'Tinggi 15-25 cm dengan stolon menyebar'
  },

  // ============================================
  // TANAMAN OBAT (13 tanaman)
  // ============================================
  {
    id: 'jahe',
    name: 'Jahe',
    scientificName: 'Zingiber officinale',
    category: 'obat',
    description:
      'Jahe adalah tanaman rimpang yang banyak digunakan sebagai bumbu masakan dan obat tradisional. Memiliki rasa pedas dan hangat.',
    shortDescription: 'Rimpang pedas hangat untuk bumbu dan jamu',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Menghangatkan tubuh',
      'Membantu meredakan mual dan masuk angin',
      'Memiliki sifat antiinflamasi',
      'Meningkatkan sirkulasi darah'
    ],
    careTips: {
      watering: 'Jaga kelembaban tanah, jangan sampai kering',
      sunlight: 'Cahaya matahari tidak langsung atau teduh parsial',
      soil: 'Tanah gembur kaya bahan organik',
      temperature: 'Suhu hangat 22-30°C'
    },
    difficulty: 'easy',
    tags: ['rhizome', 'spice', 'medicinal'],
    growthTime: '8-10 bulan hingga panen rimpang',
    size: 'Tinggi 50-100 cm'
  },
  {
    id: 'kunyit',
    name: 'Kunyit',
    scientificName: 'Curcuma longa',
    category: 'obat',
    description:
      'Kunyit adalah tanaman rimpang dengan warna kuning oranye yang digunakan sebagai bumbu dan bahan obat tradisional.',
    shortDescription: 'Rimpang kuning aromatik untuk bumbu dan jamu',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Mengandung kurkumin sebagai antioksidan dan antiinflamasi',
      'Digunakan dalam banyak resep jamu tradisional',
      'Memberi warna kuning alami pada masakan',
      'Mudah dibudidayakan di pekarangan'
    ],
    careTips: {
      watering: 'Siram teratur, tanah selalu lembab namun tidak becek',
      sunlight: 'Sinar matahari penuh atau teduh parsial',
      soil: 'Tanah subur berdrainase baik',
      temperature: 'Suhu 24-30°C'
    },
    difficulty: 'easy',
    tags: ['rhizome', 'spice', 'anti-inflammatory'],
    growthTime: '8-10 bulan hingga panen rimpang',
    size: 'Tinggi 50-100 cm'
  },
  {
    id: 'lidah-buaya',
    name: 'Lidah Buaya',
    scientificName: 'Aloe vera',
    category: 'obat',
    description:
      'Lidah buaya adalah tanaman sukulen yang banyak digunakan untuk perawatan kulit dan rambut, serta memiliki manfaat kesehatan lainnya.',
    shortDescription: 'Sukulen multifungsi untuk perawatan kulit dan kesehatan',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=800',
    benefits: [
      'Gel daun menenangkan kulit terbakar matahari',
      'Membantu penyembuhan luka ringan',
      'Digunakan untuk perawatan rambut',
      'Memiliki efek melembabkan kulit'
    ],
    careTips: {
      watering: 'Siram ketika tanah benar-benar kering',
      sunlight: 'Membutuhkan cahaya terang, bisa terkena matahari langsung pagi',
      soil: 'Tanah berdrainase sangat baik dengan pasir',
      temperature: 'Tahan 15-30°C, hindari pembekuan'
    },
    difficulty: 'easy',
    tags: ['medicinal', 'skincare', 'succulent'],
    growthTime: '3-4 tahun untuk tanaman dewasa',
    size: 'Tinggi 30-60 cm dengan diameter 15-45 cm'
  },
  {
    id: 'temulawak',
    name: 'Temulawak',
    scientificName: 'Curcuma xanthorrhiza',
    category: 'obat',
    description:
      'Temulawak adalah tanaman obat asli Indonesia yang terkenal sebagai jamu tradisional untuk menjaga kesehatan hati.',
    shortDescription: 'Tanaman obat tradisional untuk kesehatan hati',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Mendukung fungsi hati',
      'Meningkatkan nafsu makan',
      'Memiliki sifat antiinflamasi dan antioksidan',
      'Digunakan dalam berbagai ramuan jamu'
    ],
    careTips: {
      watering: 'Siram teratur, tanah lembab namun tidak becek',
      sunlight: 'Sinar matahari penuh hingga teduh parsial',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 24-30°C'
    },
    difficulty: 'medium',
    tags: ['rhizome', 'liver-health', 'traditional-medicine'],
    growthTime: '8-10 bulan hingga panen rimpang',
    size: 'Tinggi 50-100 cm'
  },
  {
    id: 'serai',
    name: 'Serai',
    scientificName: 'Cymbopogon citratus',
    category: 'obat',
    description:
      'Serai atau sereh adalah tanaman herba aromatik yang digunakan sebagai bumbu masakan dan bahan minuman herbal.',
    shortDescription: 'Herbal aromatik segar untuk masakan dan minuman',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Memberi aroma segar pada masakan',
      'Digunakan dalam teh herbal untuk relaksasi',
      'Memiliki sifat antimikroba',
      'Mudah tumbuh dan diperbanyak'
    ],
    careTips: {
      watering: 'Siram teratur, tanah lembab',
      sunlight: 'Sinar matahari penuh',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 20-30°C'
    },
    difficulty: 'easy',
    tags: ['aromatic', 'herb', 'culinary'],
    growthTime: '3-4 bulan untuk mencapai ukuran panen',
    size: 'Tinggi 60-100 cm'
  },
  {
    id: 'kumis-kucing',
    name: 'Kumis Kucing',
    scientificName: 'Orthosiphon aristatus',
    category: 'obat',
    description:
      'Kumis Kucing adalah tanaman obat yang terkenal untuk membantu kesehatan ginjal dan saluran kemih.',
    shortDescription: 'Tanaman herbal untuk kesehatan ginjal dan saluran kemih',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Membantu melancarkan buang air kecil',
      'Digunakan untuk membantu mengatasi batu ginjal',
      'Memiliki sifat antiinflamasi',
      'Cocok dibudidayakan di pekarangan rumah'
    ],
    careTips: {
      watering: 'Siram teratur, tanah lembab',
      sunlight: 'Sinar matahari penuh hingga teduh parsial',
      soil: 'Tanah gembur dan subur',
      temperature: 'Suhu 22-30°C'
    },
    difficulty: 'easy',
    tags: ['herbal', 'kidney-health', 'traditional-medicine'],
    growthTime: '3-4 bulan hingga siap dipanen',
    size: 'Tinggi 50-100 cm'
  },
  {
    id: 'daun-sirih',
    name: 'Daun Sirih',
    scientificName: 'Piper betle',
    category: 'obat',
    description:
      'Daun sirih adalah tanaman merambat yang banyak digunakan dalam pengobatan tradisional dan ritual budaya.',
    shortDescription: 'Tanaman merambat herbal dengan banyak manfaat',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Mengandung senyawa antiseptik alami',
      'Digunakan untuk kesehatan mulut dan tenggorokan',
      'Bermanfaat dalam pengobatan tradisional',
      'Dapat dijadikan tanaman pagar hidup'
    ],
    careTips: {
      watering: 'Siram teratur, tanah lembab',
      sunlight: 'Teduh parsial hingga sinar matahari pagi',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 22-30°C'
    },
    difficulty: 'medium',
    tags: ['climbing', 'herbal', 'antiseptic'],
    growthTime: '6-12 bulan hingga tanaman mapan',
    size: 'Panjangnya bisa mencapai beberapa meter'
  },
  {
    id: 'temu-ireng',
    name: 'Temu Ireng',
    scientificName: 'Curcuma aeruginosa',
    category: 'obat',
    description:
      'Temu ireng adalah tanaman rimpang yang digunakan dalam jamu untuk meningkatkan nafsu makan dan menjaga kesehatan pencernaan.',
    shortDescription: 'Rimpang herbal untuk pencernaan dan nafsu makan',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Membantu meningkatkan nafsu makan',
      'Baik untuk kesehatan pencernaan',
      'Digunakan dalam berbagai resep jamu',
      'Mudah dibudidayakan di lahan pekarangan'
    ],
    careTips: {
      watering: 'Siram teratur, tanah lembab namun tidak tergenang',
      sunlight: 'Sinar matahari penuh atau teduh parsial',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 24-30°C'
    },
    difficulty: 'medium',
    tags: ['rhizome', 'digestive', 'traditional-medicine'],
    growthTime: '8-10 bulan hingga panen rimpang',
    size: 'Tinggi 50-100 cm'
  },
  {
    id: 'sambiloto',
    name: 'Sambiloto',
    scientificName: 'Andrographis paniculata',
    category: 'obat',
    description:
      'Sambiloto adalah tanaman herbal yang dikenal dengan rasa sangat pahit dan digunakan untuk meningkatkan daya tahan tubuh.',
    shortDescription: 'Tanaman herbal pahit untuk daya tahan tubuh',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Membantu meningkatkan sistem kekebalan tubuh',
      'Digunakan untuk membantu meredakan demam dan flu',
      'Memiliki sifat antioksidan dan antiinflamasi',
      'Relatif mudah dibudidayakan'
    ],
    careTips: {
      watering: 'Siram teratur, tanah lembab',
      sunlight: 'Sinar matahari penuh hingga teduh parsial',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 22-30°C'
    },
    difficulty: 'medium',
    tags: ['bitter-herb', 'immune-support', 'traditional-medicine'],
    growthTime: '3-4 bulan hingga siap dipanen',
    size: 'Tinggi 30-60 cm'
  },
  {
    id: 'kemangi',
    name: 'Kemangi',
    scientificName: 'Ocimum basilicum',
    category: 'obat',
    description:
      'Kemangi adalah herbal aromatik yang sering digunakan sebagai lalapan dan memiliki berbagai khasiat kesehatan.',
    shortDescription: 'Herbal aromatik untuk lalapan dan kesehatan',
    image: 'https://images.unsplash.com/photo-1466065478348-0b967011f8b0?w=800',
    benefits: [
      'Menyegarkan napas',
      'Mengandung antioksidan tinggi',
      'Membantu pencernaan',
      'Mengurangi stres'
    ],
    careTips: {
      watering: 'Siram teratur, jaga kelembaban',
      sunlight: 'Sinar matahari penuh 6-8 jam',
      soil: 'Tanah subur berdrainase baik',
      temperature: 'Suhu hangat 20-30°C'
    },
    difficulty: 'easy',
    tags: ['aromatic', 'culinary', 'fresh-breath'],
    growthTime: '3-4 minggu untuk panen pertama',
    size: 'Tinggi 30-60 cm'
  },
  {
    id: 'daun-mint',
    name: 'Daun Mint',
    scientificName: 'Mentha spicata',
    category: 'obat',
    description:
      'Daun mint adalah tanaman herbal aromatik yang umum digunakan untuk teh, minuman dingin, dan obat tradisional untuk pencernaan.',
    shortDescription: 'Herbal aromatik segar untuk teh dan minuman',
    image: 'https://images.unsplash.com/photo-1466065478348-0b967011f8b0?w=800',
    benefits: [
      'Menyegarkan napas dan mulut',
      'Membantu meredakan gangguan pencernaan ringan',
      'Aroma menenangkan dan menyegarkan ruangan',
      'Dapat dipanen berkali-kali dari tanaman yang sama'
    ],
    careTips: {
      watering: 'Siram teratur, tanah jangan dibiarkan kering terlalu lama',
      sunlight: 'Cahaya matahari tidak langsung hingga penuh pada pagi–sore hari',
      soil: 'Tanah gembur lembab dan kaya bahan organik',
      temperature: 'Suhu 18-28°C, cukup adaptif di pot'
    },
    difficulty: 'easy',
    tags: ['herb', 'aromatic', 'medicinal', 'container-gardening'],
    growthTime: '60-75 hari dari stek sampai panen daun rutin',
    size: 'Tinggi 20-40 cm dengan rimpang menyebar'
  },
  {
    id: 'lengkuas',
    name: 'Lengkuas',
    scientificName: 'Alpinia galanga',
    category: 'obat',
    description:
      'Lengkuas adalah rimpang aromatik yang penting dalam masakan Indonesia dan jamu tradisional.',
    shortDescription: 'Rimpang aromatik untuk bumbu dan jamu',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Memberi aroma khas pada masakan berkuah',
      'Digunakan dalam jamu tradisional untuk kesehatan pencernaan',
      'Mengandung senyawa antimikroba alami',
      'Relatif mudah dibudidayakan di pekarangan rumah'
    ],
    careTips: {
      watering: 'Siram teratur, tanah selalu lembab namun tidak becek',
      sunlight: 'Sinar matahari pagi atau bayangan terang',
      soil: 'Tanah subur kaya organik dengan drainase baik',
      temperature: 'Suhu hangat 24-30°C'
    },
    difficulty: 'medium',
    tags: ['medicinal', 'spice', 'rhizome'],
    growthTime: '8-10 bulan untuk panen rimpang',
    size: 'Tinggi 100-150 cm dengan rumpun rapat'
  },

  // ============================================
  // PERKEBUNAN (13 tanaman)
  // ============================================
  {
    id: 'kopi-arabica',
    name: 'Kopi Arabica',
    scientificName: 'Coffea arabica',
    category: 'perkebunan',
    description:
      'Kopi Arabica adalah spesies kopi berkualitas tinggi dengan rasa yang kompleks dan aroma yang harum.',
    shortDescription: 'Kopi premium berkualitas tinggi dengan rasa kompleks',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
    benefits: [
      'Memiliki nilai jual tinggi',
      'Rasa dan aroma yang disukai penikmat kopi',
      'Dapat dikembangkan menjadi produk spesialti',
      'Mendukung perekonomian petani di daerah pegunungan'
    ],
    careTips: {
      watering: 'Siram teratur terutama pada musim kemarau',
      sunlight: 'Butuh naungan sebagian, tidak tahan matahari penuh terus menerus',
      soil: 'Tanah subur, gembur, dan kaya bahan organik',
      temperature: 'Suhu sejuk 15-24°C di dataran tinggi'
    },
    difficulty: 'hard',
    tags: ['coffee', 'high-value', 'mountain-crop'],
    growthTime: '3-4 tahun hingga panen pertama',
    size: 'Tinggi 2,5-4,5 meter (dipangkas)'
  },
  {
    id: 'sawit',
    name: 'Kelapa Sawit',
    scientificName: 'Elaeis guineensis',
    category: 'perkebunan',
    description:
      'Kelapa sawit adalah tanaman penghasil minyak nabati yang banyak dibudidayakan di daerah tropis.',
    shortDescription: 'Tanaman penghasil minyak nabati utama dunia',
    image: 'https://images.unsplash.com/photo-1614594975525-e58191d78b32?w=800',
    benefits: [
      'Produktivitas minyak per hektar sangat tinggi',
      'Menjadi komoditas ekspor penting',
      'Menghasilkan produk turunan seperti biodiesel',
      'Menyerap tenaga kerja dalam jumlah besar'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan tinggi, bisa ditambah irigasi jika perlu',
      sunlight: 'Membutuhkan sinar matahari penuh',
      soil: 'Tanah dalam dan subur dengan drainase baik',
      temperature: 'Suhu 24-32°C di daerah tropis'
    },
    difficulty: 'hard',
    tags: ['oil-crop', 'industrial', 'tropical'],
    growthTime: '3-4 tahun hingga menghasilkan',
    size: 'Tinggi 10-20 meter'
  },
  {
    id: 'kakao',
    name: 'Kakao',
    scientificName: 'Theobroma cacao',
    category: 'perkebunan',
    description:
      'Kakao adalah tanaman penghasil biji cokelat yang dibutuhkan industri makanan dan minuman.',
    shortDescription: 'Tanaman penghasil biji cokelat',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800',
    benefits: [
      'Menjadi bahan baku utama cokelat',
      'Memiliki nilai jual yang baik di pasar dunia',
      'Cocok dikembangkan di daerah tropis lembab',
      'Dapat ditanam tumpangsari dengan tanaman lain'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan tinggi dan kelembaban',
      sunlight: 'Membutuhkan naungan parsial terutama saat muda',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 21-32°C'
    },
    difficulty: 'medium',
    tags: ['chocolate', 'shade-loving', 'cash-crop'],
    growthTime: '3-5 tahun hingga panen pertama',
    size: 'Tinggi 4-8 meter'
  },
  {
    id: 'karet',
    name: 'Karet',
    scientificName: 'Hevea brasiliensis',
    category: 'perkebunan',
    description:
      'Karet adalah tanaman penghasil getah lateks yang digunakan sebagai bahan baku industri karet.',
    shortDescription: 'Tanaman penghasil lateks untuk industri karet',
    image: 'https://images.unsplash.com/photo-1622474427629-501c6b71e3b6?w=800',
    benefits: [
      'Menjadi sumber bahan baku industri ban dan produk karet lainnya',
      'Dapat dipanen getahnya secara berkelanjutan',
      'Memiliki umur produktif panjang',
      'Berperan penting dalam perekonomian daerah penghasil'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan cukup sepanjang tahun',
      sunlight: 'Sinar matahari penuh',
      soil: 'Tanah dalam dan subur',
      temperature: 'Suhu 24-30°C'
    },
    difficulty: 'hard',
    tags: ['latex', 'industrial', 'long-lived'],
    growthTime: '5-7 tahun hingga dapat disadap',
    size: 'Tinggi 20-30 meter'
  },
  {
    id: 'cengkeh',
    name: 'Cengkeh',
    scientificName: 'Syzygium aromaticum',
    category: 'perkebunan',
    description:
      'Cengkeh adalah tanaman penghasil bunga kering aromatik yang digunakan sebagai bumbu dan bahan rokok kretek.',
    shortDescription: 'Tanaman rempah aromatik bernilai ekonomi tinggi',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Menjadi komoditas ekspor rempah penting',
      'Digunakan dalam industri makanan dan minuman',
      'Mengandung minyak atsiri bernilai tinggi',
      'Dapat hidup puluhan tahun'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan tinggi dan merata',
      sunlight: 'Sinar matahari penuh hingga teduh parsial',
      soil: 'Tanah subur, gembur, dan kaya bahan organik',
      temperature: 'Suhu 22-30°C di daerah tropis lembab'
    },
    difficulty: 'hard',
    tags: ['spice', 'export', 'tree-crop'],
    growthTime: '4-7 tahun hingga mulai berproduksi',
    size: 'Tinggi 10-20 meter'
  },
  {
    id: 'teh',
    name: 'Teh',
    scientificName: 'Camellia sinensis',
    category: 'perkebunan',
    description:
      'Teh adalah tanaman penghasil pucuk daun yang diolah menjadi minuman teh hijau, hitam, dan jenis lainnya.',
    shortDescription: 'Tanaman penghasil daun teh untuk minuman',
    image: 'https://images.unsplash.com/photo-1518987048-93e29699c4e3?w=800',
    benefits: [
      'Menjadi bahan baku minuman populer dunia',
      'Mendukung industri pariwisata di daerah perkebunan teh',
      'Dapat dipanen berkali-kali dari tanaman yang sama',
      'Memiliki banyak varietas dengan karakter rasa berbeda'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan tinggi dan merata',
      sunlight: 'Sinar matahari penuh hingga teduh parsial',
      soil: 'Tanah asam subur dengan drainase baik',
      temperature: 'Suhu sejuk 13-20°C di dataran tinggi'
    },
    difficulty: 'hard',
    tags: ['beverage', 'leaf-crop', 'highland'],
    growthTime: '3-5 tahun hingga siap dipanen rutin',
    size: 'Tinggi 1-2 meter (dipangkas sebagai semak)'
  },
  {
    id: 'kelapa',
    name: 'Kelapa',
    scientificName: 'Cocos nucifera',
    category: 'perkebunan',
    description:
      'Kelapa adalah tanaman serbaguna penghasil buah, minyak, serat, dan berbagai produk turunan lainnya.',
    shortDescription: 'Tanaman serbaguna penghasil buah dan minyak',
    image: 'https://images.unsplash.com/photo-1488903809927-48c9b4e4370e?w=800',
    benefits: [
      'Menghasilkan buah untuk konsumsi segar dan olahan',
      'Sumber minyak nabati dan santan',
      'Seratnya digunakan untuk keset dan tali',
      'Tajuknya dapat berfungsi sebagai peneduh'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan cukup atau irigasi tambahan',
      sunlight: 'Sinar matahari penuh',
      soil: 'Tanah berpasir hingga lempung dengan drainase baik',
      temperature: 'Suhu 24-32°C di daerah pantai tropis'
    },
    difficulty: 'medium',
    tags: ['tree-crop', 'coastal', 'multi-purpose'],
    growthTime: '5-7 tahun hingga berbuah lebat',
    size: 'Tinggi 10-30 meter'
  },
  {
    id: 'kayu-manis',
    name: 'Kayu Manis',
    scientificName: 'Cinnamomum burmannii',
    category: 'perkebunan',
    description:
      'Kayu manis adalah tanaman penghasil kulit batang aromatik yang digunakan sebagai rempah dan bahan industri makanan.',
    shortDescription: 'Tanaman rempah penghasil kulit kayu aromatik',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?w=800',
    benefits: [
      'Menjadi rempah penting dalam masakan dan minuman',
      'Memiliki nilai jual tinggi di pasar internasional',
      'Mengandung minyak atsiri bernilai ekonomi',
      'Dapat dibudidayakan di lahan perbukitan'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan cukup',
      sunlight: 'Sinar matahari penuh hingga teduh parsial',
      soil: 'Tanah subur dan gembur',
      temperature: 'Suhu 20-30°C'
    },
    difficulty: 'medium',
    tags: ['spice', 'tree-crop', 'export'],
    growthTime: '5-10 tahun hingga kulit batang siap dipanen',
    size: 'Tinggi 10-15 meter'
  },
  {
    id: 'kapas',
    name: 'Kapas',
    scientificName: 'Gossypium hirsutum',
    category: 'perkebunan',
    description:
      'Kapas adalah tanaman penghasil serat yang digunakan sebagai bahan baku industri tekstil.',
    shortDescription: 'Tanaman penghasil serat untuk tekstil',
    image: 'https://images.unsplash.com/photo-1582719201952-ea63ac1671b4?w=800',
    benefits: [
      'Menghasilkan serat untuk kain dan benang',
      'Memiliki nilai ekonomi penting di sektor tekstil',
      'Dapat dikembangkan di lahan kering',
      'Menyerap tenaga kerja di sektor pertanian dan industri'
    ],
    careTips: {
      watering: 'Membutuhkan curah hujan sedang, toleran kekeringan setelah dewasa',
      sunlight: 'Membutuhkan sinar matahari penuh',
      soil: 'Tanah gembur dengan drainase baik',
      temperature: 'Suhu 21-30°C'
    },
    difficulty: 'medium',
    tags: ['fiber-crop', 'industrial', 'field-crop'],
    growthTime: '5-6 bulan hingga panen serat',
    size: 'Tinggi 1-2 meter'
  },
  {
    id: 'kopi-robusta',
    name: 'Kopi Robusta',
    scientificName: 'Coffea canephora',
    category: 'perkebunan',
    description:
      'Kopi Robusta adalah spesies kopi yang lebih tahan penyakit dan memiliki produktivitas lebih tinggi dibanding Arabica.',
    shortDescription: 'Kopi tahan banting dengan produktivitas tinggi',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    benefits: [
      'Lebih tahan penyakit dari Arabica',
      'Produktivitas lebih tinggi',
      'Kafein lebih tinggi',
      'Cocok untuk espresso blend'
    ],
    careTips: {
      watering: 'Siram teratur, toleran kondisi lebih kering',
      sunlight: 'Bisa matahari penuh atau parsial',
      soil: 'Tanah subur berdrainase baik',
      temperature: 'Suhu hangat 24-30°C'
    },
    difficulty: 'medium',
    tags: ['commercial', 'coffee', 'hardy'],
    growthTime: '2-3 tahun untuk panen pertama',
    size: 'Tinggi 4-6 meter (dipangkas 2-3 meter)'
  },
  {
    id: 'padi',
    name: 'Padi',
    scientificName: 'Oryza sativa',
    category: 'perkebunan',
    description:
      'Padi adalah tanaman serealia utama penghasil beras yang menjadi makanan pokok sebagian besar masyarakat Indonesia.',
    shortDescription: 'Tanaman serealia penghasil beras',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    benefits: [
      'Menjadi sumber pangan utama dan strategis',
      'Dapat dibudidayakan di sawah maupun dalam skala kecil sebagai edukasi',
      'Memperkenalkan siklus pertanian pada anak-anak',
      'Potensi pengembangan varietas lokal unggul'
    ],
    careTips: {
      watering:
        'Membutuhkan air dalam jumlah besar terutama pada fase vegetatif, bisa berupa lahan tergenang dangkal',
      sunlight: 'Membutuhkan sinar matahari penuh sepanjang hari',
      soil: 'Tanah liat berlempung yang mampu menahan air',
      temperature: 'Suhu hangat 24-32°C'
    },
    difficulty: 'hard',
    tags: ['grain', 'staple-food', 'field-crop'],
    growthTime: '3-4 bulan untuk varietas genjah, 4-5 bulan untuk varietas biasa',
    size: 'Tinggi 80-120 cm tergantung varietas'
  },
  {
    id: 'tebu',
    name: 'Tebu',
    scientificName: 'Saccharum officinarum',
    category: 'perkebunan',
    description:
      'Tebu adalah tanaman penghasil gula utama yang banyak dibudidayakan di lahan perkebunan tropis.',
    shortDescription: 'Tanaman perkebunan penghasil gula',
    image: 'https://images.unsplash.com/photo-1614594975525-e58191d78b32?w=800',
    benefits: [
      'Sumber bahan baku gula dan bioetanol',
      'Dapat dimanfaatkan sebagai pakan ternak setelah panen',
      'Membantu menyerap tenaga kerja di sektor perkebunan',
      'Sisa ampas dapat diolah menjadi kompos atau bahan bakar'
    ],
    careTips: {
      watering: 'Membutuhkan kelembaban tanah cukup, terutama pada fase awal pertumbuhan',
      sunlight: 'Sinar matahari penuh tanpa naungan',
      soil: 'Tanah dalam dan subur dengan drainase baik',
      temperature: 'Suhu hangat 25-32°C'
    },
    difficulty: 'medium',
    tags: ['sugarcane', 'industrial-crop', 'bioenergy'],
    growthTime: '10-14 bulan sampai siap panen pertama',
    size: 'Tinggi 2-4 meter dengan batang tebal'
  }
];

module.exports = { categories, plants };
