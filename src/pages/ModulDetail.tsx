// src/pages/ModulDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/modulData';

const ModulDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const modul = modules.find((m) => m.id === id);

  // State Management
  const [step, setStep] = useState(0); // 0-9 untuk materi, 10 untuk kuis intro, 11+ untuk soal
  const [quizScore, setQuizScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Scroll ke atas setiap ganti step
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  if (!modul) return <div className="text-center py-20">Modul tidak ditemukan.</div>;

  const totalMateri = modul.materi.length;
  const isMateriPhase = step < totalMateri;
  const isQuizPhase = step >= totalMateri && !showResult;

  // --- LOGIC FUNCTIONS ---
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) setQuizScore(quizScore + 20); // 20 poin x 5 soal = 100
    
    // Cek apakah ini soal terakhir
    const currentQuizIndex = step - totalMateri;
    if (currentQuizIndex < modul.quiz.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  // --- RENDER: HASIL AKHIR ---
  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-2">Selamat!</h2>
          <p className="text-gray-600 mb-6">Anda telah menyelesaikan modul <strong>{modul.title}</strong></p>
          
          <div className="bg-emerald-50 p-6 rounded-xl mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Skor Kuis Anda</p>
            <p className="text-5xl font-bold text-emerald-600 my-2">{quizScore}/100</p>
            <p className="text-sm text-gray-500">
              {quizScore === 100 ? 'Sempurna! Anda ahli bercocok tanam.' : 'Bagus! Teruslah belajar.'}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button onClick={() => navigate('/tutorial')} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg">
              Pilih Modul Lain
            </button>
            <button onClick={() => { setStep(0); setQuizScore(0); setShowResult(false); }} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg">
              Ulangi Modul
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER: MATERI & KUIS ---
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER NAVIGASI */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/tutorial')} className="text-gray-500 hover:text-emerald-600 flex items-center gap-2">
            ← <span className="hidden md:inline">Kembali ke Daftar</span>
          </button>
          <div className="text-sm font-semibold text-gray-700">
            {isMateriPhase ? `Materi ${step + 1} / ${totalMateri}` : `Kuis Akhir`}
          </div>
          <div className="w-1/3 max-w-xs bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${((step + 1) / (totalMateri + modul.quiz.length)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px] flex flex-col">
          
          {/* TAMPILAN MATERI */}
                    {isMateriPhase && (
                      <div className="p-8 md:p-12 flex flex-col h-full">
                        {/* JUDUL LANGKAH */}
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-4">
                          {modul.materi[step].title}
                        </h1>

                        {/* --- TAMBAHAN: GAMBAR LANGKAH (STEP IMAGE) --- */}
                        {/* Cek apakah ada gambar, jika ada tampilkan */}
                        {modul.materi[step].image && (
                          <div className="w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden shadow-md">
                            <img 
                              src={modul.materi[step].image} 
                              alt={modul.materi[step].title} 
                              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        {/* --------------------------------------------- */}

                        <div className="prose max-w-none text-gray-600 text-lg leading-relaxed flex-grow">
                          {modul.materi[step].content}
                        </div>
                        
                        {/* Navigasi Materi (Biarkan sama seperti sebelumnya) */}
                        <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                          {/* ... tombol prev/next ... */}
                          <button 
                            onClick={handlePrev} 
                            disabled={step === 0}
                            className={`px-6 py-2 rounded-lg font-medium ${step === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                          >
                            Sebelumnya
                          </button>
                          <button 
                            onClick={handleNext}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2 rounded-lg font-bold shadow-md transition-all hover:scale-105"
                          >
                            {step === totalMateri - 1 ? 'Mulai Kuis 📝' : 'Lanjut →'}
                          </button>
                        </div>
                      </div>
                    )}

          {/* TAMPILAN KUIS */}
          {isQuizPhase && (
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">KUIS</span>
                <h2 className="text-2xl font-bold mt-3 text-gray-800">
                  Pertanyaan {step - totalMateri + 1} dari {modul.quiz.length}
                </h2>
                <p className="text-lg text-gray-700 mt-4">
                  {modul.quiz[step - totalMateri].question}
                </p>
              </div>

              <div className="grid gap-4">
                {modul.quiz[step - totalMateri].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(idx === modul.quiz[step - totalMateri].correctAnswer)}
                    className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all font-medium text-gray-700"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ModulDetail;