import type { Slide } from "../../types/slide";
import { Lightbulb, CheckCircle } from "lucide-react";

interface ConclusionSlideProps {
  slide: Slide;
}

export default function ConclusionSlide({ slide }: ConclusionSlideProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{slide.emoji}</div>
        <h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          {slide.subtitle}
        </p>
      </div>

      {slide.listItems && (
        <div className="space-y-3 mb-8">
          {slide.listItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700"
            >
              <CheckCircle
                className="text-green-500 shrink-0 mt-0.5"
                size={20}
              />
              <p className="text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      )}

      {slide.tip && (
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-amber-500 shrink-0 mt-1" size={20} />
            <p className="text-amber-900 dark:text-amber-100">
              <strong>💡 Tips Terakhir:</strong> {slide.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
