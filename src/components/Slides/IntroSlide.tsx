import type { Slide } from "../../types/slide";
import { ArrowRight, List } from "lucide-react";

interface IntroSlideProps {
  slide: Slide;
  onOpenToc: () => void;
  onNavigate?: (index: number) => void; // 👈 Tambahkan prop opsional
}

export default function IntroSlide({
  slide,
  onOpenToc,
  onNavigate,
}: IntroSlideProps) {
  return (
    <div className="min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-8">
      {/* Emoji - Ukuran responsif */}
      <div className="text-5xl md:text-7xl mb-4 md:mb-6 animate-bounce">
        {slide.emoji}
      </div>

      {/* Judul - Typography responsif */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
        {slide.title}
      </h1>

      {/* Subtitle - Typography responsif + leading-relaxed */}
      <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 md:mb-12 leading-relaxed">
        {slide.subtitle}
      </p>

      {/* Features Grid */}
      {slide.features && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl w-full">
          {slide.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 md:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">
                {feature.icon}
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* CTA Buttons - Responsif: menumpuk di mobile, horizontal di desktop */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
        <button
          onClick={() => onNavigate?.(1)} // 👈 Loncat ke slide ke-2 (index 1)
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
        >
          Mulai Belajar <ArrowRight size={20} />
        </button>
        <button
          onClick={onOpenToc}
          className="w-full sm:w-auto px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <List size={20} /> Lihat Daftar Isi
        </button>
      </div>
    </div>
  );
}
