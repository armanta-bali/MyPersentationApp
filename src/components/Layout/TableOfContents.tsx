import { slidesData } from "../../data/slidesData";
import { Check } from "lucide-react";

interface TableOfContentsProps {
  currentSlide: number;
  onSlideClick: (index: number) => void;
  onClose: () => void;
}

export default function TableOfContents({
  currentSlide,
  onSlideClick,
  onClose,
}: TableOfContentsProps) {
  return (
    <div className="space-y-2">
      {slidesData.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <button
            key={slide.id}
            onClick={() => {
              onSlideClick(index);
              onClose();
            }}
            className={`w-full text-left p-4 rounded-lg transition-all flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isActive
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-2 border-blue-500 dark:border-blue-400"
                : "hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-transparent"
            }`}
          >
            <span className="text-2xl shrink-0">{slide.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate">{slide.title}</div>
              {slide.subtitle && (
                <div className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                  {slide.subtitle}
                </div>
              )}
            </div>
            {isActive && (
              <Check
                size={16}
                className="text-blue-600 dark:text-blue-400 shrink-0"
              />
            )}
            <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">
              {index + 1} / {slidesData.length}
            </span>
          </button>
        );
      })}
    </div>
  );
}
