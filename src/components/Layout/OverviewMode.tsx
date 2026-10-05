import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { slidesData } from "../../data/slidesData";

interface OverviewModeProps {
  currentSlide: number;
  onSlideClick: (index: number) => void;
  onClose: () => void;
}

export default function OverviewMode({
  currentSlide,
  onSlideClick,
  onClose,
}: OverviewModeProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-slate-100 dark:bg-slate-950 overflow-y-auto"
      >
        {/* Header Overview */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">🗂️ Overview Mode</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Klik slide untuk loncat ke sana · Tekan{" "}
              <kbd className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                Esc
              </kbd>{" "}
              atau{" "}
              <kbd className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">
                O
              </kbd>{" "}
              untuk keluar
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Close overview"
          >
            <X size={24} />
          </button>
        </div>

        {/* Grid Slides */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {slidesData.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <motion.button
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  onSlideClick(index);
                  onClose();
                }}
                className={`group relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 ${
                  isActive
                    ? "ring-4 ring-blue-500 ring-offset-2 dark:ring-offset-slate-950"
                    : "ring-1 ring-slate-200 dark:ring-slate-800"
                }`}
              >
                {/* Slide Preview Background */}
                <div className="absolute inset-0 bg-linear-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 p-4 flex flex-col">
                  {/* Mini Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{slide.emoji}</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {index + 1} / {slidesData.length}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-left line-clamp-2 text-slate-900 dark:text-slate-100">
                    {slide.title}
                  </h3>

                  {/* Subtitle */}
                  {slide.subtitle && (
                    <p className="text-xs text-left line-clamp-2 mt-1 text-slate-600 dark:text-slate-400">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Content Preview */}
                  <div className="flex-1 mt-3 space-y-1">
                    {slide.features &&
                      slide.features.slice(0, 2).map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-xs"
                        >
                          <span>{f.icon}</span>
                          <span className="line-clamp-1 text-slate-700 dark:text-slate-300">
                            {f.title}
                          </span>
                        </div>
                      ))}
                    {slide.code && (
                      <div className="h-8 bg-slate-800 rounded text-xs p-1 overflow-hidden">
                        <div className="text-green-400 font-mono text-[10px] line-clamp-2">
                          {slide.code.code.split("\n")[0]}
                        </div>
                      </div>
                    )}
                    {slide.listItems &&
                      slide.listItems.slice(0, 2).map((item, i) => (
                        <div
                          key={i}
                          className="text-xs text-slate-700 dark:text-slate-300 line-clamp-1"
                        >
                          • {item}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                    Buka Slide
                  </span>
                </div>

                {/* Active Badge */}
                {isActive && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Aktif
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
