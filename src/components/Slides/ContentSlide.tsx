import type { Slide } from "../../types/slide";
import CodeBlock from "../UI/CodeBlock";
import { Lightbulb } from "lucide-react";

interface ContentSlideProps {
  slide: Slide;
}

export default function ContentSlide({ slide }: ContentSlideProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-5xl">{slide.emoji}</div>
        <div>
          <h2 className="text-4xl font-bold">{slide.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
            {slide.subtitle}
          </p>
        </div>
      </div>

      {slide.code && (
        <CodeBlock code={slide.code.code} language={slide.code.language} />
      )}

      {slide.tip && (
        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-amber-500 shrink-0 mt-1" size={20} />
            <p className="text-amber-900 dark:text-amber-100">
              <strong>💡 Tip:</strong> {slide.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
