import type { Slide } from "../../types/slide";
import { Mail, Globe, Briefcase, Share2 } from "lucide-react";

interface ClosingSlideProps {
  slide: Slide;
}

export default function ClosingSlide({ slide }: ClosingSlideProps) {
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
        alert("Link berhasil disalin ke clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-6">{slide.emoji}</div>
      <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
        {slide.title}
      </h2>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-12">
        {slide.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl w-full">
        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
          <Mail className="mx-auto mb-3 text-blue-500" size={32} />
          <h3 className="font-semibold mb-1">Kontak</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            armanta.dev95@gmail.com
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
          <Globe className="mx-auto mb-3 text-green-500" size={32} />
          <h3 className="font-semibold mb-1">Website</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            armanta.dev95
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
          <Briefcase className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="font-semibold mb-1">Freelance</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Tersedia untuk proyek web
          </p>
        </div>
      </div>

      <button
        onClick={handleShare}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg"
      >
        <Share2 size={20} />
        Bagikan Presentasi
      </button>

      <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
        Dibuat dengan ❤️ oleh armanta.dev95 · © 2026
      </p>
    </div>
  );
}
