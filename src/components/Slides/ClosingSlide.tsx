import { useState } from "react";
import type { Slide } from "../../types/slide";
import { Mail, Globe, Briefcase, Share2, Check } from "lucide-react";

interface ClosingSlideProps {
  slide: Slide;
}

export default function ClosingSlide({ slide }: ClosingSlideProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Belajar JavaScript dari Nol",
      text: "Panduan lengkap belajar JavaScript untuk pemula",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);

        // UX Polish: Ubah state tombol sementara, jangan pakai alert()
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl md:text-7xl mb-4 md:mb-6">{slide.emoji}</div>

      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
        {slide.title}
      </h2>

      <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 md:mb-12 leading-relaxed">
        {slide.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 max-w-3xl w-full">
        {/* Kartu Kontak */}
        <div className="p-5 md:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 transition-transform hover:-translate-y-1">
          <Mail className="mx-auto mb-3 text-blue-500" size={32} />
          <h3 className="font-semibold mb-1">Kontak</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 break-all">
            armanta.dev95@gmail.com
          </p>
        </div>

        {/* Kartu Website */}
        <div className="p-5 md:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 transition-transform hover:-translate-y-1">
          <Globe className="mx-auto mb-3 text-green-500" size={32} />
          <h3 className="font-semibold mb-1">Website</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            armanta.dev95
          </p>
        </div>

        {/* Kartu Freelance */}
        <div className="p-5 md:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 transition-transform hover:-translate-y-1">
          <Briefcase className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="font-semibold mb-1">Freelance</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Tersedia untuk proyek web
          </p>
        </div>
      </div>

      {/* Tombol Share dengan State Dinamis */}
      <button
        onClick={handleShare}
        disabled={isCopied}
        className={`px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg ${
          isCopied
            ? "bg-green-500 text-white cursor-default"
            : "bg-green-600 hover:bg-green-700 text-white hover:scale-105 active:scale-95"
        }`}
        aria-label="Bagikan presentasi ini"
      >
        {isCopied ? <Check size={20} /> : <Share2 size={20} />}
        {isCopied ? "Link Disalin! ✅" : "Bagikan Presentasi"}
      </button>

      {/* Footer yang Lengkap Sesuai Prototype */}
      <p className="mt-8 md:mt-10 text-sm text-slate-500 dark:text-slate-400">
        Dibuat dengan ❤️ oleh armanta.dev95 · © 2026 - Semua hak dilindungi
      </p>
    </div>
  );
}
