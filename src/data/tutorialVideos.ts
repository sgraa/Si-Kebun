export type TutorialVideo = {
  id: string;
  title: string;
  description: string;
  category: string;     // kategori tanaman (hias, obat, hortikultura, dsb.)
};

export const tutorialVideos: TutorialVideo[] = [
  {
    id: "Imh6pgLs1kA",
    title: "Tutorial Menanam & Membudidayakan Tanaman Monstera Deliciousa",
    description: "Langkah-langkah menanam tanaman monstera deliciousa dari awal sampai akhir.",
    category: "Tanaman Hias", 
  },
  {
   id: "g6FErRqDnAI",
    title: "Tutorial Perawatan Tanaman Monstera Deliciousa",
    description: "Panduan lengkap merawat monstera dengan mudah yang perlu diketahui.",
    category: "Tanaman Hias",
  },
  {
    id: "kKRafUmwjas",
    title: "Tutorial Menanam & Membudidayakan Tanaman Lidah Mertua",
    description: "Langkah-langkah menanam tanaman lidah mertua dari awal sampai akhir.",
    category: "Tanaman Hias",
  },
  {
    id: "2iR0sg5MOmU",
    title: "Tutorial Perawatan Tanaman Lidah Mertua",
    description: "Panduan lengkap merawat lidah mertua dengan mudah.",
    category: "Tanaman Hias",
  },
  {
    id: "CukK38pn_iI",
    title: "Tutorial Menanam & Membudidayakan Tomat Cherry",
    description: "Langkah-langkah menanam tomat cherry secara lengkap.",
    category: "Hortikultura",
  },
  {
    id: "wv4AguW_dmM",
    title: "Tutorial Menanam & Membudidayakan Cabai Rawit ",
    description: "Langkah-langkah menanam cabai rawit secara lengkap.",
    category: "Hortikultura",
  },
  {
    id: "iTvghYNOZbQ",
    title: "Tutorial Menanam & Membudidayakan Jahe ",
    description: "Langkah-langkah menanam jahe secara lengkap.",
    category: "Tanaman Obat",
  },
  {
    id: "73mNTNqhIR4",
    title: "Tutorial Menanam & Membudidayakan Tanaman Kakao ",
    description: "Langkah-langkah menanam tanaman kakao secara lengkap.",
    category: "Perkebunan",
  },
];
