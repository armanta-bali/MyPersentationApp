import type { Slide } from "../../types/slide";
import { ArrowRight, List } from "lucide-react";

interface IntroSlideProps {
  slide: Slide;
  onOpenToc: () => void;
}

export default function IntroSlide({ slide, onOpenToc }: IntroSlideProps) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-6 animate-bounce">{slide.emoji}</div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        {slide.title}
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-12">
        {slide.subtitle}
      </p>

      {slide.features && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full">
          {slide.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
          Mulai Belajar <ArrowRight size={20} />
        </button>
        <button
          onClick={onOpenToc}
          className="px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg font-semibold flex items-center gap-2 transition-colors"
        >
          <List size={20} /> Lihat Daftar Isi
        </button>
      </div>
    </div>
  );
}
