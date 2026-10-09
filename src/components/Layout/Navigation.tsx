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
          // PERTAHANKAN: bg-linear-to-r adalah sintaks resmi Tailwind v4
          className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      {/* PERBAIKAN: Responsif untuk mobile (tombol lebih lebar & ada teks) */}
      <div className="fixed bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-3 md:gap-4 z-40 px-4">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="flex-1 md:flex-none p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 border border-slate-200 dark:border-slate-700 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
          {/* Teks hanya muncul di mobile agar mudah ditekan */}
          <span className="md:hidden ml-2 font-semibold">Prev</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="flex-1 md:flex-none p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 border border-slate-200 dark:border-slate-700 flex items-center justify-center"
          aria-label="Next slide"
        >
          {/* Teks hanya muncul di mobile agar mudah ditekan */}
          <span className="md:hidden mr-2 font-semibold">Next</span>
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}
