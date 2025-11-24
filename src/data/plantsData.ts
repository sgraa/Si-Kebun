import type { Plant, Category } from '../types/plant';

export const categories: Category[] = [
  {
    id: 'hias',
    name: 'Tanaman Hias',
    description: 'Tanaman dekoratif untuk mempercantik ruangan dan taman',
    icon: '🌿',
    plantCount: 6,
    color: '#10B981'
  },
  {
    id: 'hortikultura',
    name: 'Hortikultura',
    description: 'Sayuran dan buah-buahan untuk konsumsi sehari-hari',
    icon: '🥬',
    plantCount: 5,
    color: '#F59E0B'
  },
  {
    id: 'obat',
    name: 'Tanaman Obat',
    description: 'Tanaman herbal dengan khasiat pengobatan',
    icon: '🌱',
    plantCount: 4,
    color: '#EF4444'
  },
  {
    id: 'perkebunan',
    name: 'Perkebunan',
    description: 'Tanaman komersial untuk skala besar',
    icon: '🌾',
    plantCount: 4,
    color: '#8B5CF6'
  }
];

export const plants: Plant[] = [
  // Tanaman Hias
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    category: 'hias',
    description: 'Monstera Deliciosa adalah tanaman hias populer asal Amerika Tengah yang dikenal dengan daunnya yang unik berlubang-lubang. Tanaman ini sangat cocok untuk dekorasi interior dan dapat tumbuh dengan baik di ruangan dengan pencahayaan sedang.',
    shortDescription: 'Tanaman hias tropis dengan daun berlubang khas yang elegan',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Menyerap polutan udara seperti formaldehida',
      'Meningkatkan kelembaban ruangan',
      'Mengurangi stres dan meningkatkan fokus',
      'Menambah nilai estetika ruangan'
    ],
    careTips: {
      watering: 'Siram secara teratur 1-2 minggu sekali, biarkan tanah kering antara penyiraman',
      sunlight: 'Membutuhkan cahaya tidak langsung yang cerah, hindari sinar matahari langsung',
      soil: 'Tanah yang gembur dan berdrainase baik dengan pH 5.5-7',
      temperature: 'Suhu ideal 18-27°C, hindari di bawah 15°C',
      humidity: 'Kelembaban 60-80%, bisa dibantu dengan humidifier'
    },
    difficulty: 'easy',
    tags: ['dekorasi', 'interior', 'tropis'],
    growthTime: '2-3 tahun',
    size: 'Tinggi hingga 3 meter indoor'
  },
  {
    id: 'lidah-mertua',
    name: 'Lidah Mertua',
    scientificName: 'Sansevieria trifasciata',
    category: 'hias',
    description: 'Lidah Mertua atau Snake Plant adalah tanaman hias yang sangat kuat dan mudah perawatannya. Dikenal karena kemampuannya membersihkan udara dan tahan terhadap kondisi kurang perawatan.',
    shortDescription: 'Tanaman kuat yang efektif membersihkan udara ruangan',
    image: 'https://images.unsplash.com/photo-1520412092248-2074c6c46b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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
    description: 'Sirih Gading atau Golden Pothos adalah tanaman merambat yang sangat populer dan mudah dirawat. Dikenal dengan daun berbentuk hati yang bervariasi warna dari hijau hingga kuning keemasan.',
    shortDescription: 'Tanaman merambat indah dengan daun berbentuk hati',
    image: 'https://images.unsplash.com/photo-1614594975525-e58191d78b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Menyerap formaldehida dan xylene dari udara',
      'Mengurangi stres dan kecemasan',
      'Dapat tumbuh dalam air (hydroponic)',
      'Mudah dipropagasi'
    ],
    careTips: {
      watering: 'Siram ketika permukaan tanah terasa kering',
      sunlight: 'Cahaya tidak langsung hingga bayangan rendah',
      soil: 'Tanah potting mix yang ringan dan berdrainase baik',
      temperature: 'Suhu ideal 18-26°C'
    },
    difficulty: 'easy',
    tags: ['merambat', 'hanging-plant', 'air-purifying'],
    growthTime: 'Pertumbuhan cepat, 6-12 bulan untuk panjang 1 meter',
    size: 'Panjang merambat hingga 6 meter'
  },
  {
    id: 'kaktus-hias',
    name: 'Kaktus Hias',
    scientificName: 'Mammillaria gracilis',
    category: 'hias',
    description: 'Kaktus hias kecil yang menarik dengan bentuk unik dan duri yang tidak terlalu tajam. Sempurna untuk dekorasi meja kerja atau rak.',
    shortDescription: 'Kaktus mini yang mudah perawatannya dan unik',
    image: 'https://images.unsplash.com/photo-1509423350716-97f236016e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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
    growthTime: 'Pertumbuhan sangat lambat',
    size: 'Diameter 8-15 cm, tinggi 10-20 cm'
  },
  {
    id: 'pakis-boston',
    name: 'Pakis Boston',
    scientificName: 'Nephrolepis exaltata',
    category: 'hias',
    description: 'Pakis Boston adalah tanaman hias klasik dengan daun hijau segar yang rimbun. Sering digunakan untuk menghangatkan ruangan dan meningkatkan kelembaban udara.',
    shortDescription: 'Tanaman pakis rimbun yang menyegarkan ruangan',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Sangat baik meningkatkan kelembaban udara',
      'Menyerap polutan seperti formaldehida dan xylene',
      'Dapat tumbuh di cahaya rendah',
      'Menciptakan suasana tropis yang menenangkan'
    ],
    careTips: {
      watering: 'Jaga tanah tetap lembab tapi tidak basah',
      sunlight: 'Cahaya tidak langsung atau bayangan terang',
      soil: 'Tanah yang kaya organik dan berdrainase baik',
      temperature: 'Suhu ideal 16-24°C dengan kelembaban tinggi'
    },
    difficulty: 'medium',
    tags: ['humidifying', 'tropical', 'shade-tolerant'],
    growthTime: '6-12 bulan untuk tanaman dewasa',
    size: 'Tinggi 40-90 cm dengan lebar 30-60 cm'
  },
  {
    id: 'calathea',
    name: 'Calathea',
    scientificName: 'Calathea orbifolia',
    category: 'hias',
    description: 'Calathea adalah tanaman hias mewah dengan daun bulat besar dan pola yang indah. Dikenal sebagai "prayer plant" karena daunnya yang bergerak mengikuti cahaya.',
    shortDescription: 'Tanaman eksotis dengan daun indah dan gerakan dinamis',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Menyerap polutan udara dengan baik',
      'Meningkatkan kelembaban ruangan',
      'Gerakan daun yang menarik dan unik',
      'Pola daun yang sangat dekoratif'
    ],
    careTips: {
      watering: 'Gunakan air suling atau air hujan, jaga kelembaban',
      sunlight: 'Cahaya rendah hingga tidak langsung, hindari matahari langsung',
      soil: 'Tanah yang kaya organik dan lembab',
      temperature: 'Suhu stabil 18-24°C, hindari perubahan drastis'
    },
    difficulty: 'hard',
    tags: ['prayer-plant', 'decorative', 'tropical'],
    growthTime: '1-2 tahun untuk tanaman dewasa',
    size: 'Tinggi 30-60 cm, lebar 30-60 cm'
  },

  // Hortikultura
  {
    id: 'tomat-cherry',
    name: 'Tomat Cherry',
    scientificName: 'Solanum lycopersicum var. cerasiforme',
    category: 'hortikultura',
    description: 'Tomat cherry adalah varietas tomat kecil yang manis dan sempurna untuk salad atau camilan. Mudah dibudidayakan di pot maupun di kebun.',
    shortDescription: 'Tomat kecil manis yang ideal untuk budidaya rumahan',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Kaya vitamin C dan antioksidan',
      'Hasil melimpah dalam ruang terbatas',
      'Bisa dipanen berkelanjutan',
      'Rasa manis alami tanpa bahan tambahan'
    ],
    careTips: {
      watering: 'Siram secara teratur, jaga tanah tetap lembab',
      sunlight: 'Membutuhkan sinar matahari penuh minimal 6-8 jam',
      soil: 'Tanah kaya nutrisi dengan pH 6.0-6.8',
      temperature: 'Suhu ideal 21-24°C, hindari di bawah 15°C'
    },
    difficulty: 'medium',
    tags: ['vegetable', 'edible', 'container-friendly'],
    growthTime: '55-65 hari dari penanaman hingga panen pertama',
    size: 'Tinggi 90-180 cm tergantung varietas'
  },
  {
    id: 'cabai-rawit',
    name: 'Cabai Rawit',
    scientificName: 'Capsicum frutescens',
    category: 'hortikultura',
    description: 'Cabai rawit adalah tanaman rempah yang penting dalam masakan Indonesia. Mudah dibudidayakan dan memberikan hasil yang melimpah.',
    shortDescription: 'Tanaman cabai pedas yang produktif untuk dapur',
    image: 'https://images.unsplash.com/photo-1594494652019-9f066e38b16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Kaya vitamin C dan capsaicin',
      'Produktif dan tahan penyakit',
      'Bisa dipanen berkelanjutan',
      'Penting untuk bahan masakan'
    ],
    careTips: {
      watering: 'Siram teratur tapi jangan overwatering',
      sunlight: 'Membutuhkan sinar matahari penuh',
      soil: 'Tanah yang subur dan berdrainase baik',
      temperature: 'Suhu hangat 24-30°C untuk pertumbuhan optimal'
    },
    difficulty: 'easy',
    tags: ['spicy', 'perennial', 'kitchen-herb'],
    growthTime: '60-90 hari dari penanaman hingga panen pertama',
    size: 'Tinggi 45-90 cm'
  },
  {
    id: 'selada-romaine',
    name: 'Selada Romaine',
    scientificName: 'Lactuca sativa var. longifolia',
    category: 'hortikultura',
    description: 'Selada romaine memiliki daun renyah dan nutrisi tinggi. Sempurna untuk salad, sandwich, dan wrap. Mudah dibudidayakan di ruang terbatas.',
    shortDescription: 'Sayuran daun renyah yang sehat dan mudah dibudidayakan',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Rendah kalori dan kaya serat',
      'Kaya vitamin A, C, dan K',
      'Bisa dipanen bertahap',
      'Tumbuh cepat di container'
    ],
    careTips: {
      watering: 'Jaga tanah tetap lembab, hindari daun basah',
      sunlight: 'Cahaya matahari penuh hingga bayangan parsial',
      soil: 'Tanah kaya organik dan lembab',
      temperature: 'Suhu sejuk 15-20°C, hindari panas ekstrem'
    },
    difficulty: 'easy',
    tags: ['salad', 'leafy-green', 'fast-growing'],
    growthTime: '60-70 hari dari penanaman hingga panen',
    size: 'Tinggi 20-30 cm'
  },
  {
    id: 'terong-ungu',
    name: 'Terong Ungu',
    scientificName: 'Solanum melongena',
    category: 'hortikultura',
    description: 'Terong ungu adalah sayuran populer dengan rasa lembut dan serat halus. Cocok untuk berbagai masakan Indonesia.',
    shortDescription: 'Sayuran ungu yang lezat dan bergizi',
    image: 'https://images.unsplash.com/photo-1590427832856-55e70e95908b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Kaya antioksidan dan serat',
      'Serbaguna untuk berbagai masakan',
      'Produktif di musim yang tepat',
      'Nilai gizi tinggi'
    ],
    careTips: {
      watering: 'Siram teratur, jaga kelembaban tanah',
      sunlight: 'Membutuhkan sinar matahari penuh minimal 8 jam',
      soil: 'Tanah kaya organik dengan pH 6.0-6.5',
      temperature: 'Suhu hangat 22-30°C'
    },
    difficulty: 'medium',
    tags: ['vegetable', 'nightshade', 'productive'],
    growthTime: '100-120 hari dari penanaman hingga panen',
    size: 'Tinggi 60-90 cm'
  },
  {
    id: 'timun',
    name: 'Timun',
    scientificName: 'Cucumis sativus',
    category: 'hortikultura',
    description: 'Timun adalah sayuran segar yang menyehatkan dan menyegarkan. Sering digunakan untuk salad, lalapan, dan minuman.',
    shortDescription: 'Sayuran menyegarkan yang kaya air dan nutrisi',
    image: 'https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      '95% kandungan air untuk hidrasi',
      'Rendah kalori dan kaya vitamin K',
      'Tumbuh relatif cepat',
      'Bisa dimakan mentah atau matang'
    ],
    careTips: {
      watering: 'Siram rutin dan banyak, jaga tanah lembab',
      sunlight: 'Sinar matahari penuh minimal 6 jam',
      soil: 'Tanah yang subur, kaya organik, dan berdrainase baik',
      temperature: 'Suhu hangat 21-29°C'
    },
    difficulty: 'medium',
    tags: ['vine', 'hydrating', 'fast-growing'],
    growthTime: '50-70 hari dari penanaman hingga panen',
    size: 'Panjang merambat 1-2 meter'
  },

  // Tanaman Obat
  {
    id: 'jahe',
    name: 'Jahe',
    scientificName: 'Zingiber officinale',
    category: 'obat',
    description: 'Jahe adalah tanaman obat dan rempah yang sangat penting dalam pengobatan tradisional dan kuliner Indonesia. Memiliki khasiat anti-inflamasi dan antioksidan.',
    shortDescription: 'Rempah obat dengan khasiat anti-inflamasi',
    image: 'https://images.unsplash.com/photo-1584209812705-eb426a52b95e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Anti-inflamasi alami untuk nyeri sendi',
      'Meredakan mual dan mabuk perjalanan',
      'Meningkatkan sistem kekebalan tubuh',
      'Membantu pencernaan dan metabolisme'
    ],
    careTips: {
      watering: 'Siram teratur, jaga tanah lembab tapi tidak basah',
      sunlight: 'Bayangan parsial hingga sinar matahari tidak langsung',
      soil: 'Tanah kaya organik, gembur, dan berdrainase baik',
      temperature: 'Suhu hangat 22-30°C'
    },
    difficulty: 'medium',
    tags: ['medicinal', 'spice', 'anti-inflammatory'],
    growthTime: '8-10 bulan untuk panen rimpang',
    size: 'Tinggi 60-120 cm'
  },
  {
    id: 'kunyit',
    name: 'Kunyit',
    scientificName: 'Curcuma longa',
    category: 'obat',
    description: 'Kunyit adalah tanaman obat dengan kandungan kurkumin yang memiliki banyak khasiat kesehatan. Digunakan dalam pengobatan tradisional dan sebagai pewarna alami.',
    shortDescription: 'Tanaman obat emas dengan khasiat kurkumin',
    image: 'https://images.unsplash.com/photo-1584433221382-ea88725c682d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Antioksidan kuat dengan kurkumin',
      'Anti-inflamasi untuk kesehatan sendi',
      'Meningkatkan fungsi otak',
      'Mendukung kesehatan jantung'
    ],
    careTips: {
      watering: 'Siram teratur, jaga kelembaban tanah',
      sunlight: 'Bayangan parsial hingga sinar matahari pagi',
      soil: 'Tanah kaya organik dan gembur',
      temperature: 'Suhu hangat dan lembab 20-35°C'
    },
    difficulty: 'easy',
    tags: ['medicinal', 'antioxidant', 'traditional-medicine'],
    growthTime: '7-10 bulan untuk panen rimpang',
    size: 'Tinggi 60-90 cm'
  },
  {
    id: 'lidah-buaya',
    name: 'Lidah Buaya',
    scientificName: 'Aloe vera',
    category: 'obat',
    description: 'Lidah Buaya adalah tanaman sukulen yang sangat terkenal dengan khasiat penyembuhan untuk kulit dan kesehatan pencernaan.',
    shortDescription: 'Sukulen penyembuhan dengan gel alami untuk kulit',
    image: 'https://images.unsplash.com/photo-1509424349712-2e7011eec692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Menyembuhkan luka dan iritasi kulit',
      'Melembabkan dan meregenerasi kulit',
      'Meredakan luka bakar ringan',
      'Meningkatkan sistem kekebalan tubuh'
    ],
    careTips: {
      watering: 'Siram jarang, biarkan tanah benar-benar kering',
      sunlight: 'Sinar matahari cerah hingga bayangan',
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
    description: 'Temulawak adalah tanaman obat asli Indonesia yang dikenal sebagai "jamu" tradisional untuk menjaga kesehatan hati dan pencernaan.',
    shortDescription: 'Tanaman obat tradisional untuk kesehatan hati',
    image: 'https://images.unsplash.com/photo-1577057702066-b5f5d8fd8a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Melindungi dan menjaga kesehatan hati',
      'Meningkatkan nafsu makan',
      'Antioksidan dan anti-inflamasi',
      'Meningkatkan stamina dan vitalitas'
    ],
    careTips: {
      watering: 'Siram teratur, jaga kelembaban tanah',
      sunlight: 'Bayangan parsial hingga sinar matahari tidak langsung',
      soil: 'Tanah subur dan kaya organik',
      temperature: 'Suhu hangat 25-30°C'
    },
    difficulty: 'medium',
    tags: ['medicinal', 'liver-health', 'traditional-jamu'],
    growthTime: '8-10 bulan untuk panen rimpang',
    size: 'Tinggi 90-150 cm'
  },

  // Perkebunan
  {
    id: 'kopi-arabica',
    name: 'Kopi Arabica',
    scientificName: 'Coffea arabica',
    category: 'perkebunan',
    description: 'Kopi Arabica adalah spesies kopi berkualitas tinggi dengan rasa yang kompleks dan aroma yang harum. Salah satu komoditas pertanian penting di Indonesia.',
    shortDescription: 'Kopi premium berkualitas tinggi dengan rasa kompleks',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Komoditas ekonomi bernilai tinggi',
      'Menghasilkan biji kopi berkualitas premium',
      'Budidaya yang berkelanjutan',
      'Kontribusi pada kemandirian ekonomi'
    ],
    careTips: {
      watering: 'Siram teratur, jaga kelembaban tanah',
      sunlight: 'Bayangan parsial 30-50%, hindari matahari penuh',
      soil: 'Tanah vulkanik kaya organik dengan pH 6.0-6.5',
      temperature: 'Suhu sejuk 15-24°C, hindari panas ekstrem'
    },
    difficulty: 'hard',
    tags: ['commercial', 'coffee', 'cash-crop'],
    growthTime: '3-5 tahun untuk panen pertama, produktif hingga 20 tahun',
    size: 'Tinggi 2-4 meter (dipangkas untuk kemudahan panen)'
  },
  {
    id: 'vanili',
    name: 'Vanili',
    scientificName: 'Vanilla planifolia',
    category: 'perkebunan',
    description: 'Vanili adalah rempah termahal kedua di dunia setelah safron. Indonesia adalah salah satu produsen vanili terbesar dunia.',
    shortDescription: 'Rempah mewah dengan aroma manis khas',
    image: 'https://images.unsplash.com/photo-1598615341065-9a4172a86253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Komoditas ekspor bernilai ekonomi tinggi',
      'Permintaan pasar yang stabil dan meningkat',
      'Budidaya organik yang berkelanjutan',
      'Diversifikasi hasil pertanian'
    ],
    careTips: {
      watering: 'Siram teratur, jaga kelembaban tinggi',
      sunlight: 'Bayangan parsial 50-70%, hindari matahari langsung',
      soil: 'Tanah kaya organik, gembur, dan berdrainase baik',
      temperature: 'Suhu hangat dan lembab 21-32°C'
    },
    difficulty: 'hard',
    tags: ['spice', 'luxury-crop', 'orchid-family'],
    growthTime: '2-3 tahun untuk panen pertama',
    size: 'Panjang merambat 10-20 meter (memerlukan penyangga)'
  },
  {
    id: 'kakao',
    name: 'Kakao',
    scientificName: 'Theobroma cacao',
    category: 'perkebunan',
    description: 'Kakao adalah tanaman asal Amerika Selatan yang buahnya digunakan untuk membuat coklat. Indonesia adalah produsen kakao terbesar ketiga di dunia.',
    shortDescription: 'Sumber coklat komersial bernilai tinggi',
    image: 'https://images.unsplash.com/photo-1566273522370-eb97bf5935a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Komoditas pertanian bernilai tinggi',
      'Permintaan global untuk coklat',
      'Dapat diolah menjadi berbagai produk',
      'Kontribusi pada perekonomian lokal'
    ],
    careTips: {
      watering: 'Siram teratur, kebutuhan air tinggi',
      sunlight: 'Bayangan saat muda, sinar matahari penuh saat dewasa',
      soil: 'Tanah dalam, kaya organik, dan berdrainase baik',
      temperature: 'Suhu hangat dan lembab 21-32°C'
    },
    difficulty: 'medium',
    tags: ['cash-crop', 'chocolate', 'tropical'],
    growthTime: '3-5 tahun untuk panen pertama',
    size: 'Tinggi 4-8 meter di alam, 3-5 meter di perkebunan'
  },
  {
    id: 'karet',
    name: 'Karet',
    scientificName: 'Hevea brasiliensis',
    category: 'perkebunan',
    description: 'Karet adalah tanaman perkebunan penting yang lateksnya digunakan untuk berbagai produk industri. Indonesia adalah produsen karet terbesar kedua di dunia.',
    shortDescription: 'Sumber lateks alami untuk industri',
    image: 'https://images.unsplash.com/photo-1622474427629-501c6b71e3b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Komoditas ekspor penting',
      'Permintaan industri otomotif dan manufaktur',
      'Masa produktif panjang (25-30 tahun)',
      'Kontribusi signifikan pada devisa negara'
    ],
    careTips: {
      watering: 'Siram teratur selama musim kering',
      sunlight: 'Sinar matahari penuh minimal 6 jam',
      soil: 'Tanah dalam dan berdrainase baik, pH 4.5-6.5',
      temperature: 'Suhu hangat 24-30°C'
    },
    difficulty: 'medium',
    tags: ['cash-crop', 'industrial', 'export-commodity'],
    growthTime: '6-7 tahun untuk mulai disadap',
    size: 'Tinggi 20-30 meter di alam, 15-20 meter di perkebunan'
  }
];

// Helper functions for data manipulation
export const getPlantsByCategory = (categoryId: string): Plant[] => {
  return plants.filter(plant => plant.category === categoryId);
};

export const getPlantById = (id: string): Plant | undefined => {
  return plants.find(plant => plant.id === id);
};

export const searchPlants = (query: string): Plant[] => {
  const lowerQuery = query.toLowerCase();
  return plants.filter(plant =>
    plant.name.toLowerCase().includes(lowerQuery) ||
    plant.scientificName.toLowerCase().includes(lowerQuery) ||
    plant.shortDescription.toLowerCase().includes(lowerQuery) ||
    plant.benefits.some(benefit => benefit.toLowerCase().includes(lowerQuery)) ||
    (plant.tags && plant.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
  );
};

export const getRelatedPlants = (plant: Plant, limit: number = 3): Plant[] => {
  return plants
    .filter(p => p.id !== plant.id && p.category === plant.category)
    .slice(0, limit);
};