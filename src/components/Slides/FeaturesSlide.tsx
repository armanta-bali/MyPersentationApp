import type { Slide } from "../../types/slide";
import { Lightbulb } from "lucide-react";

interface FeaturesSlideProps {
  slide: Slide;
}

export default function FeaturesSlide({ slide }: FeaturesSlideProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-8 w-full">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-10">
        <div className="text-5xl md:text-6xl mb-3 md:mb-4">{slide.emoji}</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">
          {slide.title}
        </h2>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {slide.subtitle}
        </p>
      </div>

      {/* Features Grid */}
      {slide.features && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {slide.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 md:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Fact/Tip Section */}
      {slide.tip && (
        <div className="p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-amber-500 shrink-0 mt-1" size={20} />
            <p className="text-sm md:text-base text-amber-900 dark:text-amber-100 leading-relaxed">
              <strong>💡 Fakta:</strong> {slide.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
