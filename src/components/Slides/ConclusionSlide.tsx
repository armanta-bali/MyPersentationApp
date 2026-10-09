import type { Slide } from "../../types/slide";
import { Lightbulb, CheckCircle } from "lucide-react";

interface ConclusionSlideProps {
  slide: Slide;
}

export default function ConclusionSlide({ slide }: ConclusionSlideProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 w-full">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-8">
        <div className="text-5xl md:text-6xl mb-3 md:mb-4">{slide.emoji}</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">
          {slide.title}
        </h2>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {slide.subtitle}
        </p>
      </div>

      {/* List Items Section */}
      {slide.listItems && (
        <div className="space-y-3 mb-6 md:mb-8">
          {slide.listItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 md:p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm md:shadow border border-slate-200 dark:border-slate-700 transition-transform hover:-translate-y-0.5"
            >
              <CheckCircle
                className="text-green-500 shrink-0 mt-0.5"
                size={20}
              />
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Final Tip Section */}
      {slide.tip && (
        <div className="p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-amber-500 shrink-0 mt-1" size={20} />
            <p className="text-sm md:text-base text-amber-900 dark:text-amber-100 leading-relaxed">
              <strong>💡 Tips Terakhir:</strong> {slide.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
