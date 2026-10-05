import { slidesData } from "../../data/slidesData";

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
      {slidesData.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => {
            onSlideClick(index);
            onClose();
          }}
          className={`w-full text-left p-4 rounded-lg transition-colors flex items-center gap-3 ${
            index === currentSlide
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
              : "hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
        >
          <span className="text-2xl">{slide.emoji}</span>
          <div className="flex-1">
            <div className="font-semibold">{slide.title}</div>
            {slide.subtitle && (
              <div className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                {slide.subtitle}
              </div>
            )}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {index + 1} / {slidesData.length}
          </span>
        </button>
      ))}
    </div>
  );
}
