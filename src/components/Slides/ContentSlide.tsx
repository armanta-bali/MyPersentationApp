import type { Slide } from "../../types/slide";
import CodeBlock from "../UI/CodeBlock";
import { Lightbulb } from "lucide-react";

interface ContentSlideProps {
  slide: Slide;
}

export default function ContentSlide({ slide }: ContentSlideProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 w-full">
      {/* Header Section: Stack vertikal di HP, horizontal di desktop */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="text-4xl md:text-5xl">{slide.emoji}</div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 mt-1 md:mt-2 leading-relaxed">
            {slide.subtitle}
          </p>
        </div>
      </div>

      {/* Code Block Section: Wrapper overflow untuk mencegah layout rusak di HP */}
      {slide.code && (
        <div className="w-full overflow-x-auto rounded-lg mb-4 md:mb-6">
          <CodeBlock code={slide.code.code} language={slide.code.language} />
        </div>
      )}

      {/* Tip Section */}
      {slide.tip && (
        <div className="p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-amber-500 shrink-0 mt-1" size={20} />
            <p className="text-sm md:text-base text-amber-900 dark:text-amber-100 leading-relaxed">
              <strong>💡 Tip:</strong> {slide.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
