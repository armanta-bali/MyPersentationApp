import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Navigation({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
}: NavigationProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-15 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 z-40">
        <div
          className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 z-40">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 border border-slate-200 dark:border-slate-700"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 border border-slate-200 dark:border-slate-700"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}
